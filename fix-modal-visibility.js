const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const targetCSS = `.modal-overlay.active .modal-content {
    transform: scale(1) translateY(0);
    opacity: 1;
}`;

const replaceCSS = `.modal-overlay.active .modal-content,
.modal[style*="display: block"] .modal-content,
.modal.active .modal-content {
    transform: scale(1) translateY(0);
    opacity: 1;
}`;

if (css.includes(targetCSS)) {
    css = css.replace(targetCSS, replaceCSS);
    fs.writeFileSync('Avumile Tati Portfolio/styles.css', css);
    console.log("Fixed CSS modal visibility.");
} else {
    console.log("Could not find CSS target.");
}
