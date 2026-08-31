const fs = require('fs');
let script = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const regex = /themeToggle\.addEventListener\('click',\s*\(e\)\s*=>\s*\{[\s\S]*?\}\);/;

const replacement = `themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            document.documentElement.classList.add('theme-transition');

            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            if (newTheme === 'dark') {
                document.documentElement.style.backgroundColor = '#0b0b0f';
            } else {
                document.documentElement.style.backgroundColor = '#ffffff';
            }
            
            setTimeout(() => {
                document.documentElement.classList.remove('theme-transition');
            }, 850);

            setTimeout(updateActiveBubble, 300);
        });`;

script = script.replace(regex, replacement);

if (script.indexOf('theme-transition') > -1) {
    fs.writeFileSync('Avumile Tati Portfolio/script.js', script);
    console.log("Success");
} else {
    console.log("Failed");
}
