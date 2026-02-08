import json
import os

BASE_DIR = '/home/david/Documentos/Programas Imccy/TiltUp'
JSON_PATH = os.path.join(BASE_DIR, 'shared/exams_data.json')
TS_PATH = os.path.join(BASE_DIR, 'server/data/exams.ts')

def main():
    with open(JSON_PATH, 'r') as f:
        data = json.load(f)
        
    ts_content = "import { Exam, ExamQuestion, ExamQuestionOption } from '@shared/schema';\n\n"
    
    # Exams
    ts_content += "export const initialExams: Exam[] = " + json.dumps(data['exams'], indent=2) + ";\n\n"
    
    # Questions
    ts_content += "export const initialQuestions: ExamQuestion[] = " + json.dumps(data['questions'], indent=2) + ";\n\n"
    
    # Options
    ts_content += "export const initialOptions: ExamQuestionOption[] = " + json.dumps(data['options'], indent=2) + ";\n"
    
    with open(TS_PATH, 'w') as f:
        f.write(ts_content)
        
    print(f"Generated {TS_PATH}")

if __name__ == '__main__':
    main()
