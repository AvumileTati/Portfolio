const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const oldCssRegex = /\/\* Unique Style for Featured Projects Section Container \*\/[\s\S]*?margin-top: 3rem;\n}/;

if (css.match(oldCssRegex)) {
    const newCss = `/* =========================================
   FEATURED PROJECTS CONTAINER (PREMIUM STYLING & FEATURES)
   ========================================= */
section#projects:nth-of-type(5) > div:nth-of-type(1) {
    background: var(--bg-card);
    background-image: radial-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px);
    background-size: 24px 24px;
    border-radius: 40px;
    padding: 5rem 3rem;
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.05), inset 0 2px 20px rgba(255, 255, 255, 0.5);
    border: 1px solid rgba(37, 99, 235, 0.15);
    position: relative;
    max-width: 1350px;
    margin: 4rem auto;
    overflow: hidden;
}

/* Dark theme specific container styles */
[data-theme="dark"] section#projects:nth-of-type(5) > div:nth-of-type(1) {
    background-color: var(--bg-card);
    background-image: radial-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3), inset 0 2px 20px rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
}

/* Feature 1: Ambient Animated Glow Orb */
section#projects:nth-of-type(5) > div:nth-of-type(1)::before {
    content: '';
    position: absolute;
    top: -30%;
    left: -20%;
    width: 70%;
    height: 150%;
    background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0) 70%);
    transform: rotate(-45deg);
    z-index: 0;
    pointer-events: none;
    animation: projectsOrbDrift 20s infinite alternate ease-in-out;
}

[data-theme="dark"] section#projects:nth-of-type(5) > div:nth-of-type(1)::before {
    background: radial-gradient(ellipse at center, rgba(37, 99, 235, 0.15) 0%, rgba(20, 20, 25, 0) 70%);
}

@keyframes projectsOrbDrift {
    0% { transform: rotate(-45deg) translate(0, 0) scale(1); }
    100% { transform: rotate(-45deg) translate(15%, 15%) scale(1.1); }
}

/* Feature 2: Subtle Top Edge Highlight Ribbon */
section#projects:nth-of-type(5) > div:nth-of-type(1)::after {
    content: '';
    position: absolute;
    top: 0; 
    left: 10%; 
    right: 10%; 
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 0 0 10px 10px;
    opacity: 0.8;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
}

/* Ensure inner contents sit above the decorative background elements */
section#projects:nth-of-type(5) > div:nth-of-type(1) > * {
    position: relative;
    z-index: 1;
}

/* Adjust the slider inside the new container for better breathing room */
section#projects:nth-of-type(5) > div:nth-of-type(1) .project-slider {
    margin-top: 3.5rem;
}`;
    
    css = css.replace(oldCssRegex, newCss);
    fs.writeFileSync('Avumile Tati Portfolio/styles.css', css);
    console.log("Successfully replaced CSS");
} else {
    console.log("Could not find the old CSS to replace");
}
