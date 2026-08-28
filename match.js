const fs = require('fs');
const html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// A simple utility is better, or I can just use a real DOM parser if needed.
// However, in node, we don't have DOMParser. I can install jsdom.
