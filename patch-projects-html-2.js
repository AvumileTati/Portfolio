const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/projects.html', 'utf8');

const brightRegex = /<!-- Project 1: Bright Minds Hub \(Featured\/New\) -->[\s\S]*?<\/article>/;
const ddtRegex = /<!-- Project 2: Dynamic Duo Tech Solutions -->[\s\S]*?<\/article>/;

const newBrightCard = `<!-- Project 1: Bright Minds Hub (Featured/New) -->
            <article class="cool-project-card" data-category="web">
                <div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://avumiletati.github.io/Bright-Minds-Hub/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge">Web Development</span>
                        <span class="badge">Community</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Bright Minds Hub</h3>
                    <p>A safe haven for after-school learning. This platform supports a community-driven initiative providing academic support, nutrition, and holistic growth for learners.</p>
                    <div class="project-actions">
                        <span class="btn-primary-sm">View Details</span>
                        <a href="https://avumiletati.github.io/Bright-Minds-Hub/" target="_blank"
                            rel="noopener noreferrer" class="btn-outline-sm" onclick="event.stopPropagation()">Visit
                            Site ↗</a>
                    </div>
                </div>
            </article>`;
            
const newDdtCard = `<!-- Project 2: Dynamic Duo Tech Solutions -->
            <article class="cool-project-card" data-category="web">
                <div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://ddtsolutions.co.za/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge">Full-Stack</span>
                        <span class="badge">IT Support</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>Dynamic Duo Tech Solutions</h3>
                    <p>Developed web pages, logo designs, and managed custom DNS configurations for ddtsolutions.co.za.</p>
                    <div class="project-actions">
                        <span class="btn-primary-sm">View Details</span>
                        <a href="https://ddtsolutions.co.za/" target="_blank" rel="noopener noreferrer"
                            class="btn-outline-sm" onclick="event.stopPropagation()">Visit Site ↗</a>
                    </div>
                </div>
            </article>`;

let updated = false;
if (html.match(brightRegex)) {
    html = html.replace(brightRegex, newBrightCard);
    updated = true;
}
if (html.match(ddtRegex)) {
    html = html.replace(ddtRegex, newDdtCard);
    updated = true;
}

if(updated) {
    fs.writeFileSync('Avumile Tati Portfolio/projects.html', html);
    console.log("Updated other cards with live preview");
}

