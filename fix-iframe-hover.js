const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const regex1 = /\.cool-project-card:hover \.live-preview-wrapper iframe\s*\{[\s\S]*?\}/;
if (css.match(regex1)) {
    css = css.replace(regex1, '');
}

const regex2 = /\.slide:hover \.live-preview-wrapper iframe\s*\{[\s\S]*?\}/;
if (css.match(regex2)) {
    css = css.replace(regex2, '');
}

fs.writeFileSync('Avumile Tati Portfolio/styles.css', css);
console.log("Removed problematic iframe hover effects.");
