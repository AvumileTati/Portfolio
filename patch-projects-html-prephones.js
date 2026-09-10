const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/projects.html', 'utf8');

const preRegex = /<!-- Project 3: PrePhones Official Store -->[\s\S]*?<\/article>/;

const newPreCard = `<!-- Project 3: PrePhones Official Store -->
            <article class="cool-project-card" data-category="web">
                <div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://sites.google.com/view/prephones/home" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge">Web Development</span>
                        <span class="badge">E-commerce</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>PrePhones Official Store</h3>
                    <p>A flagship Google Sites store for pre-owned smartphones featuring a dark aesthetic and interactive product carousels.</p>
                    <div class="project-actions">
                        <span class="btn-primary-sm">View Details</span>
                        <a href="https://sites.google.com/view/prephones/home" target="_blank" rel="noopener noreferrer"
                            class="btn-outline-sm" onclick="event.stopPropagation()">Visit Site ↗</a>
                    </div>
                </div>
            </article>`;

if (html.match(preRegex)) {
    html = html.replace(preRegex, newPreCard);
    fs.writeFileSync('Avumile Tati Portfolio/projects.html', html);
    console.log("Updated PrePhones with live preview");
}

