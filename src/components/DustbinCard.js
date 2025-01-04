// DustbinCard.js
// import React from 'react';

// const DustbinCard = ({ name, level, location, load }) => {
//   return (
//     <div className="dustbin-card">
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;


// import React from 'react';
// import * as XLSX from 'xlsx';  // Import the XLSX library

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Example data that might come from Firebase
//     const data = [
//       { name, level, location, load }
//     ];

//     // Create a new workbook
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Dustbin Data');

//     // Write the file to a binary string and trigger download
//     XLSX.writeFile(wb, `${name}_data.xlsx`);
//     // window.open(wb);
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;



// import React from 'react';
// import * as XLSX from 'xlsx'; // Import the XLSX library

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Example data that might come from Firebase
//     const data = [{ name, level, location, load }];

//     // Create a new workbook
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Dustbin Data');

//     // Write the workbook to a binary string
//     const wbOut = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//     // Create a Blob from the binary data
//     const blob = new Blob([wbOut], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

//     // Create an object URL for the Blob
//     const url = URL.createObjectURL(blob);

//     // Open the Excel file in a new tab or window
//     window.open(url);
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;



// import React from 'react';
// import * as XLSX from 'xlsx'; // Import the XLSX library

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Example data that might come from Firebase
//     const data = [
//       { name, level, location, load }
//     ];

//     // Create a new workbook
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Dustbin Data');

//     // Write the workbook to a binary string
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//     // Create a Blob from the binary data
//     const blob = new Blob([excelBuffer], {
//       type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
//     });

//     // Create an object URL from the Blob
//     const url = URL.createObjectURL(blob);

//     // Open the URL in a new tab
//     window.open(url, '_blank');

//     // Optionally, revoke the URL after some time to free memory
//     setTimeout(() => URL.revokeObjectURL(url), 10000); // Revoke after 10 seconds
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;



// import React from 'react';
// import * as XLSX from 'xlsx';

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Example data that might come from Firebase
//     const data = [
//       { name, level, location, load }
//     ];

//     // Convert the data to a worksheet
//     const ws = XLSX.utils.json_to_sheet(data);

//     // Generate an HTML string from the worksheet
//     const htmlString = XLSX.utils.sheet_to_html(ws);

//     // Open a new tab and write the HTML content
//     const newTab = window.open();
//     if (newTab) {
//       newTab.document.open();
//       newTab.document.write(htmlString);
//       newTab.document.close();
//     } else {
//       console.error("Unable to open new tab");
//     }
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;





/*Claude*/

// import React from 'react';
// import * as XLSX from 'xlsx';

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Create data array
//     const data = [
//       { name, level, location, load }
//     ];

//     // Create worksheet
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, 'Dustbin Data');

//     // Convert to binary string
//     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });

//     // Convert to Blob
//     const blob = new Blob([excelBuffer], { 
//       type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' 
//     });

//     // Create URL
//     const url = URL.createObjectURL(blob);

//     // Open in new tab
//     window.open(url, '_blank');

//     // Clean up the URL object after a delay
//     setTimeout(() => {
//       URL.revokeObjectURL(url);
//     }, 100);
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;

//key value pair
// import React from 'react';

// const DustbinCard = ({ name, level, location, load }) => {
//   const handleCardClick = () => {
//     // Create the table HTML
//     const tableHtml = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <title>${name} - Dustbin Data</title>
//           <style>
//             body { font-family: Arial, sans-serif; margin: 20px; }
//             table { border-collapse: collapse; width: 100%; max-width: 800px; margin: 20px auto; }
//             th, td { border: 1px solid #ddd; padding: 12px; text-align: left; }
//             th { background-color: #f4f4f4; }
//             h1 { text-align: center; color: #333; }
//           </style>
//         </head>
//         <body>
//           <h1>${name} - Dustbin Details</h1>
//           <table>
//             <tr>
//               <th>Property</th>
//               <th>Value</th>
//             </tr>
//             <tr>
//               <td>Name</td>
//               <td>${name}</td>
//             </tr>
//             <tr>
//               <td>Level</td>
//               <td>${level}</td>
//             </tr>
//             <tr>
//               <td>Location</td>
//               <td>${location}</td>
//             </tr>
//             <tr>
//               <td>Load</td>
//               <td>${load}</td>
//             </tr>
//           </table>
//         </body>
//       </html>
//     `;

//     // Create a new window/tab and write the HTML content
//     const newWindow = window.open();
//     newWindow.document.write(tableHtml);
//     newWindow.document.close();
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;

//chatgpt
//excel format
// import React from 'react';

// const DustbinCard = ({ name, level, location, load }) => {

//   const dustbinImage = "./assests/db.jpg";


//   const handleCardClick = () => {
//     // Create an HTML table from the data
//     const htmlContent = `
//   <html>
//     <head>
//           <title>Dustbin Data</title>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           margin: 20px;
//         }



// .nav-container {
//     max-width: 1470px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
// }

// .logo {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     color: #16a34a;
//     font-size: 1.5rem;
//     font-weight: bold;
// }


//         table {
//         margin-top:120px;
//           width: 100%;
//           border-collapse: collapse;
//           margin: 20px 0;
//           font-size: 16px;
//           text-align: left;
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//         }
//         th, td {
//           padding: 10px;
//           border: 1px solid #ccc;
//         }
//         th {
//           background-color: #16a34a;
//           color: white;
//           text-align: center;
//         }
//         tr:nth-child(even) {
//           background-color: #f9f9f9;
//         }
//         tr:hover {
//           background-color: #f1f1f1;
//         }
//         h1 {
//           text-align: center;
//           color: #333;
//         }
//       </style>
//     </head>
//    <body>
//     <nav>
//         <div class="nav-container">
//             <div class="logo">
//                 🗑️ Westabin
//             </div>
            
//         </div>
//     </nav>

//       <h1>${name} Data</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Level</th>
//            <!-- <th>Location</th>
//             <th>Load</th>-->
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>${name}</td>
//             <td>${level}</td>
//            <!-- <td>${location}</td>
//             <td>${load}</td>-->
//           </tr>

         
//         </tbody>
//       </table>
//     </body>
//   </html>
// `;


    
   


//     // Open a new tab and write the content
//     const newTab = window.open();
//     newTab.document.open();
//     newTab.document.write(htmlContent);
//     newTab.document.close();
//   };

//   return (
//     <div className="dustbin-card" onClick={handleCardClick}>
//       <img src={dustbinImage} alt="Dustbin" className="dustbin-image" />
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       {/* <p>Location: {location}</p>
//       <p>Load: {load}</p> */}
//     </div>
//   );
// };

// export default DustbinCard;











import React from 'react';
import zeroLevelImage from '../assests/zero.png';
import lowLevelImage from '../assests/low1.png'; // Replace with the actual path to your image
import highLevelImage from '../assests/high1.png'; // Replace with the actual path to your image
import mediumLevelImage from '../assests/medium1.png'; // Optional: for intermediate levels

const DustbinCard = ({ name, level,  }) => {
  // Parse the level percentage
  const levelValue = parseInt(level.replace('%', ''), 10);

  // Determine the dustbin image based on the level
  let dustbinImage;
  if (levelValue == 0) {
    dustbinImage = zeroLevelImage;
  }
  else if (levelValue <= 20) {
    dustbinImage = lowLevelImage;
  } else if (levelValue <= 60) {
    dustbinImage = mediumLevelImage;
  } else {
    dustbinImage = highLevelImage; // Optional: Add an intermediate level image
  }

  const handleCardClick = () => {
    const htmlContent = `
      <html>
        <head>
          <title>Dustbin Data</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            table {
              margin-top: 120px;
              width: 100%;
              border-collapse: collapse;
              font-size: 16px;
              text-align: left;
            }
            th, td {
              padding: 10px;
              border: 1px solid #ccc;
            }
            th {
              background-color: #16a34a;
              color: white;
              text-align: center;
            }
            tr:nth-child(even) {
              background-color: #f9f9f9;
            }
            tr:hover {
              background-color: #f1f1f1;
            }
            h1 {
              text-align: center;
            }

            .dustbin-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Optional: Ensures the aspect ratio is maintained */
}
          </style>
        </head>
        <body>
          <h1>${name} Data</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Level</th>
               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${name}</td>
                <td>${level}</td>
                
              </tr>
            </tbody>
          </table>
        </body>
      </html>
    `;

    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(htmlContent);
    newTab.document.close();
  };

  return (
    <div className="dustbin-card" onClick={handleCardClick}>
      <img src={dustbinImage} alt="Dustbin"  className="dustbin-image" />
      <h3>{name}</h3>
      <p>Level: {level}</p>
      {/* <p>Location: {location}</p>
      <p>Load: {load}</p> */}
      
    </div>
  );
};

export default DustbinCard;




// import React from "react";
// import * as XLSX from "xlsx";

// const DustbinCard = ({ name, level, location, load }) => {
//   // Function to generate and open the Excel file in a new tab
//   const handleViewExcel = () => {
//     const data = [
//       { Attribute: "Name", Value: name },
//       { Attribute: "Level", Value: level },
//       { Attribute: "Location", Value: location },
//       { Attribute: "Load", Value: load },
//     ];

//     const worksheet = XLSX.utils.json_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Dustbin Info");

//     // Write the workbook to a binary string
//     const excelBinary = XLSX.write(workbook, { bookType: "xlsx", type: "binary" });

//     // Convert the binary string to a Blob and create an object URL
//     const blob = new Blob([stringToArrayBuffer(excelBinary)], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
//     const url = URL.createObjectURL(blob);

//     // Open the Excel file in a new tab
//     window.open(url, "_blank");
//   };

//   // Helper function to convert a binary string to an array buffer
//   const stringToArrayBuffer = (str) => {
//     const buf = new ArrayBuffer(str.length);
//     const view = new Uint8Array(buf);
//     for (let i = 0; i < str.length; i++) {
//       view[i] = str.charCodeAt(i) & 0xff;
//     }
//     return buf;
//   };

//   return (
//     <div className="dustbin-card" onClick={handleViewExcel}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;


// import React from "react";
// import * as XLSX from "xlsx";

// const DustbinCard = ({ name, level, location, load }) => {
//   // Function to generate and open the Excel data as HTML in a new tab
//   const handleViewExcelAsHTML = () => {
//     const data = [
//       { Attribute: "Name", Value: name },
//       { Attribute: "Level", Value: level },
//       { Attribute: "Location", Value: location },
//       { Attribute: "Load", Value: load },
//     ];

//     // Convert the data to an HTML table
//     const tableHtml = generateHtmlTable(data);

//     // Open the HTML table in a new tab
//     const newWindow = window.open();
//     newWindow.document.write(tableHtml);
//     newWindow.document.close();
//   };

//   // Helper function to generate an HTML table from data
//   const generateHtmlTable = (data) => {
//     let html = "<html><head><title>Excel View</title></head><body>";
//     html += "<table border='1' style='border-collapse: collapse; width: 50%; margin: 0 auto;'><tr><th>Attribute</th><th>Value</th></tr>";

//     data.forEach((row) => {
//       html += `<tr><td>${row.Attribute}</td><td>${row.Value}</td></tr>`;
//     });

//     html += "</table></body></html>";
//     return html;
//   };

//   return (
//     <div className="dustbin-card" onClick={handleViewExcelAsHTML}>
//       <h3>{name}</h3>
//       <p>Level: {level}</p>
//       <p>Location: {location}</p>
//       <p>Load: {load}</p>
//     </div>
//   );
// };

// export default DustbinCard;

