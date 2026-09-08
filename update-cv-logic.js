const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldLogic = `// Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });`;

const newLogic = `// Auto-Update CV Content from Portfolio
    function syncCvContent() {
        try {
            const cvDoc = document.getElementById('static-cv-document');
            if (!cvDoc) return;

            // 1. Profile Summary
            const aboutIntro = document.querySelector('.about-intro p:first-of-type');
            const aboutGoals = document.querySelector('.about-intro p:nth-of-type(2)');
            const cvProfile = cvDoc.querySelector('h3:contains("Profile") + p');
            if (aboutIntro && aboutGoals && cvProfile) {
                // Remove HTML tags for clean text in CV
                let cleanGoals = aboutGoals.innerHTML.replace(/<[^>]*>?/gm, ' ').replace(/\\s+/g, ' ').trim();
                cvProfile.textContent = aboutIntro.textContent.trim() + " " + cleanGoals;
            }

            // 2. Experience
            const timelineItems = document.querySelectorAll('.timeline-item');
            const cvExperienceContainer = cvDoc.querySelectorAll('h3:contains("Experience")')[0].nextElementSibling.parentNode;
            
            // We need to carefully replace just the experience blocks, but this is risky if the DOM structure changes.
            // A safer approach is to dynamically rebuild the experience section in the CV.
            
            // Let's create a targeted rebuild of just the lists based on DOM parsing.
            
            // Note: Writing a robust two-way sync in vanilla JS that handles complex nesting without a framework (like React) is error-prone.
            // Instead, since the CV HTML is static in index.html, we will implement a "hydrate" function that grabs the latest DOM text content.
        } catch(e) {
            console.error("Auto-sync CV failed", e);
        }
    }

    // Custom jQuery-like contains selector for vanilla JS
    HTMLElement.prototype.querySelectorAllContains = function(selector, text) {
        return Array.from(this.querySelectorAll(selector)).filter(el => el.textContent.trim() === text);
    };

    function autoSyncResume() {
        const doc = document.getElementById('static-cv-document');
        if (!doc) return;

        // Sync Experience
        const domExperiences = document.querySelectorAll('.timeline-item .card.experience');
        if (domExperiences.length > 0) {
            const expHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Experience'));
            if (expHeaders.length > 0) {
                const expHeader = expHeaders[0];
                // Remove old experience blocks
                let nextEl = expHeader.nextElementSibling;
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                // Inject fresh experiences from portfolio
                const fragment = document.createDocumentFragment();
                domExperiences.forEach(exp => {
                    const title = exp.querySelector('h4') ? exp.querySelector('h4').textContent : '';
                    const date = exp.querySelector('.date') ? exp.querySelector('.date').textContent : '';
                    const desc = exp.querySelector('p:not(.date)') ? exp.querySelector('p:not(.date)').textContent : '';

                    const block = document.createElement('div');
                    block.style.marginBottom = '15px';
                    block.innerHTML = \`
                        <h4 style="font-size: 16px; margin: 0; color: #111;">\${title}</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">\${date}</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">\${desc}</li>
                        </ul>
                    \`;
                    fragment.appendChild(block);
                });
                
                // Insert after header
                expHeader.parentNode.insertBefore(fragment, expHeader.nextSibling);
            }
        }
        
        // Sync Education
        const domEdu = document.querySelectorAll('.card.education');
        if (domEdu.length > 0) {
            const eduHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Education'));
            if (eduHeaders.length > 0) {
                const eduHeader = eduHeaders[0];
                let nextEl = eduHeader.nextElementSibling;
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                const fragment = document.createDocumentFragment();
                domEdu.forEach(edu => {
                    const title = edu.querySelector('p:not(.date)') ? edu.querySelector('p:not(.date)').textContent : '';
                    const inst = edu.querySelector('h4') ? edu.querySelector('h4').textContent : '';
                    const date = edu.querySelector('.date') ? edu.querySelector('.date').textContent : '';

                    const block = document.createElement('div');
                    block.style.marginBottom = '15px';
                    block.innerHTML = \`
                        <h4 style="font-size: 16px; margin: 0; color: #111;">\${title}</h4>
                        <div style="font-size: 14px; color: #666;">\${inst} | \${date}</div>
                    \`;
                    fragment.appendChild(block);
                });
                eduHeader.parentNode.insertBefore(fragment, eduHeader.nextSibling);
            }
        }
    }

    // Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        autoSyncResume(); // Automatically pull latest data from portfolio before showing
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });`;

if (js.includes('openCvBtn.addEventListener(\'click\', (e) => {')) {
    js = js.replace(oldLogic, newLogic);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Auto-sync logic injected.");
}

