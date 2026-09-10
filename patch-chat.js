const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const newChatCSS = `
/* =========================================
   PREMIUM CHAT UI UPGRADE
   ========================================= */
.chat-messages {
    flex: 1;
    padding: 24px 20px !important;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 16px !important;
    
    /* Subtle inner shadow and background pattern for depth */
    background-color: var(--bg-card);
    background-image: radial-gradient(var(--border) 1px, transparent 1px);
    background-size: 20px 20px;
    box-shadow: inset 0 10px 20px rgba(0,0,0,0.02);
}

[data-theme="dark"] .chat-messages {
    background-color: var(--bg-card);
    background-image: radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px);
    box-shadow: inset 0 10px 20px rgba(0,0,0,0.2);
}

.chat-message {
    display: flex;
    max-width: 90% !important;
    animation: messagePop 0.4s cubic-bezier(0.25, 0.85, 0.15, 1.15) forwards;
    opacity: 0;
    transform: translateY(10px);
}

@keyframes messagePop {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.chat-message.user {
    align-self: flex-end;
}

.chat-message.assistant {
    align-self: flex-start;
}

.message-content {
    padding: 12px 18px !important;
    border-radius: 18px !important;
    font-size: 0.95rem;
    line-height: 1.5 !important;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.chat-message.user .message-content {
    background: linear-gradient(135deg, var(--primary), #3b82f6) !important;
    color: white !important;
    border-bottom-right-radius: 4px !important;
    box-shadow: 0 4px 15px rgba(37, 99, 235, 0.25) !important;
}

.chat-message.assistant .message-content {
    background: var(--bg-light) !important;
    color: var(--text) !important;
    border: 1px solid var(--border) !important;
    border-bottom-left-radius: 4px !important;
    /* Glass feel */
    backdrop-filter: blur(8px);
}

[data-theme="dark"] .chat-message.assistant .message-content {
    background: rgba(255, 255, 255, 0.03) !important;
    border-color: rgba(255, 255, 255, 0.08) !important;
}
`;

fs.appendFileSync('Avumile Tati Portfolio/styles.css', newChatCSS);
console.log("Appended new chat CSS");
