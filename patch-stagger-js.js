const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const observerLogic = `
    // Intersection Observer for stagger-reveal on project slides
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // If the container is in view, we find all the slides inside it
                // Actually, let's just observe the slides directly, but if we want them to stagger together,
                // we can observe the .project-slider container.
                
                const slides = entry.target.querySelectorAll('.project-slide-stagger');
                slides.forEach((slide, index) => {
                    setTimeout(() => {
                        slide.classList.add('in-view');
                    }, index * 200); // 200ms stagger delay between each slide
                });
                
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const projectSliderContainer = document.querySelector('#projects .project-slider');
    if (projectSliderContainer) {
        staggerObserver.observe(projectSliderContainer);
    }
`;

// Append to the end of the DOMContentLoaded block, or just append to file inside a new DOMContentLoaded
js += `\ndocument.addEventListener('DOMContentLoaded', () => { ${observerLogic} });`;

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Stagger JS logic added.");
