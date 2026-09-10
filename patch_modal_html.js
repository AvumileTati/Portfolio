const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const navHTML = `
            <div class="modal-nav-buttons">
                <button id="modal-prev" class="modal-nav-btn" aria-label="Previous Project"><i data-lucide="chevron-left"></i></button>
                <button id="modal-next" class="modal-nav-btn" aria-label="Next Project"><i data-lucide="chevron-right"></i></button>
            </div>
            <div class="modal-body">`;

if(html.includes('<div class="modal-body">') && html.includes('id="quick-view-modal"')) {
    // Only target the quick view modal body
    const regex = /<div id="quick-view-modal"[\s\S]*?<div class="modal-body">/;
    const match = html.match(regex);
    if(match) {
        const replacement = match[0].replace('<div class="modal-body">', navHTML);
        html = html.replace(match[0], replacement);
        fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
        console.log("Injected modal nav buttons HTML.");
    }
}
