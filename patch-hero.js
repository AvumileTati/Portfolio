const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Replace the View CV button
const oldBtn = `<a href="https://drive.google.com/file/d/15FRU_ZDtcOGFhW2zs84X1EjSPy_PZIr2/view?usp=drive_link"
                            target="_blank" class="btn-outline">
                            <i data-lucide="download"></i>
                            View CV
                        </a>`;

const newBtn = `<a href="#" id="open-ai-cv-btn" class="btn-outline" style="position: relative; overflow: hidden;">
                            <i class='bx bx-bot'></i>
                            AI CV Builder
                            <span class="badge" style="position: absolute; top: -5px; right: -5px; background: var(--primary); color: white; font-size: 0.6rem; padding: 2px 6px; border-radius: 10px; font-weight: bold;">NEW</span>
                        </a>`;

html = html.replace(oldBtn, newBtn);

// Add Modal HTML before </body>
const aiCvModalHTML = `
    <!-- AI CV Builder Modal -->
    <div id="ai-cv-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 900px; width: 95%; max-height: 90vh; display: flex; flex-direction: column;">
            <button class="modal-close" id="ai-cv-close-btn"><i class='bx bx-x'></i></button>
            
            <div class="modal-header" style="padding: 1.5rem 2rem; border-bottom: 1px solid var(--border);">
                <h3 style="margin: 0; display: flex; align-items: center; gap: 10px;"><i class='bx bx-bot text-primary'></i> AI CV Generator</h3>
                <p style="margin: 5px 0 0; color: var(--text-light); font-size: 0.9rem;">Tailor a professional CV based on my portfolio.</p>
            </div>

            <div class="modal-body" style="padding: 2rem; flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 1.5rem;">
                
                <div id="cv-setup-screen" style="display: flex; flex-direction: column; gap: 1rem;">
                    <div class="form-group">
                        <label for="cv-target-job" class="form-label">Target Job Title (Optional)</label>
                        <input type="text" id="cv-target-job" class="form-input" placeholder="e.g. Junior Web Developer, IT Support Specialist...">
                        <p style="font-size: 0.8rem; color: var(--text-light); margin-top: 5px;">The AI will highlight relevant skills for this specific role.</p>
                    </div>
                    
                    <button id="btn-generate-cv" class="btn-send" style="width: 100%; justify-content: center; display: flex;">
                        <span><i class='bx bx-magic-wand'></i> Generate CV</span>
                    </button>
                </div>

                <div id="cv-loading-screen" style="display: none; text-align: center; padding: 3rem 0; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
                    <div class="spinner" style="width: 40px; height: 40px; border: 4px solid rgba(37, 99, 235, 0.2); border-left-color: var(--primary); border-radius: 50%; animation: spin 1s linear infinite;"></div>
                    <h4 style="margin-top: 1.5rem; color: var(--text);">AI is tailoring the CV...</h4>
                    <p style="color: var(--text-light); font-size: 0.9rem;">Analyzing portfolio data and formatting.</p>
                </div>

                <div id="cv-preview-screen" style="display: none; flex-direction: column; gap: 1rem; height: 100%;">
                    <div id="cv-preview-content" style="background: white; color: black; padding: 2rem; border-radius: 8px; box-shadow: inset 0 0 10px rgba(0,0,0,0.05); overflow-y: auto; max-height: 50vh; font-family: 'Inter', sans-serif;">
                        <!-- Generated CV content goes here -->
                    </div>
                </div>
            </div>

            <div class="modal-footer" id="cv-modal-footer" style="padding: 1.5rem 2rem; border-top: 1px solid var(--border); display: none; justify-content: flex-end; gap: 1rem;">
                <button id="btn-rebuild-cv" class="btn-outline-sm" style="padding: 8px 16px; border-radius: 8px; border: 1px solid var(--border); background: transparent; color: var(--text); cursor: pointer;"><i class='bx bx-refresh'></i> Rebuild</button>
                <button id="btn-download-cv" class="btn-primary-sm" style="padding: 8px 16px; border-radius: 8px; background: var(--primary); color: white; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: 600;"><i class='bx bx-download'></i> Download PDF</button>
            </div>
        </div>
    </div>
`;

if (!html.includes('id="ai-cv-modal"')) {
    html = html.replace('</body>', aiCvModalHTML + '\n</body>');
}

// Ensure html2pdf library is included for easy PDF generation
if (!html.includes('html2pdf.bundle.min.js')) {
    html = html.replace('</head>', '    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>\n</head>');
}

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log('index.html updated for AI CV Builder');
