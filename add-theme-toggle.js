const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const toggleBtn = `
    <!-- Floating Theme Toggle -->
    <a href="javascript:void(0)" id="theme-toggle" class="theme-toggle" style="position: fixed; bottom: 20px; right: 20px; background: var(--bg-card); width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); z-index: 1000; border: 1px solid var(--border);">
        <i data-lucide="moon"></i>
    </a>
`;

// Insert it right before </body>
html = html.replace('</body>', toggleBtn + '\n</body>');
fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Added floating theme toggle");
