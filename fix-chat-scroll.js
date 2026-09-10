const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldToggleListener = `
    chatToggle.addEventListener('click', () => {
        chatWindow.classList.remove('hidden');
        chatToggle.style.display = 'none';
        chatInput.focus();
    });`;

const newToggleListener = `
    chatToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default scrolling behavior
        chatWindow.classList.remove('hidden');
        chatToggle.style.display = 'none';
        // Delay focus slightly to allow animation to complete and prevent mobile keyboard from immediately pushing UI up awkwardly
        setTimeout(() => {
            chatInput.focus({ preventScroll: true });
        }, 300);
    });`;

if (js.includes(oldToggleListener)) {
    js = js.replace(oldToggleListener, newToggleListener);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated chat toggle JS logic to prevent scroll jumping.");
} else {
    console.log("Could not find exact old toggle listener string. Let me find and replace using regex.");
    const regex = /chatToggle\.addEventListener\('click', \(\) => \{\s*chatWindow\.classList\.remove\('hidden'\);\s*chatToggle\.style\.display = 'none';\s*chatInput\.focus\(\);\s*\}\);/;
    if (regex.test(js)) {
        js = js.replace(regex, newToggleListener);
        fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
        console.log("Regex replace successful.");
    } else {
        console.log("Regex replace failed.");
    }
}
