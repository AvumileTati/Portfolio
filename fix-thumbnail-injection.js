const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetStr = `                data.images.forEach((img, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = img;
                    if (index === 0) thumb.classList.add('active');
                    thumb.onclick = (e) => {
                        e.stopPropagation();
                        currentImageIndex = index;
                        updateMainImage(currentImageIndex);
                    };
                    thumbContainer.appendChild(thumb);
                });`;

const replaceStr = `                data.images.forEach((img, index) => {
                    const thumbWrapper = document.createElement('div');
                    thumbWrapper.style.position = 'relative';
                    thumbWrapper.style.display = 'inline-block';
                    
                    const thumb = document.createElement('img');
                    thumb.src = img;
                    if (index === 0) thumb.classList.add('active');
                    thumb.onclick = (e) => {
                        e.stopPropagation();
                        currentImageIndex = index;
                        updateMainImage(currentImageIndex);
                    };
                    
                    if (index === 0 && data.isWebApp && data.liveDemo) {
                        const indicator = document.createElement('div');
                        indicator.className = 'live-thumb-indicator';
                        indicator.innerText = 'LIVE';
                        thumbWrapper.appendChild(indicator);
                    }
                    
                    thumbWrapper.appendChild(thumb);
                    thumbContainer.appendChild(thumbWrapper);
                });`;

if (js.includes(targetStr)) {
    js = js.replace(targetStr, replaceStr);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Updated thumbnail injection.");
} else {
    console.log("Could not find thumbnail loop.");
}
