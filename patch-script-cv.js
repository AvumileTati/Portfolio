const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldLogic = `/* =========================================
   AI CV BUILDER LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const cvModal = document.getElementById('ai-cv-modal');
    const openCvBtn = document.getElementById('open-ai-cv-btn');
    const closeCvBtn = document.getElementById('ai-cv-close-btn');
    
    const setupScreen = document.getElementById('cv-setup-screen');
    const loadingScreen = document.getElementById('cv-loading-screen');
    const previewScreen = document.getElementById('cv-preview-screen');
    const modalFooter = document.getElementById('cv-modal-footer');
    const previewContent = document.getElementById('cv-preview-content');
    
    const targetJobInput = document.getElementById('cv-target-job');
    const btnGenerate = document.getElementById('btn-generate-cv');
    const btnRebuild = document.getElementById('btn-rebuild-cv');
    const btnDownload = document.getElementById('btn-download-cv');

    if (!cvModal || !openCvBtn) return;

    // Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        resetCvScreens();
    });

    // Close Modal
    const closeCvModal = () => {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeCvBtn.addEventListener('click', closeCvModal);
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });

    function resetCvScreens() {
        setupScreen.style.display = 'flex';
        loadingScreen.style.display = 'none';
        previewScreen.style.display = 'none';
        modalFooter.style.display = 'none';
        targetJobInput.value = '';
        previewContent.innerHTML = '';
    }

    async function generateCV() {
        const targetJob = targetJobInput.value.trim();
        
        setupScreen.style.display = 'none';
        loadingScreen.style.display = 'flex';
        previewScreen.style.display = 'none';
        modalFooter.style.display = 'none';

        try {
            const response = await fetch('/api/generate-cv', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ targetJob })
            });

            if (!response.ok) {
                throw new Error('Failed to generate CV. Make sure your API key is configured.');
            }

            const data = await response.json();
            
            // Clean up possible markdown wrapper
            let htmlStr = data.html;
            if (htmlStr.startsWith('\`\`\`html')) htmlStr = htmlStr.replace(/^\`\`\`html\\n/, '').replace(/\\n\`\`\`$/, '');
            else if (htmlStr.startsWith('\`\`\`')) htmlStr = htmlStr.replace(/^\`\`\`\\n/, '').replace(/\\n\`\`\`$/, '');

            previewContent.innerHTML = htmlStr;

            loadingScreen.style.display = 'none';
            previewScreen.style.display = 'flex';
            modalFooter.style.display = 'flex';

        } catch (error) {
            console.error(error);
            alert("Error generating CV: " + error.message);
            resetCvScreens();
        }
    }

    btnGenerate.addEventListener('click', generateCV);
    btnRebuild.addEventListener('click', () => {
        setupScreen.style.display = 'flex';
        previewScreen.style.display = 'none';
        modalFooter.style.display = 'none';
    });

    // Handle PDF Download using html2pdf
    btnDownload.addEventListener('click', () => {
        const element = document.getElementById('cv-preview-content');
        const opt = {
            margin:       10,
            filename:     'Avumile_Tati_CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Add a temporary class to ensure dark mode doesn't affect print styles
        element.style.background = 'white';
        element.style.color = 'black';

        // Change button text while processing
        const originalText = btnDownload.innerHTML;
        btnDownload.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Generating PDF...";
        btnDownload.disabled = true;

        html2pdf().set(opt).from(element).save().then(() => {
            btnDownload.innerHTML = originalText;
            btnDownload.disabled = false;
        });
    });
});`;

const newLogic = `/* =========================================
   STATIC CV PREVIEW & DOWNLOAD LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const cvModal = document.getElementById('static-cv-modal');
    const openCvBtn = document.getElementById('open-static-cv-btn');
    const closeCvBtn = document.getElementById('static-cv-close-btn');
    const btnDownload = document.getElementById('btn-download-static-cv');

    if (!cvModal || !openCvBtn) return;

    // Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close Modal
    const closeCvModal = () => {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeCvBtn.addEventListener('click', closeCvModal);
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });

    // Handle PDF Download using html2pdf
    btnDownload.addEventListener('click', () => {
        const element = document.getElementById('static-cv-document');
        const opt = {
            margin:       10,
            filename:     'Avumile_Tati_CV.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        // Change button text while processing
        const originalText = btnDownload.innerHTML;
        btnDownload.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Generating PDF...";
        btnDownload.disabled = true;

        html2pdf().set(opt).from(element).save().then(() => {
            btnDownload.innerHTML = originalText;
            btnDownload.disabled = false;
        });
    });
});`;

if (js.includes('AI CV BUILDER LOGIC')) {
    js = js.replace(oldLogic, newLogic);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log('script.js updated successfully for static CV');
} else {
    console.log('Could not find AI CV Logic in script.js');
}
