const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetStr = `                    liveIframe.style.width = '100%';
                    liveIframe.style.height = '100%';
                    liveIframe.style.border = 'none';
                    liveIframe.style.borderRadius = '12px';
                    liveIframe.style.display = 'none';
                    liveIframe.style.position = 'absolute';`;

const replaceStr = `                    liveIframe.style.width = '300%';
                    liveIframe.style.height = '300%';
                    liveIframe.style.border = 'none';
                    liveIframe.style.borderRadius = '36px'; // 12px * 3 to account for scale
                    liveIframe.style.transform = 'scale(0.333333)';
                    liveIframe.style.transformOrigin = '0 0';
                    liveIframe.style.display = 'none';
                    liveIframe.style.position = 'absolute';`;

if (js.includes(targetStr)) {
    js = js.replace(targetStr, replaceStr);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated modal iframe scale.");
} else {
    console.log("Could not find target string.");
}
