const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

// I need to add back the `isWebApp` flags to projectData
js = js.replace(/sourceCode: "https:\/\/github\.com\/avumiletati"\s*\}/g, 'sourceCode: "https://github.com/avumiletati",\n        isWebApp: true\n    }');
js = js.replace(/sourceCode: ""\s*\}/g, 'sourceCode: "",\n        isWebApp: true\n    }');
// Actually it's safer to specifically add it back.
const tString = `"TechnoResolve Desk": {
        description: "TechnoResolve Desk routes business requests with AI triage and gives admins, technicians and customers a dashboard built for their role. Implemented advanced AI ticket classification and role-based access control.",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"],
        tags: ["AI Triage", "Dashboard", "SaaS", "Full-Stack"],
        liveDemo: "https://technoresolve-desk.ai.studio/",
        sourceCode: ""
    }`;
js = js.replace(tString, tString.replace('sourceCode: ""', 'sourceCode: "",\n        isWebApp: true'));

const dString = `"Dynamic Duo Tech Solutions": {
        description: "Developed web pages, logo designs, and managed custom DNS configurations for ddtsolutions.co.za.",
        images: ["Images/ddt_home.png", "Images/ddt_about.png", "Images/ddt_services.png", "Images/ddt_contact.png"],
        tags: ["Web Development", "Microsoft 365", "Cybersecurity", "IT Support", "Next.js"],
        liveDemo: "https://ddtsolutions.co.za/",
        sourceCode: "https://github.com/avumiletati"
    }`;
js = js.replace(dString, dString.replace('"https://github.com/avumiletati"', '"https://github.com/avumiletati",\n        isWebApp: true'));

const bString = `"Bright Minds Hub": {
        description: "A safe haven for after-school learning. This platform supports a community-driven initiative providing academic support, nutrition, and holistic growth for learners.",
        images: ["Images/bright_minds_home.png", "Images/bright_minds_life.png", "Images/bright_minds_pillars.png", "Images/bright_minds_wishlist.png"],
        tags: ["Web Development", "Community", "Education"],
        liveDemo: "https://avumiletati.github.io/Bright-Minds-Hub/",
        sourceCode: "https://github.com/avumiletati"
    }`;
js = js.replace(bString, bString.replace('"https://github.com/avumiletati"', '"https://github.com/avumiletati",\n        isWebApp: true'));

const pString = `"PrePhones Official Store": {
        description: "Built the official Google Sites storefront for PrePhones — a Cape Town retailer for pre-owned smartphones. The site features a premium dark-themed hero section, responsive product carousels, and integrated contact channels to drive sales and customer engagement.",
        images: ["Images/prephones_home.png", "Images/prephones_products.png"],
        tags: ["Web Development", "Google Sites", "E-commerce"],
        liveDemo: "https://sites.google.com/view/prephones/home",
        sourceCode: "https://github.com/avumiletati"
    }`;
js = js.replace(pString, pString.replace('"https://github.com/avumiletati"', '"https://github.com/avumiletati",\n        isWebApp: true'));


const replaceStr = `                // Add iframe support for real-time live preview
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
                    liveIframe.style.minHeight = '350px'; 
                    mainImg.parentNode.style.minHeight = '350px';
                    
                    const prevBtn = document.getElementById('modal-prev-btn');
                    const nextBtn = document.getElementById('modal-next-btn');
                    if(prevBtn) prevBtn.style.zIndex = '20';
                    if(nextBtn) nextBtn.style.zIndex = '20';
                    liveIframe.style.zIndex = '5';
                } else {
                    if (liveIframe) {
                        liveIframe.style.display = 'none';
                        liveIframe.src = '';
                    }
                    mainImg.style.display = 'block';
                    mainImg.parentNode.style.minHeight = 'auto';
                    mainImg.src = data.images[0];
                }`;
                
const targetStr = `                mainImg.style.display = 'block';
                mainImg.parentNode.style.minHeight = 'auto';
                mainImg.src = data.images[0];`;
                
js = js.replace(targetStr, replaceStr);

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
console.log("Restored logic.");
