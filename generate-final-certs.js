const fs = require('fs');

const certData = [
  { url: "https://coursera.org/share/3cc47fdc0f4bbf0d01ae808ee644f937", provider: "DeepLearning.AI", title: "Generative AI with Large Language Models" },
  { url: "https://coursera.org/share/64193b210299a9f22124fb54822e007a", provider: "DeepLearning.AI", title: "Supervised Machine Learning: Regression and Classification" },
  { url: "https://coursera.org/share/27d32869d010b126c99a797f2bbc4d7b", provider: "DeepLearning.AI", title: "Unsupervised Learning, Recommenders, Reinforcement Learning" },
  { url: "https://coursera.org/share/293730726596e0704a8a36449ff30a80", provider: "DeepLearning.AI", title: "AI For Everyone" },
  { url: "https://coursera.org/share/56a1b7b7f8cd4bdfde9b9ddd84bfe54b", provider: "IBM", title: "Python for Data Science, AI & Development" },
  { url: "https://coursera.org/share/0314cc3231b9c8c397ad23037ffd4429", provider: "IBM", title: "Introduction to Artificial Intelligence (AI)" },
  { url: "https://coursera.org/share/2c7bf04363489c2d0c814f87a4c5cda5", provider: "IBM", title: "Generative AI: Prompt Engineering Basics" },
  { url: "https://coursera.org/share/bcf40ed00bdae6c4509ec733c423cc1f", provider: "Google Cloud", title: "Introduction to Generative AI" },
  { url: "https://coursera.org/share/4ff72d348a36555defa3361bbb9decdd", provider: "Google", title: "Stay Ahead of the AI Curve" },
  { url: "https://coursera.org/share/cc67674155f61cccf599bf5543812949", provider: "Google", title: "Use AI Responsibly" },
  { url: "https://coursera.org/share/ff160e6db9ca7ad9f6fa2bccdfcce097", provider: "Google", title: "Maximize Productivity With AI Tools" },
  { url: "https://coursera.org/share/2d96d69c41a1938e2c1ddc08534360b3", provider: "Google", title: "Introduction to AI" }
];

let newHTML = '<div class="cert-grid">\n';

certData.forEach(cert => {
    newHTML += `
                        <a href="${cert.url}" target="_blank" class="card certification mini-cert" style="text-decoration: none;">
                            <i data-lucide="external-link" class="cert-bg-icon"></i>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <h4 style="padding-right: 15px;">${cert.title}</h4>
                                <i data-lucide="award" style="color: var(--primary); width: 20px; height: 20px; flex-shrink: 0;"></i>
                            </div>
                            <p class="date" style="color: var(--primary); font-weight: 500;">${cert.provider}</p>
                        </a>`;
});

// Add the badge
newHTML += `
                        <a href="https://coursera.org/share/f6d0d0e7d4df787e46421964e8537fe8" target="_blank" class="card certification mini-cert badge-card" style="text-decoration: none; border-color: var(--primary); background: var(--bg-card); box-shadow: 0 4px 15px rgba(37,99,235,0.1);">
                            <i data-lucide="external-link" class="cert-bg-icon"></i>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <h4 style="color: var(--primary); padding-right: 15px; font-weight: 700;">Professional Certificate Badge</h4>
                                <i data-lucide="shield-check" style="color: var(--primary); width: 20px; height: 20px; flex-shrink: 0;"></i>
                            </div>
                            <p class="date" style="color: var(--primary); font-weight: 600;">View Official Badge &rarr;</p>
                        </a>`;

newHTML += '\n                    </div>';

let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// Replace the entire <div class="cert-grid"> block with our new perfectly mapped one
const gridStart = html.indexOf('<div class="cert-grid">');
const certBoxEnd = html.indexOf('</div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Projects Section -->');

if (gridStart !== -1 && certBoxEnd !== -1) {
    const beforeGrid = html.substring(0, gridStart);
    const afterGrid = html.substring(certBoxEnd);
    
    html = beforeGrid + newHTML + '\n                ' + afterGrid;
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Successfully replaced cert grid with properly mapped URLs and titles.");
} else {
    console.log("Could not find grid bounds.");
}
