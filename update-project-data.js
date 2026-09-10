const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

// First let's update TechnoResolve Desk in projectData
const oldTechno = `"TechnoResolve Desk": {
        description: "Programmed the web interface and implemented local storage data persistence.",
        images: ["Images/logo.png"],
        tags: ["Web Interface", "Local Storage", "Data Persistence"],
        liveDemo: "",
        sourceCode: ""
    },`;

const newTechno = `"TechnoResolve Desk": {
        description: "TechnoResolve Desk routes business requests with AI triage and gives admins, technicians and customers a dashboard built for their role. Implemented advanced AI ticket classification and role-based access control.",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"],
        tags: ["AI Triage", "Dashboard", "SaaS", "Full-Stack"],
        liveDemo: "https://technoresolve-desk.ai.studio/",
        sourceCode: "",
        isWebApp: true
    },`;

if(js.includes(oldTechno)) {
    js = js.replace(oldTechno, newTechno);
    console.log("Updated Techno in script.js");
} else {
    console.log("Could not find Techno string.");
}

const oldDuo = `"Dynamic Duo Tech Solutions": {
        description: "Developed web pages, logo designs, and managed custom DNS configurations for ddtsolutions.co.za.",
        images: ["Images/ddt_home.png", "Images/ddt_about.png", "Images/ddt_services.png", "Images/ddt_contact.png"],
        tags: ["Web Development", "Microsoft 365", "Cybersecurity", "IT Support", "Next.js"],
        liveDemo: "https://ddtsolutions.co.za/",
        sourceCode: "https://github.com/avumiletati"
    },`;
    
const newDuo = `"Dynamic Duo Tech Solutions": {
        description: "Developed web pages, logo designs, and managed custom DNS configurations for ddtsolutions.co.za.",
        images: ["Images/ddt_home.png", "Images/ddt_about.png", "Images/ddt_services.png", "Images/ddt_contact.png"],
        tags: ["Web Development", "Microsoft 365", "Cybersecurity", "IT Support", "Next.js"],
        liveDemo: "https://ddtsolutions.co.za/",
        sourceCode: "https://github.com/avumiletati",
        isWebApp: true
    },`;

if(js.includes(oldDuo)) {
    js = js.replace(oldDuo, newDuo);
}

fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
