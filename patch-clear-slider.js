const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const sliderRegex = /<div class="slider-container">[\s\S]*?<\/div>\s*<\/div>\s*<div class="text-center mt-8">/;

const newSlider = `<div class="slider-container">
                    <!-- TechnoResolve Desk (Live) -->
                    <div class="slide clear-card-slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111; height: 220px;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://technoresolve-desk.ai.studio/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                        </div>
                        <div class="slide-content">
                            <h3>TechnoResolve Desk</h3>
                            <p>AI-Tiered IT Support Desk</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="TechnoResolve Desk" data-desc="TechnoResolve Desk routes business requests with AI triage and gives admins, technicians and customers a dashboard built for their role." data-img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" data-link="https://technoresolve-desk.ai.studio/"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="https://technoresolve-desk.ai.studio/" target="_blank" class="slide-link">Visit App</a>
                            </div>
                        </div>
                    </div>

                    <!-- Bright Minds Hub (Live) -->
                    <div class="slide clear-card-slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111; height: 220px;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://avumiletati.github.io/Bright-Minds-Hub/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                        </div>
                        <div class="slide-content">
                            <h3>Bright Minds Hub</h3>
                            <p>Community After-School Platform</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Bright Minds Hub" data-desc="An engaging educational platform." data-img="Images/bright_minds_home.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>

                    <!-- Dynamic Duo Tech (Live) -->
                    <div class="slide clear-card-slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <div class="slide-image live-preview-wrapper" style="position: relative; overflow: hidden; background: #111; height: 220px;">
                            <div class="live-indicator" style="top: 15px; bottom: auto; right: 15px;"><i class="fas fa-circle" style="color: #ef4444; font-size: 8px; margin-right: 5px; animation: pulse 2s infinite;"></i>LIVE</div>
                            <iframe src="https://ddtsolutions.co.za/" style="width: 400%; height: 400%; border: none; transform: scale(0.25); transform-origin: 0 0; pointer-events: none; position: absolute; top: 0; left: 0;" tabindex="-1"></iframe>
                        </div>
                        <div class="slide-content">
                            <h3>Dynamic Duo Tech Solutions</h3>
                            <p>Managed IT Portfolio</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Dynamic Duo Tech Solutions" data-desc="A professional showcase portfolio for an IT consulting firm." data-img="Images/dynamicduo_logo.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>

                    <!-- SRD Registration (Static) -->
                    <div class="slide clear-card-slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <img src="Images/srd_figma1.png" alt="SRD Registration System" class="slide-image" style="height: 220px;">
                        <div class="slide-content">
                            <h3>SRD Registration System</h3>
                            <p>SASSA Grant Mobile Prototype</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="SRD Registration System" data-desc="A streamlined, user-friendly mobile UI/UX prototype." data-img="Images/srd_figma1.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">`;

if (html.match(sliderRegex)) {
    html = html.replace(sliderRegex, newSlider);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated slider HTML structure.");
} else {
    console.log("Could not match slider regex.");
}
