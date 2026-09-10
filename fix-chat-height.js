const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const newCss = `
/* Fix chat window height for shorter screens (like the AI Studio preview iframe) */
.chat-window {
    height: 500px !important;
    max-height: calc(100vh - 120px) !important; /* Ensure it never bleeds off the top of the screen */
    display: flex !important;
    flex-direction: column !important;
}
`;
fs.appendFileSync('Avumile Tati Portfolio/styles.css', newCss);
console.log("Fixed chat window max height.");
