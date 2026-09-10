const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// I can see the issue! The skills-section div is NESTED INSIDE the about section.
// The </section> for about is at the very bottom, AFTER skills.
// This is why the intersection observer is keeping the "About" link highlighted when looking at Skills!

const oldStr = `
                    <div class="stat-item">
                        <div class="stat-number highlight-blue" data-count="6" data-suffix="">0</div>
                        <div class="stat-label">Projects</div>
                    </div>
                </div>

                <div class="skills-section reveal" id="skills">
`;

const newStr = `
                    <div class="stat-item">
                        <div class="stat-number highlight-blue" data-count="6" data-suffix="">0</div>
                        <div class="stat-label">Projects</div>
                    </div>
                </div>
            </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="skills-section reveal">
        <div class="container">
`;

html = html.replace(oldStr, newStr);

// I also need to close the new container div and the new section at the bottom where the old section closed
const oldEnd = `                        </div>
                    </div>
                </div>
    </section>

    <!-- Experience Section -->`;

const newEnd = `                        </div>
                    </div>
                </div>
        </div>
    </section>

    <!-- Experience Section -->`;

html = html.replace(oldEnd, newEnd);
fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
console.log("Fixed HTML section nesting");
