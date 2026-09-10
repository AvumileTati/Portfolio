const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const newSlide = `
                    <div class="slide project-slide-stagger" style="opacity: 0; transform: translateY(50px); transition: all 0.6s cubic-bezier(0.25, 0.85, 0.15, 1.15);">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="TechnoResolve Desk" class="slide-image">
                        <div class="slide-overlay">
                            <h3>TechnoResolve Desk</h3>
                            <p>AI-Tiered IT Support Desk</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="TechnoResolve Desk" data-desc="TechnoResolve Desk routes business requests with AI triage and gives admins, technicians and customers a dashboard built for their role." data-img="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" data-link="https://technoresolve-desk.ai.studio/"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="https://technoresolve-desk.ai.studio/" target="_blank" class="slide-link">Visit App</a>
                            </div>
                        </div>
                    </div>`;

// Insert the new slide at the beginning of the slider container so it shows up first.
const sliderContainerStart = '<div class="slider-container">';
if (html.includes(sliderContainerStart)) {
    html = html.replace(sliderContainerStart, sliderContainerStart + newSlide);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Added TechnoResolve Desk to the slider.");
} else {
    console.log("Could not find slider container.");
}
