const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const printLogic = `
    // Handle Native Print to PDF
    const btnPrint = document.getElementById('btn-print-static-cv');
    if (btnPrint) {
        btnPrint.addEventListener('click', () => {
            window.print();
        });
    }
`;

// Insert it right before the closing brace of the DOMContentLoaded block for the cvModal
const searchString = `    if (btnDownload) {`;
if (js.includes(searchString)) {
    js = js.replace(searchString, printLogic + '\n' + searchString);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Added Print JS logic.");
} else {
    console.log("Could not find the target line to insert JS.");
}
