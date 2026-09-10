const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const urls = [
"https://coursera.org/share/3cc47fdc0f4bbf0d01ae808ee644f937",
"https://coursera.org/share/27d32869d010b126c99a797f2bbc4d7b",
"https://coursera.org/share/64193b210299a9f22124fb54822e007a",
"https://coursera.org/share/bcf40ed00bdae6c4509ec733c423cc1f",
"https://coursera.org/share/56a1b7b7f8cd4bdfde9b9ddd84bfe54b",
"https://coursera.org/share/0314cc3231b9c8c397ad23037ffd4429",
"https://coursera.org/share/293730726596e0704a8a36449ff30a80",
"https://coursera.org/share/2c7bf04363489c2d0c814f87a4c5cda5",
"https://coursera.org/share/4ff72d348a36555defa3361bbb9decdd",
"https://coursera.org/share/cc67674155f61cccf599bf5543812949",
"https://coursera.org/share/ff160e6db9ca7ad9f6fa2bccdfcce097",
"https://coursera.org/share/2d96d69c41a1938e2c1ddc08534360b3",
];

const badgeUrl = "https://coursera.org/share/f6d0d0e7d4df787e46421964e8537fe8";

let newHTML = '';

for(let i=0; i<urls.length; i++) {
    newHTML += `
                        <a href="\${urls[i]}" target="_blank" class="card certification mini-cert" style="display: block; text-decoration: none;">
                            <i data-lucide="external-link" class="cert-bg-icon"></i>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <h4>Coursera Certification</h4>
                                <i data-lucide="award" style="color: var(--primary); width: 20px; height: 20px;"></i>
                            </div>
                            <p class="date" style="color: var(--primary); font-weight: 500;">View Credential &rarr;</p>
                        </a>`;
}

// Add the badge as a special one
newHTML += `
                        <a href="\${badgeUrl}" target="_blank" class="card certification mini-cert" style="display: block; text-decoration: none; border-color: var(--primary);">
                            <i data-lucide="external-link" class="cert-bg-icon"></i>
                            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                                <h4 style="color: var(--primary);">Coursera Badge</h4>
                                <i data-lucide="shield-check" style="color: var(--primary); width: 20px; height: 20px;"></i>
                            </div>
                            <p class="date" style="color: var(--primary); font-weight: 500;">View Credential &rarr;</p>
                        </a>`;

// Find where the cert-grid ends and insert the new ones
const splitStr = '</div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Projects Section -->';

if (html.includes(splitStr)) {
    // The previous certs end just before the last </div> of cert-grid
    // Let's replace the end of cert-grid with newHTML + the end of cert-grid
    const endOfCertGrid = '                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Projects Section -->';
    if(html.includes(endOfCertGrid)) {
        html = html.replace(endOfCertGrid, '                        </div>\n' + newHTML + '\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n\n    <!-- Projects Section -->');
        fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
        console.log("Added new Coursera certs to grid.");
    } else {
        console.log("Couldn't find the exact end of cert grid pattern.");
    }
} else {
    console.log("Couldn't find splitStr");
}
