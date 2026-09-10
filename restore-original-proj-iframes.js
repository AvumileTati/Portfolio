const fs = require('fs');

let projHtml = fs.readFileSync('Avumile Tati Portfolio/projects.html', 'utf8');

// Bright Minds Hub
const bProjImg = /<div class="project-image-wrapper">[\s\S]*?<img src="Images\/bright_minds_home\.png" alt="Bright Minds Hub Website">[\s\S]*?<\/div>\s*<\/div>/;
const bProjRegex = `<div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://avumiletati.github.io/Bright-Minds-Hub/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge" style="background: var(--primary);">NEW</span>
                        <span class="badge">Web Development</span>
                        <span class="badge">Community</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(bProjImg, bProjRegex);

// Dynamic Duo Tech
const dProjImg = /<div class="project-image-wrapper">[\s\S]*?<img src="Images\/ddt_home\.png" alt="Dynamic Duo Tech Solutions Website">[\s\S]*?<\/div>\s*<\/div>/;
const dProjRegex = `<div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://ddtsolutions.co.za/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge">Full-Stack</span>
                        <span class="badge">IT Support</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(dProjImg, dProjRegex);

// TechnoResolve Desk
const tProjImg = /<div class="project-image-wrapper">[\s\S]*?<img src="https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk Website">[\s\S]*?<\/div>\s*<\/div>/;
const tProjRegex = `<div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://technoresolve-desk.ai.studio/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge" style="background: var(--primary);">NEW</span>
                        <span class="badge">AI SaaS</span>
                        <span class="badge">Dashboard</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(tProjImg, tProjRegex);

// PrePhones
const pProjImg = /<div class="project-image-wrapper">[\s\S]*?<img src="Images\/prephones_home\.png" alt="PrePhones Official Store">[\s\S]*?<\/div>\s*<\/div>/;
const pProjRegex = `<div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://sites.google.com/view/prephones/home" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge">Web Development</span>
                        <span class="badge">E-commerce</span>
                    </div>
                </div>`;
projHtml = projHtml.replace(pProjImg, pProjRegex);

fs.writeFileSync('Avumile Tati Portfolio/projects.html', projHtml);
console.log("Restored original iframe layout on projects.html cards.");
