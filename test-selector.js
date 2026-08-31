const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
const dom = new JSDOM(html);
const el = dom.window.document.querySelector("nav#nav-links > a:nth-of-type(6)");
if (el) {
  console.log("Element found:", el.outerHTML);
} else {
  console.log("Element not found");
}
