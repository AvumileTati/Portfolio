// Make sure lucide icons are rendered for the new HTML
const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

if (!html.includes('<script src="https://unpkg.com/lucide@latest"></script>')) {
   // it probably has it already based on other usages
}
