const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const oldHeaderStr = `<div class="modal-header" style="padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; display: flex; align-items: center; gap: 10px; color: var(--text);"><i class='bx bx-file text-primary'></i> Resume Preview</h3>
                <button id="btn-download-static-cv" class="btn-primary-sm" style="padding: 8px 16px; border-radius: 8px; background: var(--primary); color: white; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: 600;">
                    <i class='bx bx-download'></i> Download PDF
                </button>
            </div>`;

const newHeaderStr = `<div class="modal-header" style="padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; display: flex; align-items: center; gap: 10px; color: var(--text);"><i class='bx bx-file text-primary'></i> Resume Preview</h3>
                <div style="display: flex; gap: 10px;">
                    <button id="btn-print-static-cv" style="padding: 8px 16px; border-radius: 8px; background: transparent; border: 1px solid var(--primary); color: var(--text); cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: 600;">
                        <i class='bx bx-printer'></i> Print to PDF
                    </button>
                    <button id="btn-download-static-cv" class="btn-primary-sm" style="padding: 8px 16px; border-radius: 8px; background: var(--primary); color: white; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: 600;">
                        <i class='bx bx-download'></i> HTML2PDF Download
                    </button>
                </div>
            </div>`;

if (html.includes(oldHeaderStr)) {
    html = html.replace(oldHeaderStr, newHeaderStr);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated HTML with print button.");
} else {
    console.log("Could not find the exact old modal header string. Let me try regex.");
    const regex = /<div class="modal-header"[^>]*>[\s\S]*?<h3[^>]*>[\s\S]*?<\/h3>[\s\S]*?<button id="btn-download-static-cv"[^>]*>[\s\S]*?<\/button>\s*<\/div>/;
    if (regex.test(html)) {
        html = html.replace(regex, newHeaderStr);
        fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
        console.log("Updated HTML with regex.");
    } else {
        console.log("Regex failed too.");
    }
}
