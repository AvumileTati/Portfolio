const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// 1. Remove the old toggle from the bottom
const toggleRegex = /<!-- Floating Theme Toggle -->\s*<a href="javascript:void\(0\)" id="theme-toggle" class="theme-toggle"[^>]*>\s*<i data-lucide="moon"><\/i>\s*<\/a>/;
html = html.replace(toggleRegex, '');

// 2. Add it inside .nav-container, after .nav-wrap
const cleanToggle = `
        <a href="javascript:void(0)" id="theme-toggle" class="theme-toggle">
            <i data-lucide="moon"></i>
        </a>`;

const navWrapEnd = '</nav>\n        </div>';
if (html.includes(navWrapEnd)) {
    html = html.replace(navWrapEnd, navWrapEnd + cleanToggle);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Moved theme toggle successfully.");
} else {
    console.log("Could not find nav-wrap end.");
}
