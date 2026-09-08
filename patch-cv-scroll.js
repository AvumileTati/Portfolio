const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// I need to find the <div class="modal-body"> wrapper that holds the #static-cv-document
// and ensure it does not bleed out of the modal.

// The issue is likely that the inline style on the static-cv-document or the modal body is overflowing.
// Let's modify the modal body style in the HTML to explicitly handle overflow.

const modalBodyStart = '<div class="modal-body" style="padding: 2rem; flex: 1; overflow-y: auto; background: var(--bg-light);">';
const newModalBodyStart = '<div class="modal-body" style="padding: 2rem; flex: 1 1 auto; overflow-y: auto; overflow-x: hidden; background: var(--bg-light); position: relative; max-height: calc(90vh - 85px);">';

if (html.includes(modalBodyStart)) {
    html = html.replace(modalBodyStart, newModalBodyStart);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated inline styles for modal body.");
} else {
    console.log("Could not find the exact modal body string. Let's try CSS.");
}

