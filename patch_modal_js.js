const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const regex = /\/\/ Open Modal\s*document\.querySelectorAll\('\.quick-view-btn'\)\.forEach\(btn => \{[\s\S]*?modal\.classList\.add\('active'\);\s*document\.body\.style\.overflow = 'hidden';(?: \/\/ Prevent background scrolling)?\s*\}\);\s*\}\);/;

const match = js.match(regex);
if (match) {
    const newLogic = `
    // Open Modal and Handle Navigation
    const quickViewBtns = Array.from(document.querySelectorAll('.quick-view-btn'));
    let currentProjectIndex = 0;
    
    const modalPrevBtn = document.getElementById('modal-prev');
    const modalNextBtn = document.getElementById('modal-next');
    
    function populateModal(index) {
        if(index < 0 || index >= quickViewBtns.length) return;
        
        const btn = quickViewBtns[index];
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');
        const img = btn.getAttribute('data-img');
        const link = btn.getAttribute('data-link');
        
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalImage.src = img;
        modalLink.href = link;
        
        // Disable/enable buttons based on index
        if(modalPrevBtn) modalPrevBtn.style.opacity = index === 0 ? '0.5' : '1';
        if(modalPrevBtn) modalPrevBtn.style.pointerEvents = index === 0 ? 'none' : 'auto';
        
        if(modalNextBtn) modalNextBtn.style.opacity = index === quickViewBtns.length - 1 ? '0.5' : '1';
        if(modalNextBtn) modalNextBtn.style.pointerEvents = index === quickViewBtns.length - 1 ? 'none' : 'auto';
    }

    quickViewBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent slider interactions if any
            
            currentProjectIndex = index;
            populateModal(currentProjectIndex);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentProjectIndex > 0) {
                currentProjectIndex--;
                populateModal(currentProjectIndex);
            }
        });
    }
    
    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentProjectIndex < quickViewBtns.length - 1) {
                currentProjectIndex++;
                populateModal(currentProjectIndex);
            }
        });
    }
`;
    
    js = js.replace(match[0], newLogic);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated JS modal logic.");
} else {
    console.log("Could not match the JS modal logic.");
}
