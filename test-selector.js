const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
const dom = new JSDOM(html);

const el = dom.window.document.querySelector("section:nth-of-type(3)");
if (el) {
  console.log("Element found:", el.outerHTML.substring(0, 500));
  console.log("Classes:", el.className);
  console.log("ID:", el.id);
} else {
  console.log("Element not found");
}
