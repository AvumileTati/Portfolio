const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

// Fix the tilted ! alignment by perfectly centering the nav pill and floating the toggle
const newCss = `
/* =========================================
   PERFECT CENTER ALIGNMENT FIX
   ========================================= */
.nav-container {
    /* Use a grid with 3 equal columns to ensure true dead-center alignment */
    display: grid !important;
    grid-template-columns: 1fr auto 1fr !important;
    align-items: center !important;
    gap: 12px !important;
    position: fixed !important;
    top: 20px !important;
    width: 100% !important;
    z-index: 1000 !important;
    pointer-events: none;
}

/* Place the nav pill exactly in the center column */
.nav-wrap {
    grid-column: 2 / 3 !important;
    margin: 0 !important;
}

/* Place the theme toggle in the right column, aligned to the left of that column */
#theme-toggle {
    grid-column: 3 / 4 !important;
    justify-self: start !important;
    
    position: relative !important; 
    top: auto !important;
    right: auto !important;
    bottom: auto !important;
    left: auto !important;
    width: 46px !important;
    height: 46px !important;
    margin: 0 !important;
}

/* Remove rogue BR tags from HTML to fix vertical alignment */
`;
fs.appendFileSync('Avumile Tati Portfolio/styles.css', newCss);

// Clean up HTML rogue breaks
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
html = html.replace('</div>\n    <br>\n    <!-- Hero Section -->', '</div>\n    <!-- Hero Section -->');
html = html.replace('<p><br></p>', '');
fs.writeFileSync('Avumile Tati Portfolio/index.html', html);

console.log("Fixed alignment");
