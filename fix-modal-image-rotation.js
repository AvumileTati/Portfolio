const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

// Also remove the `isWebApp: true` tags from projectData as they are no longer needed
js = js.replace(/,\s*isWebApp:\s*true/g, '');

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Removed isWebApp flags.");
