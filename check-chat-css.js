const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

// I also want to make sure the chat window itself isn't pulling the screen up because of its absolute positioning.
const newCss = `
/* Ensure the chat widget stays fixed and doesn't cause overflow jumping */
.chat-widget {
    position: fixed !important;
    bottom: 20px !important;
    right: 20px !important;
    z-index: 1000 !important;
}

.chat-window {
    /* Lock the chat window to the bottom right, expanding upwards */
    position: absolute !important;
    bottom: 80px !important; 
    right: 0 !important;
    top: auto !important;
    margin: 0 !important;
}

/* Mobile specific fixes to lock to screen */
@media (max-width: 768px) {
    .chat-window {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        right: 0 !important;
        bottom: 0 !important;
        width: 100vw !important;
        height: 100vh !important;
        height: 100dvh !important; /* Dynamic viewport height to prevent safari keyboard issues */
        border-radius: 0 !important;
        z-index: 1001 !important;
    }
}
`;
fs.appendFileSync('Avumile Tati Portfolio/styles.css', newCss);
console.log("Appended chat layout lock CSS");
