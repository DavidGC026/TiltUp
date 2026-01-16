#!/usr/bin/env python3
"""exam_excel_to_sql.py

Genera un archivo SQL (MySQL/MariaDB) para poblar las tablas:
  - exams
  - exam_questions
  - exam_question_options

A partir de un archivo .xlsx con 2 hojas:
  - PREGUNTAS: columnas (#, PREGUNTA)
  - RESPUESTAS: columnas (#, OPCIONES DE RESPUESTA, RESPUESTA)

Notas:
- No requiere dependencias externas (solo stdlib). No usa openpyxl.
- El label de opción (A/B/C/D/...) se asigna por el orden de aparición de las filas en RESPUESTAS.
- Normaliza opciones booleanas comunes: option_text '0' => 'FALSO', '1' => 'VERDADERO'.

Ejemplo:
  python3 scripts/exam_excel_to_sql.py "shared/EXAMEN DIAGNÓSTICO.xlsx" --section-id sec-1-1 --exam-id exam-sec-1-1 --title "Examen Diagnóstico" --description "Importado desde EXAMEN DIAGNÓSTICO.xlsx" --out shared/examen_diagnostico.sql
"""

from __future__ import annotations

import argparse
import datetime as _dt
import re
import sys
import zipfile
import xml.etree.ElementTree as ET

NS = {
    "main": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
    "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    "rel": "http://schemas.openxmlformats.org/package/2006/relationships",
}


def _read_xml(zf: zipfile.ZipFile, path: str) -> ET.Element:
    try:
        data = zf.read(path)
    except KeyError as e:
        raise FileNotFoundError(f"No se encontró '{path}' dentro del .xlsx") from e
    return ET.fromstring(data)


def _load_shared_strings(zf: zipfile.ZipFile) -> list[str]:
    # sharedStrings.xml no siempre existe si el libro no lo necesita
    try:
        root = _read_xml(zf, "xl/sharedStrings.xml")
    except FileNotFoundError:
        return []

    out: list[str] = []
    for si in root.findall("main:si", NS):
        # Puede ser <t> simple o rich text <r><t>
        parts: list[str] = []
        for t in si.findall(".//main:t", NS):
            if t.text:
                parts.append(t.text)
        out.append("".join(parts))
    return out


def _sheet_name_to_xml_path(zf: zipfile.ZipFile) -> dict[str, str]:
    wb = _read_xml(zf, "xl/workbook.xml")
    rels = _read_xml(zf, "xl/_rels/workbook.xml.rels")

    rid_to_target: dict[str, str] = {}
    for rel in rels.findall("rel:Relationship", NS):
        rid = rel.get("Id")
        target = rel.get("Target")
        if rid and target:
            rid_to_target[rid] = target

    mapping: dict[str, str] = {}
    for sheet in wb.findall("main:sheets/main:sheet", NS):
        name = sheet.get("name")
        # Atributo r:id vive en el namespace de relationships
        rid = sheet.get(f"{{{NS['r']}}}id")
        if not name or not rid:
            continue

        target = rid_to_target.get(rid)
        if not target:
            continue

        # Normalmente es 'worksheets/sheet1.xml'
        full_path = "xl/" + target.lstrip("/")
        mapping[name] = full_path

    return mapping


_CELL_REF_RE = re.compile(r"^([A-Z]+)([0-9]+)$")


def _col_from_cell_ref(cell_ref: str) -> str | None:
    m = _CELL_REF_RE.match(cell_ref)
    return m.group(1) if m else None


def _cell_to_value(cell: ET.Element, shared_strings: list[str]) -> str:
    t = cell.get("t")

    if t == "s":
        v = cell.find("main:v", NS)
        if v is None or v.text is None:
            return ""
        try:
            idx = int(v.text)
        except ValueError:
            return ""
        if 0 <= idx < len(shared_strings):
            return shared_strings[idx]
        return ""

    if t == "inlineStr":
        is_elem = cell.find("main:is", NS)
        if is_elem is None:
            return ""
        parts: list[str] = []
        for t_elem in is_elem.findall(".//main:t", NS):
            if t_elem.text:
                parts.append(t_elem.text)
        return "".join(parts)

    # t puede ser None, 'str', 'b', etc. Para este caso, usamos <v> si existe.
    v = cell.find("main:v", NS)
    return (v.text or "") if v is not None else ""


def _iter_sheet_rows(
    zf: zipfile.ZipFile, sheet_xml_path: str, shared_strings: list[str]
):
    root = _read_xml(zf, sheet_xml_path)

    for row in root.findall(".//main:sheetData/main:row", NS):
        row_r = row.get("r")
        try:
            row_index = int(row_r) if row_r else None
        except ValueError:
            row_index = None

        cells: dict[str, str] = {}
        for cell in row.findall("main:c", NS):
            ref = cell.get("r") or ""
            col = _col_from_cell_ref(ref)
            if not col:
                continue
            cells[col] = _cell_to_value(cell, shared_strings)

        yield row_index, cells


def _norm_header(s: str) -> str:
    s = (s or "").strip()
    s = re.sub(r"\s+", " ", s)
    return s.upper()


def _find_col(header_cells: dict[str, str], candidates: list[str]) -> str | None:
    """Encuentra la columna cuyo encabezado matchee mejor.

    Importante: evita falsos positivos como:
      - "OPCIONES DE RESPUESTA" (columna de texto) vs "RESPUESTA" (columna 0/1)

    Regla: preferimos match exacto > startswith > match de palabra > contains.
    """

    normed = {col: _norm_header(val) for col, val in header_cells.items()}

    best_col: str | None = None
    best_score: float = -1.0

    for col, v in normed.items():
        for cand_raw in candidates:
            cand = _norm_header(cand_raw)

            score: float | None = None
            if v == cand:
                score = 3.0
            elif v.startswith(cand):
                score = 2.0
            else:
                # palabra completa (si aplica)
                try:
                    if re.search(rf"\b{re.escape(cand)}\b", v):
                        score = 1.0
                    elif cand in v:
                        score = 0.5
                except re.error:
                    # fallback súper seguro
                    if cand in v:
                        score = 0.5

            if score is None:
                continue

            if score > best_score or (score == best_score and (best_col is None or col < best_col)):
                best_score = score
                best_col = col

    return best_col


def _parse_intish(v: str) -> int | None:
    if v is None:
        return None
    s = str(v).strip()
    if not s:
        return None

    # 1, 1.0, 1), 1.
    try:
        return int(s)
    except ValueError:
        pass

    try:
        return int(float(s))
    except ValueError:
        pass

    m = re.search(r"\d+", s)
    if m:
        try:
            return int(m.group(0))
        except ValueError:
            return None

    return None


def _clean_text(v: str) -> str:
    s = "" if v is None else str(v)
    # Colapsa saltos de línea/espacios múltiples para evitar SQL raro
    s = re.sub(r"\s+", " ", s)
    return s.strip()


def _parse_boolish(v: str) -> bool:
    s = _clean_text(v).upper()
    return s in {"1", "TRUE", "VERDADERO", "SI", "S", "X", "Y"}


def _normalize_option_text(v: str) -> str:
    s = _clean_text(v)
    if s == "0":
        return "FALSO"
    if s == "1":
        return "VERDADERO"
    return s


def _label_for_index(i: int) -> str:
    # Mantener 1 letra para compatibilidad con CHAR(1)
    if not (0 <= i < 26):
        raise ValueError(
            f"Demasiadas opciones ({i + 1}). Este script solo soporta hasta 26 (A-Z)."
        )
    return chr(ord("A") + i)


def _sql_quote(s: str | None) -> str:
    if s is None:
        return "NULL"
    s2 = _clean_text(s)
    # Escapado SQL estándar
    s2 = s2.replace("'", "''")
    return f"'{s2}'"


def _pick_sheet_path(sheet_map: dict[str, str], requested: str) -> str:
    if requested in sheet_map:
        return sheet_map[requested]

    # case-insensitive
    req_low = requested.lower()
    for k in sheet_map.keys():
        if k.lower() == req_low:
            return sheet_map[k]

    # whitespace-insensitive
    req_norm = _norm_header(requested)
    for k in sheet_map.keys():
        if _norm_header(k) == req_norm:
            return sheet_map[k]

    available = ", ".join(sorted(sheet_map.keys()))
    raise KeyError(
        f"No existe la hoja '{requested}'. Hojas disponibles: {available if available else '(ninguna)'}"
    )


CREATE_TABLES_SQL = """CREATE TABLE IF NOT EXISTS exams (
  id VARCHAR(50) PRIMARY KEY,
  section_id VARCHAR(50) NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_exams_section FOREIGN KEY (section_id) REFERENCES sections(id) ON DELETE CASCADE,
  INDEX idx_exams_section_id (section_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS exam_questions (
  id VARCHAR(80) PRIMARY KEY,
  exam_id VARCHAR(50) NOT NULL,
  question_number INT NOT NULL,
  question_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_exam_questions_exam FOREIGN KEY (exam_id) REFERENCES exams(id) ON DELETE CASCADE,
  UNIQUE KEY uq_exam_question_number (exam_id, question_number),
  INDEX idx_exam_questions_exam_id (exam_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS exam_question_options (
  id VARCHAR(90) PRIMARY KEY,
  question_id VARCHAR(80) NOT NULL,
  option_label CHAR(1) NOT NULL,
  option_text TEXT NOT NULL,
  is_correct BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_exam_question_options_question FOREIGN KEY (question_id) REFERENCES exam_questions(id) ON DELETE CASCADE,
  UNIQUE KEY uq_question_option_label (question_id, option_label),
  INDEX idx_exam_question_options_question_id (question_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;"""


def generate_sql(
    *,
    xlsx_path: str,
    out_path: str | None,
    section_id: str,
    exam_id: str,
    title: str,
    description: str | None,
    questions_sheet: str,
    answers_sheet: str,
    strict: bool,
) -> int:
    with zipfile.ZipFile(xlsx_path) as zf:
        sheet_map = _sheet_name_to_xml_path(zf)
        shared_strings = _load_shared_strings(zf)

        q_sheet_path = _pick_sheet_path(sheet_map, questions_sheet)
        a_sheet_path = _pick_sheet_path(sheet_map, answers_sheet)

        # --- Parse PREGUNTAS ---
        q_rows = list(_iter_sheet_rows(zf, q_sheet_path, shared_strings))
        if not q_rows:
            raise RuntimeError(f"La hoja '{questions_sheet}' está vacía")

        # Header = primera fila no-vacía
        header_cells = next((cells for _, cells in q_rows if any(_clean_text(v) for v in cells.values())), {})
        col_num = _find_col(header_cells, ["#", "NUM", "NÚM", "N°", "NO"])
        col_q = _find_col(header_cells, ["PREGUNTA"])
        if not col_num:
            col_num = "A"  # fallback típico
        if not col_q:
            col_q = "B"  # fallback típico

        questions: dict[int, str] = {}
        for _, cells in q_rows[1:]:
            n = _parse_intish(cells.get(col_num, ""))
            if n is None:
                continue
            q_text = _clean_text(cells.get(col_q, ""))
            if not q_text:
                continue
            questions[n] = q_text

        # --- Parse RESPUESTAS ---
        a_rows = list(_iter_sheet_rows(zf, a_sheet_path, shared_strings))
        if not a_rows:
            raise RuntimeError(f"La hoja '{answers_sheet}' está vacía")

        header_cells_a = next((cells for _, cells in a_rows if any(_clean_text(v) for v in cells.values())), {})
        col_num_a = _find_col(header_cells_a, ["#", "NUM", "NÚM", "N°", "NO"])
        col_opt = _find_col(header_cells_a, ["OPCION", "OPCIONES"])
        col_is_correct = _find_col(header_cells_a, ["RESPUESTA", "CORRECTA"])
        if not col_num_a:
            col_num_a = "A"
        if not col_opt:
            col_opt = "B"
        if not col_is_correct:
            col_is_correct = "C"

        options: dict[int, list[tuple[str, bool]]] = {}
        for _, cells in a_rows[1:]:
            n = _parse_intish(cells.get(col_num_a, ""))
            if n is None:
                continue
            opt_text = _normalize_option_text(cells.get(col_opt, ""))
            if not opt_text:
                continue
            is_correct = _parse_boolish(cells.get(col_is_correct, ""))
            options.setdefault(n, []).append((opt_text, is_correct))

    # --- Validations / warnings ---
    q_nums = set(questions.keys())
    a_nums = set(options.keys())

    missing_opts = sorted(q_nums - a_nums)
    extra_opts = sorted(a_nums - q_nums)

    had_errors = False

    if missing_opts:
        msg = f"WARN: {len(missing_opts)} preguntas sin opciones en '{answers_sheet}': {missing_opts[:20]}" + (
            " ..." if len(missing_opts) > 20 else ""
        )
        print(msg, file=sys.stderr)
        if strict:
            had_errors = True

    if extra_opts:
        msg = f"WARN: {len(extra_opts)} #s en '{answers_sheet}' que no existen en '{questions_sheet}': {extra_opts[:20]}" + (
            " ..." if len(extra_opts) > 20 else ""
        )
        print(msg, file=sys.stderr)
        # No lo tratamos como error (a veces hay filas extra en el Excel)

    # Valida correct answers
    for n in sorted(q_nums & a_nums):
        correct_count = sum(1 for _, c in options.get(n, []) if c)
        if correct_count != 1:
            print(
                f"WARN: pregunta #{n} tiene {correct_count} respuestas correctas (se esperaba 1)",
                file=sys.stderr,
            )
            if strict:
                had_errors = True

    # --- Build SQL ---
    now = _dt.datetime.now(_dt.timezone.utc).replace(microsecond=0).isoformat()
    lines: list[str] = []
    lines.append(f"-- Auto-generado por scripts/exam_excel_to_sql.py el {now}")
    lines.append(f"-- Fuente: {xlsx_path}")
    lines.append(f"-- Hojas: {questions_sheet} + {answers_sheet}")
    lines.append("")
    lines.append("START TRANSACTION;")
    lines.append("")
    lines.append(CREATE_TABLES_SQL)
    lines.append("")

    if description is None:
        description = f"Preguntas y opciones importadas desde {xlsx_path}"

    lines.append(
        "INSERT INTO exams (id, section_id, title, description) VALUES "
        f"({_sql_quote(exam_id)}, {_sql_quote(section_id)}, {_sql_quote(title)}, {_sql_quote(description)}) "
        "ON DUPLICATE KEY UPDATE section_id=VALUES(section_id), title=VALUES(title), description=VALUES(description);"
    )
    lines.append("")

    for n in sorted(questions.keys()):
        qid = f"{exam_id}-q{n:03d}"
        q_text = questions[n]

        lines.append(
            "INSERT INTO exam_questions (id, exam_id, question_number, question_text) VALUES "
            f"({_sql_quote(qid)}, {_sql_quote(exam_id)}, {n}, {_sql_quote(q_text)}) "
            "ON DUPLICATE KEY UPDATE question_text=VALUES(question_text);"
        )

        opts = options.get(n, [])
        for i, (opt_text, is_correct) in enumerate(opts):
            label = _label_for_index(i)
            oid = f"{qid}-{label}"
            lines.append(
                "INSERT INTO exam_question_options (id, question_id, option_label, option_text, is_correct) VALUES "
                f"({_sql_quote(oid)}, {_sql_quote(qid)}, {_sql_quote(label)}, {_sql_quote(opt_text)}, {1 if is_correct else 0}) "
                "ON DUPLICATE KEY UPDATE option_text=VALUES(option_text), is_correct=VALUES(is_correct);"
            )

    lines.append("")
    lines.append("COMMIT;")
    lines.append("")

    sql = "\n".join(lines)

    if out_path:
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(sql)
    else:
        sys.stdout.write(sql)

    return 1 if had_errors else 0


def main(argv: list[str]) -> int:
    p = argparse.ArgumentParser(
        description="Convierte un .xlsx (PREGUNTAS/RESPUESTAS) a SQL para TiltUpLearn (MySQL/MariaDB)."
    )
    p.add_argument("xlsx", help="Ruta al archivo .xlsx")
    p.add_argument("--out", "-o", help="Ruta de salida .sql (si se omite, imprime a stdout)")

    p.add_argument("--section-id", required=True, help="sections.id (ej: sec-1-1)")
    p.add_argument(
        "--exam-id",
        help="exams.id (default: exam-<section-id>)",
    )
    p.add_argument("--title", default="Examen", help="Título del examen")
    p.add_argument("--description", default=None, help="Descripción del examen")

    p.add_argument("--questions-sheet", default="PREGUNTAS", help="Nombre de la hoja de preguntas")
    p.add_argument("--answers-sheet", default="RESPUESTAS", help="Nombre de la hoja de respuestas")
    p.add_argument(
        "--strict",
        action="store_true",
        help="Falla (exit code 1) si hay preguntas sin opciones o con 0/2+ respuestas correctas",
    )

    args = p.parse_args(argv)

    exam_id = args.exam_id or f"exam-{args.section_id}"

    try:
        exit_code = generate_sql(
            xlsx_path=args.xlsx,
            out_path=args.out,
            section_id=args.section_id,
            exam_id=exam_id,
            title=args.title,
            description=args.description,
            questions_sheet=args.questions_sheet,
            answers_sheet=args.answers_sheet,
            strict=args.strict,
        )
        return exit_code
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
