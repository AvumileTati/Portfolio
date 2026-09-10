const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetStr = `                if (data.isWebApp && data.liveDemo) {
                    mainImg.style.display = 'none';
                    liveIframe.src = data.liveDemo;
                    liveIframe.style.display = 'block';
                } else {
                    liveIframe.style.display = 'none';
                    liveIframe.src = '';
                    mainImg.style.display = 'block';
                    mainImg.src = data.images[0];
                }`;

const replaceStr = `                if (data.isWebApp && data.liveDemo) {
                    // Hide the image visually but keep it in flow to maintain container height if needed, 
                    // or just set an explicit height on the container
                    mainImg.style.display = 'none';
                    liveIframe.src = data.liveDemo;
                    liveIframe.style.display = 'block';
                    liveIframe.style.minHeight = '350px'; // Force a height since the img is gone
                    mainImg.parentNode.style.minHeight = '350px';
                    
                    // Ensure carousel buttons stay on top
                    const prevBtn = document.getElementById('modal-prev-btn');
                    const nextBtn = document.getElementById('modal-next-btn');
                    if(prevBtn) prevBtn.style.zIndex = '20';
                    if(nextBtn) nextBtn.style.zIndex = '20';
                    liveIframe.style.zIndex = '5';
                } else {
                    liveIframe.style.display = 'none';
                    liveIframe.src = '';
                    mainImg.style.display = 'block';
                    mainImg.parentNode.style.minHeight = 'auto';
                    mainImg.src = data.images[0];
                }`;

if (js.includes(targetStr)) {
    js = js.replace(targetStr, replaceStr);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Fixed modal iframe height collapse issue.");
} else {
    console.log("Could not find the modal iframe logic to replace.");
}
