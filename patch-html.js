const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const slide1 = `<div class="slide">
                        <img src="Images/bright_minds_home.png" alt="Bright Minds Hub" class="slide-image">
                        <div class="slide-overlay">
                            <h3>Bright Minds Hub</h3>
                            <p>Community Driven After-School Platform</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Bright Minds Hub" data-desc="A community-driven after-school platform providing educational resources, interactive learning tools, and a collaborative environment for students to thrive." data-img="Images/bright_minds_home.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>`;

const slide2 = `<div class="slide">
                        <img src="Images/ddt_home.png" alt="Dynamic Duo Tech Solutions" class="slide-image">
                        <div class="slide-overlay">
                            <h3>Dynamic Duo Tech Solutions</h3>
                            <p>Managed IT & Cybersecurity Showcase</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="Dynamic Duo Tech Solutions" data-desc="A comprehensive showcase for a managed IT and cybersecurity firm, featuring service portfolios, security advisories, and direct client consultation scheduling." data-img="Images/ddt_home.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>`;

const slide3 = `<div class="slide">
                        <img src="Images/prephones_home.png" alt="PrePhones Official Store" class="slide-image">
                        <div class="slide-overlay">
                            <h3>PrePhones Official Store</h3>
                            <p>Modern E-commerce Mobile Experience</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="PrePhones Official Store" data-desc="A modern, high-performance e-commerce platform optimized for mobile shopping, offering seamless checkout and dynamic product filtering." data-img="Images/prephones_home.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>`;

const slide4 = `<div class="slide">
                        <img src="Images/srd_figma1.png" alt="SRD Registration System" class="slide-image">
                        <div class="slide-overlay">
                            <h3>SRD Registration System</h3>
                            <p>SASSA Grant UI/UX Mobile Prototype</p>
                            <div class="slide-actions">
                                <button class="quick-view-btn" data-title="SRD Registration System" data-desc="A streamlined, user-friendly mobile UI/UX prototype designed to simplify the SASSA grant registration process for South African citizens." data-img="Images/srd_figma1.png" data-link="projects.html"><i data-lucide="eye" style="width:16px;height:16px;"></i> Quick View</button>
                                <a href="projects.html" class="slide-link">View Project</a>
                            </div>
                        </div>
                    </div>`;

// Regex replacement for each slide
html = html.replace(/<div class="slide">[\s\S]*?<h3>Bright Minds Hub<\/h3>[\s\S]*?<a href="projects\.html" class="slide-link">View Project<\/a>\s*<\/div>\s*<\/div>/, slide1);
html = html.replace(/<div class="slide">[\s\S]*?<h3>Dynamic Duo Tech Solutions<\/h3>[\s\S]*?<a href="projects\.html" class="slide-link">View Project<\/a>\s*<\/div>\s*<\/div>/, slide2);
html = html.replace(/<div class="slide">[\s\S]*?<h3>PrePhones Official Store<\/h3>[\s\S]*?<a href="projects\.html" class="slide-link">View Project<\/a>\s*<\/div>\s*<\/div>/, slide3);
html = html.replace(/<div class="slide">[\s\S]*?<h3>SRD Registration System<\/h3>[\s\S]*?<a href="projects\.html" class="slide-link">View Project<\/a>\s*<\/div>\s*<\/div>/, slide4);

// Add modal HTML at the end of the body
const modalHTML = `
    <!-- Quick View Modal -->
    <div id="quick-view-modal" class="modal-overlay">
        <div class="modal-content">
            <button class="modal-close" id="modal-close-btn"><i data-lucide="x"></i></button>
            <div class="modal-body">
                <div class="modal-image-container">
                    <img id="modal-image" src="" alt="Project Preview">
                </div>
                <div class="modal-details">
                    <h3 id="modal-title">Project Title</h3>
                    <p id="modal-desc">Detailed description goes here...</p>
                    <div class="modal-actions">
                        <a id="modal-link" href="#" class="btn-primary">View Full Project</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

html = html.replace('</body>', modalHTML + '\n</body>');

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log('HTML Patched');
