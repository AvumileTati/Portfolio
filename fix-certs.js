const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Remove display: block from the new anchors
html = html.replace(/style="display: block; text-decoration: none;"/g, 'style="text-decoration: none;"');
html = html.replace(/style="display: block; text-decoration: none; border-color: var\(--primary\);"/g, 'style="text-decoration: none; border-color: var(--primary);"');

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Fixed inline display block");
