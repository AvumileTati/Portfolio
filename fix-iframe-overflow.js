const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

js = js.replace("mainImg.parentNode.style.position = 'relative';", "mainImg.parentNode.style.position = 'relative';\n                    mainImg.parentNode.style.overflow = 'hidden';\n                    mainImg.parentNode.style.borderRadius = '15px';");

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Added overflow hidden to container.");
