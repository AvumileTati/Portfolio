const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const newCSS = `
/* Fixed Skills Section Styling since it is now its own distinct section */
.skills-section {
    padding-top: 40px; /* Gives it breathing room as its own section */
}

.skills-section h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
}

.skills-subtitle {
    text-align: center;
    color: var(--text-light);
    max-width: 600px;
    margin: 0 auto 2rem auto;
}
`;
fs.appendFileSync('Avumile Tati Portfolio/styles.css', newCSS);
console.log("Added skills section CSS fixes");
