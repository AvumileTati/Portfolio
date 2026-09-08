const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const marker = '/* =========================================\n   AI CV BUILDER LOGIC';
const index = js.indexOf(marker);

if (index !== -1) {
    js = js.substring(0, index);
    
    const newLogic = `/* =========================================
   STATIC CV PREVIEW & DOWNLOAD LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const cvModal = document.getElementById('static-cv-modal');
    const openCvBtn = document.getElementById('open-static-cv-btn');
    const closeCvBtn = document.getElementById('static-cv-close-btn');
    const btnDownload = document.getElementById('btn-download-static-cv');

    if (!cvModal || !openCvBtn) {
        console.error("Missing CV elements:", { cvModal, openCvBtn });
        return;
    }

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

    if (closeCvBtn) {
        closeCvBtn.addEventListener('click', closeCvModal);
    }
    
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });

    // Handle PDF Download using html2pdf
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const element = document.getElementById('static-cv-document');
            if (!element) return;
            
            const opt = {
                margin:       10,
                filename:     'Avumile_Tati_CV.pdf',
                image:        { type: 'jpeg', quality: 1 },
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
            }).catch(err => {
                console.error("PDF generation failed", err);
                btnDownload.innerHTML = originalText;
                btnDownload.disabled = false;
            });
        });
    }
});`;
    
    js += newLogic;
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log('Successfully replaced AI CV builder logic with static CV logic.');
} else {
    console.log('Marker not found!');
}
