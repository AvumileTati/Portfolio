const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/projects.html', 'utf8');

const technoCardRegex = /<!-- Project 6: TechnoResolve Desk -->[\s\S]*?<\/article>/;

const newTechnoCard = `<!-- Project 6: TechnoResolve Desk -->
            <article class="cool-project-card" data-category="web">
                <div class="project-image-wrapper live-preview-wrapper" style="position: relative; overflow: hidden; background: #111;">
                    <div class="live-indicator"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE PREVIEW</div>
                    <iframe src="https://technoresolve-desk.ai.studio/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                    <div class="project-badges" style="z-index: 10;">
                        <span class="badge" style="background: var(--primary);">NEW</span>
                        <span class="badge">AI SaaS</span>
                        <span class="badge">Dashboard</span>
                    </div>
                </div>
                <div class="project-info">
                    <h3>TechnoResolve Desk</h3>
                    <p>AI-Tiered IT Support Desk that routes business requests with intelligent AI triage.</p>
                    <div class="project-actions">
                        <span class="btn-primary-sm">View Details</span>
                        <a href="https://technoresolve-desk.ai.studio/" target="_blank"
                            rel="noopener noreferrer" class="btn-outline-sm" onclick="event.stopPropagation()">Visit Site ↗</a>
                    </div>
                </div>
            </article>`;

if (html.match(technoCardRegex)) {
    html = html.replace(technoCardRegex, newTechnoCard);
    fs.writeFileSync('Avumile Tati Portfolio/projects.html', html);
    console.log("Replaced TechnoResolve card in projects.html");
} else {
    console.log("Could not find TechnoResolve card in projects.html");
}

