const XLSX = require('xlsx');
const fs = require('fs');

const files = [
    "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN DIAGNÓSTICO_MODULO3.xlsx",
    "/home/david/Documentos/Programas Imccy/TiltUp/shared/EXAMEN_DIAGNÓSTICO_MODULO2.xlsx"
];

files.forEach(file => {
    console.log(`\n--- Inspecting: ${file.split('/').pop()} ---`);
    try {
        const workbook = XLSX.readFile(file);
        console.log(`Sheet names: ${workbook.SheetNames.join(', ')}`);

        workbook.SheetNames.forEach(sheetName => {
            console.log(`\n  Sheet: ${sheetName}`);
            const sheet = workbook.Sheets[sheetName];
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Array of arrays
            if (data.length > 0) {
                console.log(`  Headers: ${JSON.stringify(data[0])}`);
                console.log(`  First row: ${JSON.stringify(data[1] || [])}`);
            } else {
                console.log('  Empty sheet');
            }
        });
    } catch (e) {
        console.log(`Error reading ${file}: ${e.message}`);
    }
});
