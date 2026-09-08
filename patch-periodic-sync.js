const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldLogicStart = 'function autoSyncResume() {';
const oldLogicEnd = 'autoSyncResume(); // Automatically pull latest data from portfolio before showing';

// We need to replace `autoSyncResume()` and the `openCvBtn.addEventListener` part.
// Let's use a regex or string replacement carefully.

const replacement = `function autoSyncResume() {
        const doc = document.getElementById('static-cv-document');
        if (!doc) return;

        // 1. Sync Profile Summary
        const aboutIntro = document.querySelector('.about-intro p:first-of-type');
        const aboutGoals = document.querySelector('.about-intro p:nth-of-type(2)');
        const cvProfileHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Profile'));
        
        if (aboutIntro && aboutGoals && cvProfileHeaders.length > 0) {
            const cvProfile = cvProfileHeaders[0].nextElementSibling;
            if (cvProfile && cvProfile.tagName === 'P') {
                let cleanGoals = aboutGoals.innerHTML.replace(/<[^>]*>?/gm, ' ').replace(/\\s+/g, ' ').trim();
                cvProfile.textContent = aboutIntro.textContent.trim() + " " + cleanGoals;
            }
        }

        // 2. Sync Projects
        const domProjects = document.querySelectorAll('.project-card');
        if (domProjects.length > 0) {
            const projHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Projects'));
            if (projHeaders.length > 0) {
                const projHeader = projHeaders[0];
                let nextEl = projHeader.nextElementSibling;
                // Keep removing until next H3
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                const ul = document.createElement('ul');
                ul.style.fontSize = '14px';
                ul.style.paddingLeft = '20px';
                ul.style.marginBottom = '20px';
                ul.style.color = '#444';

                domProjects.forEach(proj => {
                    const title = proj.querySelector('h3') ? proj.querySelector('h3').textContent.trim() : '';
                    const desc = proj.querySelector('p') ? proj.querySelector('p').textContent.trim() : '';
                    
                    if (title && desc) {
                        const li = document.createElement('li');
                        li.style.marginBottom = '6px';
                        li.innerHTML = \`<strong>\${title}:</strong> \${desc}\`;
                        ul.appendChild(li);
                    }
                });
                
                if(ul.children.length > 0) {
                    projHeader.parentNode.insertBefore(ul, projHeader.nextSibling);
                }
            }
        }

        // 3. Sync Experience
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
                // Reverse the NodeList to preserve correct top-to-bottom order if we use insertBefore repeatedly,
                // actually, fragment preserves order.
                Array.from(domExperiences).forEach(exp => {
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
        
        // 4. Sync Education
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
                Array.from(domEdu).forEach(edu => {
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

    // Function to periodically check and sync the CV
    function startPeriodicCvSync() {
        // Run immediately once
        autoSyncResume();
        
        // Then check every 5 seconds for any updates to the DOM
        setInterval(() => {
            if (document.getElementById('static-cv-document')) {
                autoSyncResume();
            }
        }, 5000);
    }

    // Initialize the periodic background sync
    startPeriodicCvSync();

    // Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        autoSyncResume(); // Force an immediate pull just in case before showing`;

const searchStringStart = js.indexOf(oldLogicStart);
const searchStringEnd = js.indexOf(oldLogicEnd, searchStringStart);

if (searchStringStart !== -1 && searchStringEnd !== -1) {
    const stringToReplace = js.substring(searchStringStart, searchStringEnd + oldLogicEnd.length);
    js = js.replace(stringToReplace, replacement);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Replaced logic with periodic sync and full parsing.");
} else {
    console.log("Failed to find replacement markers.");
}
