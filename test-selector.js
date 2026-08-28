const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
const dom = new JSDOM(html);
const elements = dom.window.document.querySelectorAll(".grid-column > div:nth-of-type(1) > div:nth-of-type(1)");
elements.forEach(el => console.log(el.className));
