const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

// The issue in the screenshot is that the white paper background ends abruptly, but the text continues over the dark background.
// This happens when a container doesn't clear its floated/overflowing children, or when a fixed height is accidentally applied.
// Let's remove the flex-related height restrictions from the document itself and ensure the paper stretches correctly.

const oldDoc = `<div id="static-cv-document" style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 100%; margin: 0 auto; padding: 40px; background: #fff; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">`;
const newDoc = `<div id="static-cv-document" style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; width: 100%; margin: 0 auto; padding: 40px; background: #fff; text-align: left; box-shadow: 0 4px 15px rgba(0,0,0,0.1); min-height: min-content; display: flow-root;">`;

if(html.includes(oldDoc)) {
    html = html.replace(oldDoc, newDoc);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated document wrapper inline style.");
}
