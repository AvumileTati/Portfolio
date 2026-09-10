const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

// The issue on mobile is that the chat window is set to position: fixed, 
// width 100%, height 100%, taking up the whole screen, which is standard. 
// BUT maybe it's missing a z-index for the full screen or scrolling is messed up?
// "it goes to the top" implies the page scrolls to top when it's opened, 
// likely because the chatToggle button might be an anchor tag? 
// Let's check index.html for chatToggle.

let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');
const searchHTML = 'id="chat-toggle"';
const index = html.indexOf(searchHTML);
if (index !== -1) {
    console.log("chat-toggle HTML snippet:", html.substring(index - 50, index + 50));
}

// In JS, chatToggle is a button. "button" elements inside a form trigger submit, but it's outside.
// Wait, "goes to the top" - if it's position: absolute inside a container that is fixed at bottom 20px,
// and then on mobile it becomes position: fixed height 100% bottom 0...
