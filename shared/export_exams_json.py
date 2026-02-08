import re
import os
import json

# Paths
BASE_DIR = '/home/david/Documentos/Programas Imccy/TiltUp/shared'
DIAG_SQL_1 = os.path.join(BASE_DIR, 'examen_diagnostico.sql')
DIAG_SQL_2 = os.path.join(BASE_DIR, 'examen_diagnostico_modulo2.sql')
DIAG_SQL_3 = os.path.join(BASE_DIR, 'examen_diagnostico_modulo3.sql')
OUTPUT_JSON = os.path.join(BASE_DIR, 'exams_data.json')

def parse_sql_inserts(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    exams = []
    questions = []
    options = []
    
    # Extract Exams
    # INSERT INTO exams (id, section_id, title, description) VALUES ('exam-sec-1-1', 'sec-1-1', 'Examen Diagnóstico', 'Preguntas importadas desde EXAMEN DIAGNÓSTICO.xlsx')
    exam_matches = re.finditer(r"INSERT INTO exams .*? VALUES \('([^']*)', '([^']*)', '([^']*)', '([^']*)'\)", content)
    for m in exam_matches:
        exams.append({
            "id": m.group(1),
            "sectionId": m.group(2),
            "title": m.group(3),
            "description": m.group(4)
        })

    # Extract Questions
    # INSERT INTO exam_questions (id, exam_id, question_number, question_text) VALUES ('exam-sec-1-1-q001', 'exam-sec-1-1', 1, '¿Cómo se define el método de Tilt-Up?')
    ques_matches = re.finditer(r"INSERT INTO exam_questions .*? VALUES \('([^']*)', '([^']*)', (\d+), '([^']*)'\)", content)
    for m in ques_matches:
        questions.append({
            "id": m.group(1),
            "examId": m.group(2),
            "questionNumber": int(m.group(3)),
            "questionText": m.group(4)
        })

    # Extract Options
    # INSERT INTO exam_question_options (id, question_id, option_label, option_text, is_correct) VALUES ('exam-sec-1-1-q001-A', 'exam-sec-1-1-q001', 'A', 'Como una técnica de construcción metálica prefabricada.', 0)
    opt_matches = re.finditer(r"INSERT INTO exam_question_options .*? VALUES \('([^']*)', '([^']*)', '([^']*)', '([^']*)', (\d+)\)", content)
    for m in opt_matches:
        options.append({
            "id": m.group(1),
            "questionId": m.group(2),
            "optionLabel": m.group(3),
            "optionText": m.group(4),
            "isCorrect": int(m.group(5)) == 1
        })
        
    return exams, questions, options

def generate_final_exams(exams, questions, options, module_num):
    new_exams = []
    new_questions = []
    new_options = []
    
    old_exam_id_base = f'exam-sec-{module_num}-1'
    new_exam_id_base = f'exam-sec-{module_num}-5'
    new_sec_id = f'sec-{module_num}-5'
    
    # 1. Create Final Exam entry
    # Find original exam to copy title/desc
    original_exam = next((e for e in exams if e['id'] == old_exam_id_base), None)
    if original_exam:
        new_exam = original_exam.copy()
        new_exam['id'] = new_exam_id_base
        new_exam['sectionId'] = new_sec_id
        new_exam['title'] = original_exam['title'].replace('Diagnóstico', 'Final')
        new_exam['description'] = 'Examen Final generado a partir del Diagnóstico'
        new_exams.append(new_exam)
        
        # 2. Copy questions
        module_questions = [q for q in questions if q['examId'] == old_exam_id_base]
        for q in module_questions:
            new_q = q.copy()
            # Replace ID
            new_q['id'] = new_q['id'].replace(old_exam_id_base, new_exam_id_base)
            new_q['examId'] = new_exam_id_base
            new_questions.append(new_q)
            
            # 3. Copy options
            q_options = [o for o in options if o['questionId'] == q['id']]
            for o in q_options:
                new_o = o.copy()
                new_o['id'] = new_o['id'].replace(old_exam_id_base, new_exam_id_base)
                new_o['questionId'] = new_q['id']
                new_options.append(new_o)
                
    return new_exams, new_questions, new_options

def main():
    all_exams = []
    all_questions = []
    all_options = []
    
    # Process Module 1
    e1, q1, o1 = parse_sql_inserts(DIAG_SQL_1)
    all_exams.extend(e1)
    all_questions.extend(q1)
    all_options.extend(o1)
    
    fe1, fq1, fo1 = generate_final_exams(e1, q1, o1, 1)
    all_exams.extend(fe1)
    all_questions.extend(fq1)
    all_options.extend(fo1)

    # Process Module 2
    e2, q2, o2 = parse_sql_inserts(DIAG_SQL_2)
    all_exams.extend(e2)
    all_questions.extend(q2)
    all_options.extend(o2)

    fe2, fq2, fo2 = generate_final_exams(e2, q2, o2, 2)
    all_exams.extend(fe2)
    all_questions.extend(fq2)
    all_options.extend(fo2)

    # Process Module 3
    e3, q3, o3 = parse_sql_inserts(DIAG_SQL_3)
    all_exams.extend(e3)
    all_questions.extend(q3)
    all_options.extend(o3)
    
    fe3, fq3, fo3 = generate_final_exams(e3, q3, o3, 3)
    all_exams.extend(fe3)
    all_questions.extend(fq3)
    all_options.extend(fo3)

    data = {
        "exams": all_exams,
        "questions": all_questions,
        "options": all_options
    }
    
    with open(OUTPUT_JSON, 'w') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
        
    print(f"Exported JSON to {OUTPUT_JSON}")
    print(f"Total Exams: {len(all_exams)}")
    print(f"Total Questions: {len(all_questions)}")
    print(f"Total Options: {len(all_options)}")

if __name__ == '__main__':
    main()
