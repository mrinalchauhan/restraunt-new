// excelUtils.js

// import * as XLSX from 'xlsx';

// export function readExcel(file, callback) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//         const data = new Uint8Array(e.target.result);
//         const workbook = XLSX.read(data, { type: 'array' });
//         const sheetName = workbook.SheetNames[0]; // Assuming the first sheet is the one containing data
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         callback(jsonData);
//     };
//     reader.readAsArrayBuffer(file);
// }


// import * as XLSX from 'xlsx';

// export function readExcel(file, callback) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//         const data = new Uint8Array(e.target.result);
//         const workbook = XLSX.readFile('path/to/love-khati-menu.xlsx');
//         const sheetName = workbook.SheetNames[0]; // Assuming the first sheet is the one containing data
//         const sheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//         callback(jsonData);
//     };
//     reader.readAsArrayBuffer(file);
// }

// import * as XLSX from 'xlsx';
// import menuData from './love-khati-menu.xlsx'; // Import the Excel file

// export function readExcel(callback) {
//     const workbook = XLSX.readFile(menuData);
//     const sheetName = workbook.SheetNames[0]; // Assuming the first sheet is the one containing data
//     const sheet = workbook.Sheets[sheetName];
//     const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
//     callback(jsonData);
// }
