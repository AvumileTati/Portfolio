const fs = require('fs');

// 1. Revert index.html slider
let indexHtml = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const tSliderIframe = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/technoresolve-desk\.ai\.studio\/"[\s\S]*?<\/div>/;
const tSliderImg = `<img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk" class="slide-image" style="height: 220px;">`;
indexHtml = indexHtml.replace(tSliderIframe, tSliderImg);

const bSliderIframe = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/avumiletati\.github\.io\/Bright-Minds-Hub\/"[\s\S]*?<\/div>/;
const bSliderImg = `<img src="Images/bright_minds_home.png" alt="Bright Minds Hub" class="slide-image" style="height: 220px;">`;
indexHtml = indexHtml.replace(bSliderIframe, bSliderImg);

const dSliderIframe = /<div class="slide-image live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/ddtsolutions\.co\.za\/"[\s\S]*?<\/div>/;
const dSliderImg = `<img src="Images/dynamicduo_logo.png" alt="Dynamic Duo Tech Solutions" class="slide-image" style="height: 220px;">`;
indexHtml = indexHtml.replace(dSliderIframe, dSliderImg);

fs.writeFileSync('Avumile Tati Portfolio/index.html', indexHtml);
console.log("Reverted index.html iframes to images.");

// 2. Revert projects.html cards
let projHtml = fs.readFileSync('Avumile Tati Portfolio/projects.html', 'utf8');

// Bright Minds Hub
const bProjRegex = /<div class="project-image-wrapper live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/avumiletati\.github\.io\/Bright-Minds-Hub\/"[\s\S]*?<\/div>\s*<\/div>/;
const bProjImg = `<div class="project-image-wrapper">
                    <img src="Images/bright_minds_home.png" alt="Bright Minds Hub Website">
                    <div class="project-badges">
                        <span class="badge" style="background: var(--primary);">NEW</span>
                        <span class="badge">Web Development</span>
                        <span class="badge">Community</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(bProjRegex, bProjImg);

// Dynamic Duo Tech
const dProjRegex = /<div class="project-image-wrapper live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/ddtsolutions\.co\.za\/"[\s\S]*?<\/div>\s*<\/div>/;
const dProjImg = `<div class="project-image-wrapper">
                    <img src="Images/ddt_home.png" alt="Dynamic Duo Tech Solutions Website">
                    <div class="project-badges">
                        <span class="badge">Full-Stack</span>
                        <span class="badge">IT Support</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(dProjRegex, dProjImg);

// TechnoResolve Desk
const tProjRegex = /<div class="project-image-wrapper live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/technoresolve-desk\.ai\.studio\/"[\s\S]*?<\/div>\s*<\/div>/;
const tProjImg = `<div class="project-image-wrapper">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk Website">
                    <div class="project-badges">
                        <span class="badge" style="background: var(--primary);">NEW</span>
                        <span class="badge">AI SaaS</span>
                        <span class="badge">Dashboard</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(tProjRegex, tProjImg);

// PrePhones
const pProjRegex = /<div class="project-image-wrapper live-preview-wrapper"[\s\S]*?<iframe src="https:\/\/sites\.google\.com\/view\/prephones\/home"[\s\S]*?<\/div>\s*<\/div>/;
const pProjImg = `<div class="project-image-wrapper">
                    <img src="Images/prephones_home.png" alt="PrePhones Official Store">
                    <div class="project-badges">
                        <span class="badge">Web Development</span>
                        <span class="badge">E-commerce</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(pProjRegex, pProjImg);

fs.writeFileSync('Avumile Tati Portfolio/projects.html', projHtml);
console.log("Reverted projects.html iframes to images.");
