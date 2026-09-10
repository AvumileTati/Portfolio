const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const oldStackRegex = /<div class="tech-stack">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/;

const newHTML = `<div class="premium-skills-bento">
                        <div class="skill-bento-card core-dev">
                            <div class="bento-bg-glow"></div>
                            <div class="bento-icon"><i data-lucide="code-2"></i></div>
                            <h4>Frontend & Backend</h4>
                            <p>Full-stack architecture focusing on scalable, secure, and responsive web applications.</p>
                            <div class="skill-tags">
                                <span>PHP</span>
                                <span>MySQL</span>
                                <span>HTML5</span>
                                <span>CSS3</span>
                                <span>JavaScript</span>
                            </div>
                        </div>
                        
                        <div class="skill-bento-card devops">
                            <div class="bento-bg-glow"></div>
                            <div class="bento-icon"><i data-lucide="git-branch"></i></div>
                            <h4>Deployment & Git</h4>
                            <p>Version control, DNS configuration, and continuous deployment workflows.</p>
                            <div class="skill-tags">
                                <span>GitHub</span>
                                <span>Netlify</span>
                                <span>Custom DNS</span>
                            </div>
                        </div>
                        
                        <div class="skill-bento-card it-support">
                            <div class="bento-bg-glow"></div>
                            <div class="bento-icon"><i data-lucide="cpu"></i></div>
                            <h4>IT Support & OS</h4>
                            <p>Environment provisioning, scripting, and enterprise system troubleshooting.</p>
                            <div class="skill-tags">
                                <span>PowerShell</span>
                                <span>VS Code</span>
                                <span>Windows OS</span>
                                <span>Active Directory</span>
                            </div>
                        </div>
                    </div>
                </div>
    </section>`;

if (html.match(oldStackRegex)) {
    html = html.replace(oldStackRegex, newHTML);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated skills HTML.");
} else {
    console.log("Could not find the tech-stack regex.");
}
