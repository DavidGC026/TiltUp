import pandas as pd
import os

# Configuration for the two files
FILES_CONFIG = [
    {
        "path": "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN_DIAGNÓSTICO_MODULO2.xlsx",
        "exam_id": "exam-sec-2-1",
        "section_id": "sec-2-1",
        "title": "Examen Diagnóstico Módulo 2",
        "description": "Preguntas importadas desde EXAMEN_DIAGNÓSTICO_MODULO2.xlsx",
        "output_sql": "/home/david/Documentos/Programas Imccy/TiltUp/shared/examen_diagnostico_modulo2.sql"
    },
    {
        "path": "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN DIAGNÓSTICO_MODULO3.xlsx",
        "exam_id": "exam-sec-3-1",
        "section_id": "sec-3-1",
        "title": "Examen Diagnóstico Módulo 3",
        "description": "Preguntas importadas desde EXAMEN DIAGNÓSTICO_MODULO3.xlsx",
        "output_sql": "/home/david/Documentos/Programas Imccy/TiltUp/shared/examen_diagnostico_modulo3.sql"
    }
]

def clean_text(text):
    if pd.isna(text):
        return ""
    text = str(text).strip()
    return text.replace("'", "''")  # Escape single quotes for SQL

def generate_sql_for_file(config):
    file_path = config["path"]
    exam_id = config["exam_id"]
    section_id = config["section_id"]
    title = config["title"]
    description = config["description"]
    output_path = config["output_sql"]

    print(f"Processing {file_path}...")

    try:
        df_questions = pd.read_excel(file_path, sheet_name="PREGUNTAS")
        df_options = pd.read_excel(file_path, sheet_name="RESPUESTAS")
    except Exception as e:
        print(f"Error reading excel file {file_path}: {e}")
        return

    # Normalize columns
    # Questions: #, PREGUNTA
    # Options: #, OPCIONES DE RESPUESTA, RESPUESTA
    
    questions_map = {}
    for idx, row in df_questions.iterrows():
        try:
            q_num = int(row['#'])
            q_text = clean_text(row['PREGUNTA'])
            questions_map[q_num] = q_text
        except ValueError:
            continue # Skip invalid rows

    options_map = {} # q_num -> list of options [{label, text, is_correct}]
    
    # Process options, grouping by question number
    # Since options are listed sequentially for each question in the excel (usually),
    # but the key is '#'.
    
    # We need to iterate and assign labels A, B, C, D...
    
    # First group all options by question number
    grouped_options = {}
    for idx, row in df_options.iterrows():
        try:
            q_num = int(row['#'])
            if q_num not in grouped_options:
                grouped_options[q_num] = []
            
            opt_text = clean_text(row['OPCIONES DE RESPUESTA'])
            is_correct = 1 if row['RESPUESTA'] == 1 else 0
            
            grouped_options[q_num].append({
                "text": opt_text,
                "is_correct": is_correct
            })
        except ValueError:
            continue

    sql_lines = []
    sql_lines.append("-- Auto-generated migration script")
    sql_lines.append(f"-- Source: {os.path.basename(file_path)}")
    sql_lines.append("START TRANSACTION;")
    sql_lines.append("")
    
    # Create Exam
    sql_lines.append(f"INSERT INTO exams (id, section_id, title, description) VALUES ('{exam_id}', '{section_id}', '{title}', '{description}') ON DUPLICATE KEY UPDATE section_id=VALUES(section_id), title=VALUES(title), description=VALUES(description);")
    sql_lines.append("")

    # Create Questions & Options
    keys = sorted(questions_map.keys())
    for q_num in keys:
        if q_num not in questions_map:
            continue
            
        q_text = questions_map[q_num]
        q_id = f"{exam_id}-q{q_num:03d}"
        
        sql_lines.append(f"INSERT INTO exam_questions (id, exam_id, question_number, question_text) VALUES ('{q_id}', '{exam_id}', {q_num}, '{q_text}') ON DUPLICATE KEY UPDATE question_text=VALUES(question_text);")
        
        if q_num in grouped_options:
            opts = grouped_options[q_num]
            labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            for i, opt in enumerate(opts):
                if i >= len(labels): break # Should not happen usually
                label = labels[i]
                opt_id = f"{q_id}-{label}"
                opt_text = opt["text"]
                is_correct = opt["is_correct"]
                
                sql_lines.append(f"INSERT INTO exam_question_options (id, question_id, option_label, option_text, is_correct) VALUES ('{opt_id}', '{q_id}', '{label}', '{opt_text}', {is_correct}) ON DUPLICATE KEY UPDATE option_text=VALUES(option_text), is_correct=VALUES(is_correct);")
        
        sql_lines.append("")

    sql_lines.append("COMMIT;")

    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(sql_lines))
    
    print(f"Generated {output_path}")

for config in FILES_CONFIG:
    generate_sql_for_file(config)
