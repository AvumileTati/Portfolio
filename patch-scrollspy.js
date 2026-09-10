const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const scrollSpyLogic = `
// RAUL DRONCA NAV SCROLL SPY
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    
    // Collect all valid target sections
    const sections = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            const section = document.querySelector(href);
            if (section) sections.push(section);
        }
    });

    // Observer options to detect when a section is roughly in the middle of the screen
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(\`.nav a[href="#\${id}"]\`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });
});
`;

js += `\n${scrollSpyLogic}\n`;
fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Added Scroll Spy Logic");
