const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetStr = `if (!cvModal || !openCvBtn) {
        console.error("Missing CV elements:", { cvModal, openCvBtn });
        return;
    }`;

const replaceStr = `if (!cvModal || !openCvBtn) {
        // Elements only exist on index.html, quiet return for projects.html
        return;
    }`;

if (js.includes(targetStr)) {
    js = js.replace(targetStr, replaceStr);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Fixed the missing CV elements error.");
} else {
    console.log("Could not find the target string.");
}
