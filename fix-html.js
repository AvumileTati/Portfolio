const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const navStart = html.indexOf('<nav class="nav" id="nav-links">');
const navEnd = html.indexOf('</nav>', navStart);

if (navStart !== -1 && navEnd !== -1) {
    const oldNav = html.substring(navStart, navEnd + '</nav>'.length);
    const newNav = `<nav class="nav" id="nav-links">
                <a class="active" href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#credentials">Credentials</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>`;
    html = html.replace(oldNav, newNav);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log("Updated HTML nav");
} else {
    console.log("Nav not found");
}

