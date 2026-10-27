const fs = require('fs');

const certData = [
  {
    title: "Google AI Essentials",
    provider: "Google",
    type: "Specialization (5 Courses)",
    category: "specializations",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/specialization/7XDACZSDK0OB",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Google_AI_Essentials_becb3ef3.pdf",
    highlight: true,
    badgeText: "5-Course Specialization",
    icon: "award"
  },
  {
    title: "Service Desk Academy - Demand Academy CPT",
    provider: "CAPACITI | Cape IT Initiative (CiTi)",
    type: "Enterprise IT & Service Desk Traineeship",
    category: "it-support",
    date: "Aug 2026 - Present",
    verifyUrl: "https://capeitinitiative.sharepoint.com/:u:/s/DemandAcademy1CPTAug2026/IQAaq5CV5svDQq4uuzi0HJo1AdeCPTYhL4XQsSQ8MpAiZGM?e=sgdgr6",
    pdfUrl: null,
    highlight: true,
    badgeText: "Active Trainee Portfolio",
    icon: "briefcase"
  },
  {
    title: "Technical Support Fundamentals",
    provider: "Google",
    type: "Google IT Support Certificate",
    category: "it-support",
    date: "Sep 2026",
    verifyUrl: "https://coursera.org/verify/MNLZJFS1XSKC",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Technical_Support_Fundamentals_ab873bb9.pdf",
    icon: "wrench"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    provider: "Google",
    type: "Google IT Support Certificate",
    category: "it-support",
    date: "Sep 2026",
    verifyUrl: "https://coursera.org/verify/5ANHBR8KHDVI",
    pdfUrl: "/assets/aistudio/Avumile_Tati_The_Bits_and_Bytes_of_Computer_Networking_f2c1f118.pdf",
    icon: "network"
  },
  {
    title: "Operating Systems and You: Becoming a Power User",
    provider: "Google",
    type: "Google IT Support Certificate",
    category: "it-support",
    date: "Oct 2026",
    verifyUrl: "https://coursera.org/verify/9AYMCI3CRBZ1",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Operating_Systems_and_You_Becoming_a_Power_3448f15b.pdf",
    icon: "cpu"
  },
  {
    title: "System Administration and IT Infrastructure Services",
    provider: "Google",
    type: "Google IT Support Certificate",
    category: "it-support",
    date: "Oct 2026",
    verifyUrl: "https://coursera.org/verify/422GGPFHD0I7",
    pdfUrl: "/assets/aistudio/Avumile_Tati_System_Administration_and_IT_Infrastructure_Services_ac90edcf.pdf",
    icon: "server"
  },
  {
    title: "IT Security: Defense against the digital dark arts",
    provider: "Google",
    type: "Google IT Support Certificate",
    category: "it-support",
    date: "Oct 2026",
    verifyUrl: "https://coursera.org/verify/6G5P5Y21CZPZ",
    pdfUrl: "/assets/aistudio/Avumile_Tati_IT_Security_Defense_against_the_digital_dark_arts_da4bab85.pdf",
    icon: "shield"
  },
  {
    title: "Generative AI with Large Language Models",
    provider: "DeepLearning.AI & AWS",
    type: "Advanced LLM Specialization",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/DM8I9UGPWT5K",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Generative_AI_with_Large_Language_Models_0e9f982e.pdf",
    highlight: true,
    icon: "sparkles"
  },
  {
    title: "Supervised Machine Learning: Regression & Classification",
    provider: "DeepLearning.AI & Stanford Online",
    type: "Machine Learning Specialization",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/7IABXT883SOI",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Supervised_Machine_Learning_Regression_and_Classification_98102b1e.pdf",
    icon: "binary"
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
    provider: "DeepLearning.AI & Stanford Online",
    type: "Machine Learning Specialization",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/KN6GIHBFIMUM",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Unsupervised_Learning__Recommenders_ecdbb770.pdf",
    icon: "git-branch"
  },
  {
    title: "Python for Data Science, AI & Development",
    provider: "IBM",
    type: "Data Science & AI",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/IOKZGWD3WR1C",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Python_for_Data_Science__AI___Development_06aa59d3.pdf",
    icon: "code"
  },
  {
    title: "Introduction to Artificial Intelligence (AI)",
    provider: "IBM",
    type: "AI Fundamentals",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/7CWPM5TPV0SC",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Introduction_to_Artificial_Intelligence__AI__cf9df78f.pdf",
    icon: "bot"
  },
  {
    title: "Generative AI: Prompt Engineering Basics",
    provider: "IBM",
    type: "Generative AI & Prompting",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/1SFSCNBVDYW5",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Generative_AI_Prompt_Engineering_Basics_c8554406.pdf",
    icon: "terminal"
  },
  {
    title: "Introduction to Generative AI",
    provider: "Google Cloud",
    type: "Cloud AI",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/Y8LJJNHJ5OGG",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Introduction_to_Generative_AI_5badd8db.pdf",
    icon: "cloud"
  },
  {
    title: "Introduction to AI",
    provider: "Google",
    type: "AI Essentials",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/O1TH4MGSTRXR",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Introduction_to_AI_84ec05e2.pdf",
    icon: "cpu"
  },
  {
    title: "Maximize Productivity With AI Tools",
    provider: "Google",
    type: "AI Essentials",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/WJVULCA5F338",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Maximize_Productivity_With_AI_Tools_3eb70694.pdf",
    icon: "zap"
  },
  {
    title: "Discover the Art of Prompting",
    provider: "Google",
    type: "AI Essentials",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/2ZXH5ZMBDXTU",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Discover_the_Art_of_Prompting_b02e7109.pdf",
    icon: "message-square"
  },
  {
    title: "Use AI Responsibly",
    provider: "Google",
    type: "AI Essentials",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/C7VUCIF950XB",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Use_AI_Responsibly_8e84508d.pdf",
    icon: "shield-check"
  },
  {
    title: "Stay Ahead of the AI Curve",
    provider: "Google",
    type: "AI Essentials",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/JAWK84XYZIZY",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Stay_Ahead_of_the_AI_Curve_3a21bc30.pdf",
    icon: "trending-up"
  },
  {
    title: "Accelerate Your Job Search with AI",
    provider: "Google",
    type: "AI Career Development",
    category: "ai-ml",
    date: "Oct 2026",
    verifyUrl: "https://coursera.org/verify/KSKBJTBZCLYC",
    pdfUrl: "/assets/aistudio/Avumile_Tati_Accelerate_Your_Job_Search_with_AI_ccbf469c.pdf",
    icon: "search"
  },
  {
    title: "AI For Everyone",
    provider: "DeepLearning.AI",
    type: "Foundational AI",
    category: "ai-ml",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/verify/BYLQASK2EXMG",
    pdfUrl: "/assets/aistudio/Avumile_Tati_AI_For_Everyone_4737c785.pdf",
    icon: "globe"
  },
  {
    title: "Coursera Verified Professional Badge",
    provider: "Coursera",
    type: "Verified Badge",
    category: "specializations",
    date: "Aug 2026",
    verifyUrl: "https://coursera.org/share/f6d0d0e7d4df787e46421964e8537fe8",
    pdfUrl: null,
    highlight: true,
    badgeText: "Official Badge",
    icon: "award"
  }
];

// Generate Filter Tabs and Cards
let certsHTML = `
                <!-- Certifications Block -->
                <div class="cert-bento bento-box" style="margin-top: 2rem;">
                    <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 15px; margin-bottom: 20px;">
                        <div>
                            <h3 class="bento-title" style="margin-bottom: 4px;"><i data-lucide="shield-check"></i> Certifications & Credentials (${certData.length})</h3>
                            <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0;">Verified certificates in IT Support, Infrastructure, Machine Learning, and Cloud AI</p>
                        </div>
                        <div class="cert-filter-bar" style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <button class="cert-filter-btn active" data-filter="all">All (${certData.length})</button>
                            <button class="cert-filter-btn" data-filter="it-support">IT Support & Infra (6)</button>
                            <button class="cert-filter-btn" data-filter="ai-ml">AI & ML (14)</button>
                            <button class="cert-filter-btn" data-filter="specializations">Specializations (2)</button>
                        </div>
                    </div>
                    
                    <div class="cert-grid" id="main-cert-grid">
`;

certData.forEach((cert, idx) => {
    const isSpecial = cert.highlight;
    const borderStyle = isSpecial ? 'border-color: var(--primary); box-shadow: 0 4px 20px rgba(37,99,235,0.15);' : '';
    
    certsHTML += `
                        <div class="card certification mini-cert cert-item" data-category="${cert.category}" style="${borderStyle}">
                            <i data-lucide="${cert.icon || 'award'}" class="cert-bg-icon"></i>
                            
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px; margin-bottom: 8px; position: relative; z-index: 2;">
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <span class="cert-provider-pill">${cert.provider}</span>
                                    ${cert.badgeText ? `<span class="cert-badge-pill">${cert.badgeText}</span>` : ''}
                                </div>
                                <span class="cert-date-text">${cert.date}</span>
                            </div>

                            <h4 style="margin: 6px 0 12px 0; font-size: 1rem; font-weight: 600; line-height: 1.4; position: relative; z-index: 2;">
                                ${cert.title}
                            </h4>
                            
                            <div class="cert-actions" style="margin-top: auto; display: flex; gap: 8px; flex-wrap: wrap; position: relative; z-index: 2;">
                                <a href="${cert.verifyUrl}" target="_blank" rel="noopener noreferrer" class="cert-action-btn verify-btn" title="Verify Online Credential">
                                    <i data-lucide="external-link" style="width: 14px; height: 14px;"></i> Verify
                                </a>
                                ${cert.pdfUrl ? `
                                <a href="${cert.pdfUrl}" target="_blank" rel="noopener noreferrer" class="cert-action-btn pdf-btn" title="View Official PDF Certificate">
                                    <i data-lucide="file-text" style="width: 14px; height: 14px;"></i> View PDF
                                </a>` : ''}
                            </div>
                        </div>`;
});

certsHTML += `
                    </div>
                </div>
`;

let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Replace stat count for certifications
html = html.replace(/<div class="stat-number highlight-purple" data-count="\d+" data-suffix="">\d+<\/div>/, '<div class="stat-number highlight-purple" data-count="22" data-suffix="+">0+</div>');

// Replace the cert-bento block
const certStart = html.indexOf('<!-- Certifications Block -->');
const certEnd = html.indexOf('<!-- Projects Section -->');

if (certStart !== -1 && certEnd !== -1) {
    // Find the closing divs before <!-- Projects Section -->
    const beforeCert = html.substring(0, certStart);
    // Find where the bento box container closes
    const certChunk = html.substring(certStart, certEnd);
    
    // We replace the cert-bento up to the end of its div
    const endDivIdx = html.indexOf('</section>', certStart);
    const afterSection = html.substring(endDivIdx);
    
    // Let's replace accurately:
    html = beforeCert + certsHTML + '                </div>\n            </div>\n        </div>\n    ' + afterSection;
    console.log("Replaced cert-bento section successfully.");
} else {
    console.log("Could not find bounds:", certStart, certEnd);
}

// Update Static CV Modal Certifications and Experience
const oldCvCert = `<div style="font-size: 14px; color: #444; display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">DeepLearning.AI Machine Learning</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">IBM Python for Data Science</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">Google Cloud Generative AI</span>
                        <span style="background: #f1f5f9; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0;">Samsung Innovation Campus AI</span>
                    </div>`;

const newCvCert = `<div style="font-size: 13px; color: #444; display: flex; flex-wrap: wrap; gap: 8px;">
                        <span style="background: #eff6ff; padding: 4px 10px; border-radius: 6px; border: 1px solid #bfdbfe; color: #1e40af; font-weight: 500;">Google IT Support Professional (Networking, OS, SysAdmin, Security, Tech Support)</span>
                        <span style="background: #eff6ff; padding: 4px 10px; border-radius: 6px; border: 1px solid #bfdbfe; color: #1e40af; font-weight: 500;">Google AI Essentials Specialization (5 Courses)</span>
                        <span style="background: #f5f3ff; padding: 4px 10px; border-radius: 6px; border: 1px solid #ddd6fe; color: #6b21a8; font-weight: 500;">CAPACITI Service Desk Academy Trainee (Demand Academy CPT)</span>
                        <span style="background: #f5f3ff; padding: 4px 10px; border-radius: 6px; border: 1px solid #ddd6fe; color: #6b21a8; font-weight: 500;">DeepLearning.AI & AWS Generative AI with LLMs</span>
                        <span style="background: #f5f3ff; padding: 4px 10px; border-radius: 6px; border: 1px solid #ddd6fe; color: #6b21a8; font-weight: 500;">DeepLearning.AI & Stanford Machine Learning (Supervised & Unsupervised)</span>
                        <span style="background: #f0fdf4; padding: 4px 10px; border-radius: 6px; border: 1px solid #bbf7d0; color: #166534; font-weight: 500;">IBM Python for Data Science & AI</span>
                        <span style="background: #f0fdf4; padding: 4px 10px; border-radius: 6px; border: 1px solid #bbf7d0; color: #166534; font-weight: 500;">Google Cloud Generative AI</span>
                        <span style="background: #f1f5f9; padding: 4px 10px; border-radius: 6px; border: 1px solid #e2e8f0; color: #334155; font-weight: 500;">Samsung Innovation Campus AI</span>
                    </div>`;

if (html.includes(oldCvCert)) {
    html = html.replace(oldCvCert, newCvCert);
    console.log("Updated CV modal certifications.");
}

// Update CAPACITI Experience in Static CV
const oldExp = `<li style="margin-bottom: 4px;">Service Desk Academy intensive training program.</li>`;
const newExp = `<li style="margin-bottom: 4px;">Service Desk Academy intensive training program in enterprise IT support, customer service, and incident management.</li>
                            <li style="margin-bottom: 4px;"><a href="https://capeitinitiative.sharepoint.com/:u:/s/DemandAcademy1CPTAug2026/IQAaq5CV5svDQq4uuzi0HJo1AdeCPTYhL4XQsSQ8MpAiZGM?e=sgdgr6" target="_blank" style="color: #2563eb; text-decoration: underline; font-weight: 500; display: inline-flex; align-items: center; gap: 4px;"><i class='bx bx-link-external'></i> View CiTi Demand Academy Trainee Record</a></li>`;

if (html.includes(oldExp)) {
    html = html.replace(oldExp, newExp);
    console.log("Updated CAPACITI experience in static CV.");
}

fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Finished updating index.html");
