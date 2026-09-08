const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const newSlides = `
                    <div class="slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <img src="Images/bright_minds_home.png" alt="Bright Minds Hub" class="slide-image">
                        <div class="slide-overlay">
                            <h3>Bright Minds Hub</h3>
                            <p>Community After-School Platform</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Bright Minds Hub" data-desc="An engaging educational platform." data-img="Images/bright_minds_home.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <img src="Images/dynamicduo_logo.png" alt="Dynamic Duo Tech" class="slide-image">
                        <div class="slide-overlay">
                            <h3>Dynamic Duo Tech Solutions</h3>
                            <p>Managed IT Portfolio</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Dynamic Duo Tech Solutions" data-desc="A professional showcase portfolio for an IT consulting firm." data-img="Images/dynamicduo_logo.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>
                    <div class="slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <img src="Images/srd_figma1.png" alt="SRD Registration System" class="slide-image">
                        <div class="slide-overlay">
                            <h3>SRD Registration System</h3>
                            <p>SASSA Grant Mobile Prototype</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="SRD Registration System" data-desc="A streamlined, user-friendly mobile UI/UX prototype." data-img="Images/srd_figma1.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>
`;

// use DOM parser or regex carefully
const match = html.match(/<div class="slider-container">([\s\S]*?)<\/div>\s*<\/div>\s*<div class="text-center mt-8">/);
if (match) {
    html = html.replace(match[1], "\n" + newSlides + "                ");
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated!");
} else {
    console.log("Still not found");
}
