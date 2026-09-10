const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const modalLogicRegex = /if \(data\) \{\s*document\.getElementById\('modal-title'\)\.innerText = title;[\s\S]*?document\.getElementById\('modal-main-img'\)\.src = data\.images\[0\];/;

const newLogic = `if (data) {
                document.getElementById('modal-title').innerText = title;
                document.getElementById('modal-description').innerText = data.description;
                
                const mainImg = document.getElementById('modal-main-img');
                
                // Add iframe support for real-time live preview
                let liveIframe = document.getElementById('modal-live-iframe');
                if (!liveIframe) {
                    liveIframe = document.createElement('iframe');
                    liveIframe.id = 'modal-live-iframe';
                    liveIframe.style.width = '100%';
                    liveIframe.style.height = '100%';
                    liveIframe.style.border = 'none';
                    liveIframe.style.borderRadius = '12px';
                    liveIframe.style.display = 'none';
                    liveIframe.style.position = 'absolute';
                    liveIframe.style.top = '0';
                    liveIframe.style.left = '0';
                    liveIframe.style.background = '#fff';
                    // Insert after mainImg
                    mainImg.parentNode.style.position = 'relative';
                    mainImg.parentNode.appendChild(liveIframe);
                }

                if (data.isWebApp && data.liveDemo) {
                    mainImg.style.display = 'none';
                    liveIframe.src = data.liveDemo;
                    liveIframe.style.display = 'block';
                } else {
                    liveIframe.style.display = 'none';
                    liveIframe.src = '';
                    mainImg.style.display = 'block';
                    mainImg.src = data.images[0];
                }`;

if(js.match(modalLogicRegex)) {
    js = js.replace(modalLogicRegex, newLogic);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated modal logic for live iframe preview");
} else {
    console.log("Could not match modalLogicRegex");
}
