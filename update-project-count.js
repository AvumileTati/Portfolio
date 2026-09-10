const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// The stat-item has <div class="stat-number highlight-blue" data-count="6" data-suffix="">0</div>
// Let's increment it to 7.
if(html.includes('data-count="6" data-suffix="">0</div>\n                        <div class="stat-label">Projects</div>')) {
    html = html.replace('data-count="6" data-suffix="">0</div>\n                        <div class="stat-label">Projects</div>', 'data-count="7" data-suffix="">0</div>\n                        <div class="stat-label">Projects</div>');
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated project count to 7");
}
