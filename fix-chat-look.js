const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const updatedChatCSS = `
/* Override the previous dotted chat background with a much cleaner premium frosted look */
.chat-messages {
    background-image: none !important;
    background-color: var(--bg-light) !important;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.02) !important;
}

[data-theme="dark"] .chat-messages {
    background-image: none !important;
    background-color: rgba(0, 0, 0, 0.2) !important;
    box-shadow: inset 0 2px 10px rgba(0,0,0,0.2) !important;
}

/* Make the assistant bubble look a bit more distinct and softer */
.chat-message.assistant .message-content {
    background: white !important;
    border: none !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
    color: var(--text) !important;
}

[data-theme="dark"] .chat-message.assistant .message-content {
    background: var(--bg-card) !important;
    border: 1px solid rgba(255,255,255,0.05) !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2) !important;
    color: rgba(255, 255, 255, 0.9) !important;
}
`;

fs.appendFileSync('Avumile Tati Portfolio/styles.css', updatedChatCSS);
console.log("Cleaned up chat messages appearance");
