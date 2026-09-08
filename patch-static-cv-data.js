const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// I am going to replace the contents of the #static-cv-document container.
// First, I need to match the start and end of that container.

const startMarker = '<div id="static-cv-document"';
const startIndex = html.indexOf(startMarker);

if (startIndex === -1) {
    console.error("Could not find static-cv-document");
    process.exit(1);
}

// Find the closing div of static-cv-document.
// This is a bit tricky, but I'll replace everything between the start marker and the next </div>            </div>        </div>    </div>
const endMarker = '            </div>\n        </div>\n    </div>\n</body>\n</html>';
const endIndex = html.indexOf(endMarker, startIndex);

if (endIndex === -1) {
    console.error("Could not find end marker");
    process.exit(1);
}

const newDocument = `<div id="static-cv-document" style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 100%; margin: 0 auto; padding: 40px; background: #fff; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                    <h1 style="font-size: 32px; margin-bottom: 5px; color: #111; font-weight: 700;">Avumile Tati</h1>
                    <p style="font-size: 16px; margin-top: 0; color: #555; border-bottom: 2px solid #2563eb; padding-bottom: 15px; font-weight: 500;">IT Support & Service Desk Technician | ICT Graduate</p>
                    
                    <div style="font-size: 13px; margin-bottom: 25px; display: flex; flex-wrap: wrap; gap: 15px; color: #666; font-weight: 500;">
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bx-envelope' style="font-size: 16px; color: #2563eb;"></i> tatiavumile@gmail.com</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bx-map' style="font-size: 16px; color: #2563eb;"></i> Cape Town, South Africa</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bxl-linkedin' style="font-size: 16px; color: #2563eb;"></i> linkedin.com/in/avumile-tati</span>
                        <span style="display: flex; align-items: center; gap: 4px;"><i class='bx bxl-github' style="font-size: 16px; color: #2563eb;"></i> github.com/avumiletati</span>
                    </div>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Profile</h3>
                    <p style="font-size: 14px; color: #444;">Aspiring IT professional with a Diploma in Information Communication Technology and hands-on experience in web and application development. Eager to contribute technical expertise, problem-solving skills, and adaptability to a dynamic organization. Passionate about bridging the digital divide by empowering communities with tech education through initiatives like Dynamic Duo Tech Solutions.</p>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Technical Skills</h3>
                    <ul style="font-size: 14px; padding-left: 20px; margin-bottom: 20px; color: #444;">
                        <li style="margin-bottom: 6px;"><strong>Web Development:</strong> PHP, MySQL, Full-Stack Architecture, HTML, CSS, JavaScript</li>
                        <li style="margin-bottom: 6px;"><strong>Deployment & Version Control:</strong> GitHub, Netlify, Custom DNS</li>
                        <li style="margin-bottom: 6px;"><strong>IT & Environment Setup:</strong> VS Code, PowerShell, Windows OS Customization, Hardware & Software Troubleshooting</li>
                    </ul>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Experience</h3>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">Service Desk Academy Trainee</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">CAPACITI | Aug 2026 - Present</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Service Desk Academy intensive training program.</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">IT Intern</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">Net Campus | Jan 2025 - Dec 2025</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Gained practical enterprise environment experience, assisting with network and systems operations.</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">Sales Assistant</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">Black Ink Promotions | Jun 2024 - Dec 2024</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Delivered exceptional customer service, problem-solving client inquiries efficiently.</li>
                        </ul>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">Technical Trainee (AI & Programming)</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">Samsung Innovation Campus | Feb 2023 - Dec 2023</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">Completed comprehensive training in Artificial Intelligence, programming methodologies, and technical problem solving.</li>
                        </ul>
                    </div>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Projects</h3>
                    <ul style="font-size: 14px; padding-left: 20px; margin-bottom: 20px; color: #444;">
                        <li style="margin-bottom: 6px;"><strong>Dynamic Duo Tech Solutions:</strong> A tech initiative focused on creating opportunities through tech education, developing websites/apps, and training learners in rural areas.</li>
                    </ul>

                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Education</h3>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">Diploma in ICT in Applications Development</h4>
                        <div style="font-size: 14px; color: #666;">Walter Sisulu University | Completed Dec 2023</div>
                    </div>
                    <div style="margin-bottom: 15px;">
                        <h4 style="font-size: 16px; margin: 0; color: #111;">Grade 12 Certificate</h4>
                        <div style="font-size: 14px; color: #666;">Ndamase Senior Secondary School | Completed 2020</div>
                    </div>
                    
                    <h3 style="font-size: 18px; color: #2563eb; border-bottom: 1px solid #eee; padding-bottom: 5px; margin-top: 25px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Certifications</h3>
                    <div style="font-size: 14px; color: #444; display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">DeepLearning.AI Machine Learning</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">IBM Python for Data Science</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">Google Cloud Generative AI</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">Samsung Innovation Campus AI</span>
                    </div>
                </div>
`;

const newHtml = html.substring(0, startIndex) + newDocument + '\n' + html.substring(endIndex);

fs.writeFileSync('Avumile Tati Portfolio/index.html', newHtml);
console.log('Successfully updated the CV preview document with real portfolio data.');

