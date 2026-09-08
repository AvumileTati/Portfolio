const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
const dom = new JSDOM(html);

const el = dom.window.document.querySelector("section#contact:nth-of-type(6) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1)");
if (el) {
  console.log("Element found:", el.className);
} else {
  console.log("Element not found");
}
