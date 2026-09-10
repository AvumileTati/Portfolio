const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

// Replace the old activeBubble sliding logic with a simpler active toggling, if needed.
// The user provided this script:
const newScript = `
    const raulLinks = document.querySelectorAll(".nav a");
    raulLinks.forEach((link) => {
        link.addEventListener("click", () => {
            if(link.id !== 'theme-toggle') {
                raulLinks.forEach((l) => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    });
`;

// Find where updateActiveBubble is defined and remove it, along with mouseenter events on navLinks.
// Actually, it might be safer just to regex out the old bubble stuff, or simply append the new script and let CSS handle the positioning (overriding the JS).
// But the old JS sets `style.left` and `style.width`, which overrides CSS anchor positioning.
// Let's remove the inline styles that the JS might set on `.bubble`

js = js.replace(/activeBubble\.style\.[a-z]+ = .*;/g, '');
js = js.replace(/hoverBubble\.style\.[a-z]+ = .*;/g, '');
js = js.replace(/updateActiveBubble\(\);/g, '');

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Cleaned up old JS inline styles for bubbles");
