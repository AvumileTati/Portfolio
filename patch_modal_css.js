const fs = require('fs');
const css = `
/* =========================================
   MODAL NAVIGATION BUTTONS
   ========================================= */
.modal-nav-buttons {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    pointer-events: none; /* Let clicks pass through the container */
    z-index: 15;
    padding: 0 10px;
}

.modal-nav-btn {
    pointer-events: auto; /* Re-enable clicks for the buttons */
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    transition: all 0.3s cubic-bezier(0.25, 0.85, 0.15, 1.15);
}

.modal-nav-btn:hover {
    background: var(--primary);
    color: white;
    transform: scale(1.1);
    border-color: var(--primary);
    box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
}

@media (max-width: 768px) {
    .modal-nav-buttons {
        top: auto;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        width: auto;
        gap: 15px;
    }
}
`;
fs.appendFileSync('Avumile Tati Portfolio/styles.css', css);
console.log("Appended modal nav CSS.");
