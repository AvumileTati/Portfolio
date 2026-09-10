const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldBMH = `"Bright Minds Hub": {
        description: "A safe haven for after-school learning. This platform supports a community-driven initiative providing academic support, nutrition, and holistic growth for learners.",
        images: ["Images/bright_minds_home.png", "Images/bright_minds_life.png", "Images/bright_minds_pillars.png", "Images/bright_minds_wishlist.png"],
        tags: ["Web Development", "Community", "Education"],
        liveDemo: "https://avumiletati.github.io/Bright-Minds-Hub/",
        sourceCode: "https://github.com/avumiletati"
    }`;
    
const newBMH = `"Bright Minds Hub": {
        description: "A safe haven for after-school learning. This platform supports a community-driven initiative providing academic support, nutrition, and holistic growth for learners.",
        images: ["Images/bright_minds_home.png", "Images/bright_minds_life.png", "Images/bright_minds_pillars.png", "Images/bright_minds_wishlist.png"],
        tags: ["Web Development", "Community", "Education"],
        liveDemo: "https://avumiletati.github.io/Bright-Minds-Hub/",
        sourceCode: "https://github.com/avumiletati",
        isWebApp: true
    }`;

if (js.includes(oldBMH)) {
    js = js.replace(oldBMH, newBMH);
}
fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
