const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const insertionPoint = '<div class="credentials-bento">';
const newHTML = `<div class="credentials-bento">
                <!-- Featured Bootcamp Badge Block -->
                <div class="bootcamp-bento bento-box">
                    <h3 class="bento-title"><i data-lucide="award"></i> Featured Bootcamp</h3>
                    <div class="bootcamp-content">
                        <div class="bootcamp-image-col">
                            <img src="ae3032e4db914b6f8bf4159fb808fff7.png" alt="Artificial Intelligence Bootcamp Badge" class="bootcamp-badge-img">
                        </div>
                        <div class="bootcamp-details">
                            <h4 class="bootcamp-title">Artificial Intelligence Bootcamp (AI)</h4>
                            <p class="bootcamp-issuer">CAPACITI powered by Coursera</p>
                            <div class="bootcamp-meta">
                                <span><i data-lucide="calendar" style="width: 14px; height: 14px;"></i> Aug 2026</span>
                                <span><i data-lucide="check-circle" style="width: 14px; height: 14px;"></i> Verified Learner</span>
                                <span><i data-lucide="fingerprint" style="width: 14px; height: 14px;"></i> ID: AODJ3WjFSYGgyd1oxSmB_A</span>
                            </div>
                            <p class="bootcamp-desc">A fast-paced program covering AI fundamentals, machine learning, deep learning, and NLP. Built hands-on projects to develop and deploy AI models.</p>
                            <div class="bootcamp-skills">
                                <span class="badge">Web Scraping</span>
                                <span class="badge">Unsupervised Learning</span>
                                <span class="badge">Supervised Learning</span>
                                <span class="badge">Scikit Learn</span>
                                <span class="badge">Scalability</span>
                                <span class="badge">Robotics</span>
                                <span class="badge">Risk Mitigation</span>
                                <span class="badge">Restful API</span>
                                <span class="badge">Responsible AI</span>
                                <span class="badge">Reinforcement Learning</span>
                            </div>
                            <a href="https://www.coursera.org/account/accomplishments/verify/AODJ3WjFSYGgyd1oxSmB_A" target="_blank" rel="noopener noreferrer" class="btn-primary-sm mt-3" style="margin-top: 15px; display: inline-flex;">Verify Credential ↗</a>
                        </div>
                    </div>
                </div>`;

if (html.includes(insertionPoint)) {
    html = html.replace(insertionPoint, newHTML);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Success");
} else {
    console.log("Failed to find insertion point");
}
