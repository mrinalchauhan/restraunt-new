// // ExcelComponent.js

// import React, { useState } from 'react';
// import { readExcel } from './excelUtils'; // Correct import path

// const ExcelComponent = () => {
//     const [menuData, setMenuData] = useState(null);

//     const handleFileUpload = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             readExcel(file, (jsonData) => {
//                 setMenuData(jsonData);
//             });
//         }
//     };

//     return (
//         <div className="container mx-auto py-8">
//             <input type="file" onChange={handleFileUpload} />
//             {menuData && (
//                 <div className="mt-4">
//                     <h2 className="text-2xl font-bold mb-2 text-red-500">Our Menu</h2>
//                     <div className="bg-gray-900 p-14 rounded">
//                         {/* Render menu data here */}
//                         {menuData.map((row, rowIndex) => (
//                             <div key={rowIndex} className="flex justify-between mb-4">
//                                 {row.map((cell, cellIndex) => (
//                                     <div key={cellIndex} className={getStyle(rowIndex, cellIndex)}>{cell}</div>
//                                 ))}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// const getStyle = (rowIndex, cellIndex) => {
//     // Check for specified rows and columns
//     if ((rowIndex === 1 && (cellIndex === 1 || cellIndex === 2)) ||  // Check for row index 1, column index 1 and 2
//         (rowIndex === 21 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 21, column index 2 and 3
//         (rowIndex === 31 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 31, column index 2 and 3
//         (rowIndex === 44 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 44, column index 2 and 3
//         (rowIndex === 57 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 57, column index 2 and 3
//         (rowIndex === 63 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 63, column index 2 and 3
//         (rowIndex === 68 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 68, column index 2 and 3
//         (rowIndex === 76 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 76, column index 2 and 3
//         (rowIndex === 87 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 87, column index 2 and 3
//         (rowIndex === 96 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 96, column index 2 and 3
//         (rowIndex === 35 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 35, column index 2 and 3
//         (rowIndex === 48 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 48, column index 2 and 3
//         (rowIndex === 65 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 65, column index 2 and 3
//         (rowIndex === 79 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 79, column index 2 and 3
//         (rowIndex === 90 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 90, column index 2 and 3
//         (rowIndex === 98 && (cellIndex === 2 || cellIndex === 3)) ||  // Check for row index 98, column index 2 and 3
//         (rowIndex === 1 && (cellIndex === 1 || cellIndex === 2)) ||  // Check for row index 1, column index 1 and 2
//         (rowIndex === 21 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 21, column index 4 and 5
//         (rowIndex === 31 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 31, column index 4 and 5
//         (rowIndex === 44 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 44, column index 4 and 5
//         (rowIndex === 57 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 57, column index 4 and 5
//         (rowIndex === 63 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 63, column index 4 and 5
//         (rowIndex === 68 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 68, column index 4 and 5
//         (rowIndex === 76 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 76, column index 4 and 5
//         (rowIndex === 87 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 87, column index 4 and 5
//         (rowIndex === 96 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 96, column index 4 and 5
//         (rowIndex === 35 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 35, column index 4 and 5
//         (rowIndex === 48 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 48, column index 4 and 5
//         (rowIndex === 65 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 65, column index 4 and 5
//         (rowIndex === 79 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 79, column index 4 and 5
//         (rowIndex === 90 && (cellIndex === 4 || cellIndex === 5)) ||  // Check for row index 90, column index 4 and 5
//         (rowIndex === 98 && (cellIndex === 4 || cellIndex === 5))) {  // Check for row index 98, column index 4 and 5
//         return "text-red-500 text-3xl font-bold underline";  // Return red, bold, and underlined style
//     } else {
//         return "text-white text-xl";  // Return white style for other cells
//     }
// };

// export default ExcelComponent;
