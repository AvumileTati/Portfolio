const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Replace TechnoResolve Iframe back to img
const technoIframeRegex = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/technoresolve-desk\.ai\.studio\/"[\s\S]*?<\/div>\s*<\/div>/;
const technoImg = `<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk" class="slide-image">`;
html = html.replace(technoIframeRegex, technoImg);

// Replace Bright Minds Hub Iframe back to img
const brightIframeRegex = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/avumiletati\.github\.io\/Bright-Minds-Hub\/"[\s\S]*?<\/div>\s*<\/div>/;
const brightImg = `<img src="Images/bright_minds_home.png" alt="Bright Minds Hub" class="slide-image">`;
html = html.replace(brightIframeRegex, brightImg);

// Replace Dynamic Duo Tech Iframe back to img
const ddtIframeRegex = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/ddtsolutions\.co\.za\/"[\s\S]*?<\/div>\s*<\/div>/;
const ddtImg = `<img src="Images/dynamicduo_logo.png" alt="Dynamic Duo Tech" class="slide-image">`;
html = html.replace(ddtIframeRegex, ddtImg);

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Reverted slider images.");
