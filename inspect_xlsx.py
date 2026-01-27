import pandas as pd
import os

files = [
    "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN DIAGNÓSTICO_MODULO3.xlsx",
    "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN_DIAGNÓSTICO_MODULO2.xlsx"
]

for file_path in files:
    print(f"\n--- Inspecting: {os.path.basename(file_path)} ---")
    try:
        xls = pd.ExcelFile(file_path)
        print(f"Sheet names: {xls.sheet_names}")
        
        for sheet in xls.sheet_names:
            print(f"\n  Sheet: {sheet}")
            df = pd.read_excel(file_path, sheet_name=sheet, nrows=5)
            print(f"  Columns: {list(df.columns)}")
            print(f"  First row sample: {df.iloc[0].values.tolist() if not df.empty else 'Empty'}")
            
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
