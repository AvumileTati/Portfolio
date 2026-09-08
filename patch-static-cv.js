const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// 1. Replace the button
const oldBtn = `<a href="#" id="open-ai-cv-btn" class="btn-outline" style="position: relative; overflow: hidden;">
                            <i class='bx bx-bot'></i>
                            AI CV Builder
                            <span class="badge" style="position: absolute; top: -5px; right: -5px; background: var(--primary); color: white; font-size: 0.6rem; padding: 2px 6px; border-radius: 10px; font-weight: bold;">NEW</span>
                        </a>`;
const newBtn = `<a href="#" id="open-static-cv-btn" class="btn-outline">
                            <i class='bx bx-file'></i>
                            Preview & Download CV
                        </a>`;
html = html.replace(oldBtn, newBtn);

// 2. Remove the AI CV Modal
const aiModalStart = `<!-- AI CV Builder Modal -->`;
const aiModalEnd = `<!-- AI CV Builder Modal End -->`; // Wait, I didn't add an end comment in the last patch.
// Let's just find where it ends or replace it via string manipulation.
// Actually, it's right before </body>. I can just split at `<!-- AI CV Builder Modal -->` and drop everything after, then append the new modal and </body>.

if (html.includes('<!-- AI CV Builder Modal -->')) {
    html = html.split('<!-- AI CV Builder Modal -->')[0];
}

const staticCvModalHTML = `
    <!-- Static CV Preview Modal -->
    <div id="static-cv-modal" class="modal-overlay">
        <div class="modal-content" style="max-width: 850px; width: 95%; max-height: 90vh; display: flex; flex-direction: column;">
            <button class="modal-close" id="static-cv-close-btn"><i class='bx bx-x'></i></button>
            
            <div class="modal-header" style="padding: 1.5rem 2rem; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0; display: flex; align-items: center; gap: 10px; color: var(--text);"><i class='bx bx-file text-primary'></i> Resume Preview</h3>
                <button id="btn-download-static-cv" class="btn-primary-sm" style="padding: 8px 16px; border-radius: 8px; background: var(--primary); color: white; border: none; cursor: pointer; display: flex; align-items: center; gap: 5px; font-weight: 600;">
                    <i class='bx bx-download'></i> Download PDF
                </button>
            </div>

            <div class="modal-body" style="padding: 2rem; flex: 1; overflow-y: auto; background: var(--bg-light);">
                
                <div id="static-cv-document" style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 100%; margin: 0 auto; padding: 40px; background: #fff; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <h1 style="font-size: 32px; margin-bottom: 5px; color: #111; font-weight: 700;">Avumile Tati</h1>
                    <p style="font-size: 16px; margin-top: 0; color: #555; border-bottom: 2px solid #2563eb; padding-bottom: 15px; font-weight: 500;">IT Support & Service Desk Technician</p>
                    
                    <div style="font-size: 13px; margin-bottom: 25px; display: flex; flex-wrap: wrap; gap: 15px; color: #666; font-weight: 500;">
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bx-envelope' style="font-size: 16px; color: #2563eb;"></i> tatiavumile@gmail.com</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bx-map' style="font-size: 16px; color: #2563eb;"></i> Cape Town, South Africa</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bxl-linkedin' style="font-size: 16px; color: #2563eb;"></i> linkedin.com/in/avumile-tati</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bxl-github' style="font-size: 16px; color: #2563eb;"></i> github.com/avumiletati</span>
                    </div>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Profile</h3>
                    <p style="font-size: 14px; color: #444;">An enthusiastic ICT Graduate and detail-oriented IT professional with a solid foundation in computer science and hands-on experience in technical support, software engineering, and system troubleshooting. Passionate about creating efficient digital solutions and providing excellent service desk support.</p>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Technical Skills</h3>
                    <ul style="font-size: 14px; padding-left: 20px; margin-bottom: 20px; color: #444;">
                        <li style="margin-bottom: 6px;"><strong>Web Development:</strong> PHP, MySQL, Full-Stack Architecture, HTML, CSS, JavaScript</li>
                        <li style="margin-bottom: 6px;"><strong>Deployment & Tools:</strong> Git, GitHub, Netlify, Custom DNS, VS Code, LucidChart</li>
                        <li style="margin-bottom: 6px;"><strong>IT Support:</strong> PowerShell, Windows OS Customization, Hardware & Software Troubleshooting</li>
                        <li style="margin-bottom: 6px;"><strong>Programming:</strong> Java, Python</li>
                    </ul>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Experience</h3>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">IT Support & Service Desk Technician</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">PrePhones Official Store | Jun 2024 - Present</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Provide first-level technical support for internal staff and customer-facing systems.</li>
                            <li style="margin-bottom: 4px;">Troubleshoot hardware, software, and network issues, ensuring minimal operational downtime.</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">End-User Computing Facilitator</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">Silulo Ulutho Technologies | Jul 2021 - May 2024</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Facilitated comprehensive training sessions on end-user computing and essential software applications.</li>
                            <li style="margin-bottom: 4px;">Maintained training environments and assisted in resolving localized IT issues for staff and students.</li>
                        </ul>
                    </div>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Key Projects</h3>
                    <ul style="font-size: 14px; padding-left: 20px; margin-bottom: 20px; color: #444;">
                        <li style="margin-bottom: 6px;"><strong>Bright Minds Hub:</strong> Developed a community-driven after-school platform providing educational resources and tools.</li>
                        <li style="margin-bottom: 6px;"><strong>Dynamic Duo Tech Solutions:</strong> Designed and deployed a managed IT & Cybersecurity showcase portfolio.</li>
                        <li style="margin-bottom: 6px;"><strong>PrePhones Official Store:</strong> Built a modern, responsive E-commerce mobile web experience.</li>
                        <li style="margin-bottom: 6px;"><strong>SRD Registration System:</strong> Created a highly interactive SASSA Grant UI/UX mobile prototype application.</li>
                    </ul>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Education</h3>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">NCV Level 4 IT & Computer Science</h4>
                        <div style="font-size: 14px; color: #666;">False Bay TVET College</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</body>
</html>
`;

html = html + staticCvModalHTML;
fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log('index.html updated for static CV modal');
