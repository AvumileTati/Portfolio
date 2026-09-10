const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetStr = `                const updateMainImage = (index) => {
                    document.getElementById('modal-main-img').src = data.images[index];
                    document.querySelectorAll('.thumbnail-grid img').forEach((t, i) => {
                        t.classList.toggle('active', i === index);
                    });
                };`;

const replaceStr = `                const updateMainImage = (index) => {
                    const mainImg = document.getElementById('modal-main-img');
                    mainImg.src = data.images[index];
                    document.querySelectorAll('.thumbnail-grid img').forEach((t, i) => {
                        t.classList.toggle('active', i === index);
                    });
                    
                    const liveIframe = document.getElementById('modal-live-iframe');
                    if (data.isWebApp && data.liveDemo && liveIframe) {
                        if (index === 0) {
                            mainImg.style.display = 'none';
                            liveIframe.style.display = 'block';
                            liveIframe.style.minHeight = '350px'; 
                            mainImg.parentNode.style.minHeight = '350px';
                        } else {
                            mainImg.style.display = 'block';
                            liveIframe.style.display = 'none';
                            mainImg.parentNode.style.minHeight = 'auto';
                        }
                    }
                };`;

if (js.includes(targetStr)) {
    js = js.replace(targetStr, replaceStr);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated updateMainImage to toggle iframe visibility.");
} else {
    console.log("Could not find updateMainImage.");
}
