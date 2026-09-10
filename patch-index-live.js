const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Replace TechnoResolve img
const technoImg = /<img src="https:\/\/images\.unsplash\.com\/photo-1551288049-bebda4e38f71\?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk" class="slide-image">/;
const technoIframe = `<div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://technoresolve-desk.ai.studio/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 5; pointer-events: none; background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);"></div>
                        </div>`;
html = html.replace(technoImg, technoIframe);

// Replace Bright Minds img
const brightImg = /<img src="Images\/bright_minds_home\.png" alt="Bright Minds Hub" class="slide-image">/;
const brightIframe = `<div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://avumiletati.github.io/Bright-Minds-Hub/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 5; pointer-events: none; background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);"></div>
                        </div>`;
html = html.replace(brightImg, brightIframe);

// Replace DDT img
const ddtImg = /<img src="Images\/dynamicduo_logo\.png" alt="Dynamic Duo Tech" class="slide-image">/;
const ddtIframe = `<div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://ddtsolutions.co.za/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 5; pointer-events: none; background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);"></div>
                        </div>`;
html = html.replace(ddtImg, ddtIframe);

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Updated index.html slider with live iframes.");
