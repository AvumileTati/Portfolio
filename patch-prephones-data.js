const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const oldPre = `"PrePhones Official Store": {
        description: "Built the official Google Sites storefront for PrePhones — a Cape Town retailer for pre-owned smartphones. The site features a premium dark-themed hero section, responsive product carousels, and integrated contact channels to drive sales and customer engagement.",
        images: ["Images/prephones_home.png", "Images/prephones_products.png"],
        tags: ["Web Development", "Google Sites", "E-commerce"],
        liveDemo: "https://sites.google.com/view/prephones/home",
        sourceCode: "https://github.com/avumiletati"
    },`;
    
const newPre = `"PrePhones Official Store": {
        description: "Built the official Google Sites storefront for PrePhones — a Cape Town retailer for pre-owned smartphones. The site features a premium dark-themed hero section, responsive product carousels, and integrated contact channels to drive sales and customer engagement.",
        images: ["Images/prephones_home.png", "Images/prephones_products.png"],
        tags: ["Web Development", "Google Sites", "E-commerce"],
        liveDemo: "https://sites.google.com/view/prephones/home",
        sourceCode: "https://github.com/avumiletati",
        isWebApp: true
    },`;

if (js.includes(oldPre)) {
    js = js.replace(oldPre, newPre);
}
fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
