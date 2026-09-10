const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

css += `
/* Add a Live icon to the first thumbnail if it's a web app */
.thumbnail-grid {
    position: relative;
}
.thumbnail-grid .live-thumb-indicator {
    position: absolute;
    top: 5px;
    left: 5px;
    background: #ef4444;
    color: white;
    font-size: 8px;
    padding: 2px 4px;
    border-radius: 4px;
    font-weight: bold;
    pointer-events: none;
    z-index: 10;
}
`;

fs.writeFileSync('Avumile Tati Portfolio/styles.css', css);
console.log("Added thumbnail CSS.");
