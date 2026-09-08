const fs = require('fs');
let serverJS = fs.readFileSync('server.js', 'utf8');

const cvRoute = `
// CV Generation endpoint
app.post('/api/generate-cv', async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not configured.' });
        }

        const { targetJob } = req.body;

        const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });

        const prompt = \`You are an expert resume writer and formatter. 
I need a professional, clean HTML resume for Avumile Tati.

User Profile:
- Name: Avumile Tati
- Role: IT Support & Service Desk Technician, aspiring Web Developer
- Location: Cape Town, South Africa
- Email: tatiavumile@gmail.com
- LinkedIn: https://www.linkedin.com/in/avumile-tati/
- GitHub: https://github.com/avumiletati

Core Skills:
- Web Development: PHP, MySQL, HTML, CSS, JavaScript, Node.js
- Tools & Environments: Git, GitHub, Netlify, VS Code, PowerShell, Windows OS Customization
- Soft Skills: Troubleshooting, Customer Service, Team Collaboration

Projects:
1. Bright Minds Hub: Community-driven after-school platform providing educational resources.
2. Dynamic Duo Tech Solutions: Managed IT & Cybersecurity showcase portfolio.
3. PrePhones Official Store: Modern E-commerce mobile experience.
4. SRD Registration System: SASSA Grant UI/UX mobile prototype.

Task:
Generate a complete CV tailored to this profile. 
If a target job is provided: "\${targetJob || 'General IT/Web Developer Role'}", strongly emphasize the skills and project bullet points that align best with that role in the summary and experience highlights.

Format Requirements:
- Return ONLY valid HTML code. No markdown code blocks like \\\`\\\`\\\`html or \\\`\\\`\\\`. Just the raw HTML string.
- DO NOT wrap the output in <html>, <head>, or <body> tags. Just return the inner container/markup.
- Use semantic tags (<h1> for name, <h3> for sections, <ul> for lists).
- Add inline CSS styles to make it look like a highly professional, modern, clean, printable resume (black text on white background, standard fonts like Arial or Helvetica, clean margins, subtle borders under headers).
- Ensure it is visually ready to be converted directly to a PDF.\`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7
            }
        });

        let htmlContent = response.text;
        // Strip markdown backticks if Gemini accidentally adds them
        if (htmlContent.startsWith('\`\`\`html')) {
            htmlContent = htmlContent.replace(/^\`\`\`html\\n/, '').replace(/\\n\`\`\`$/, '');
        } else if (htmlContent.startsWith('\`\`\`')) {
            htmlContent = htmlContent.replace(/^\`\`\`\\n/, '').replace(/\\n\`\`\`$/, '');
        }

        res.json({ html: htmlContent });
    } catch (error) {
        console.error('CV Generation Error:', error);
        res.status(500).json({ error: 'Failed to generate CV' });
    }
});

// Handle root or arbitrary routes by falling back to index.html
`;

if (!serverJS.includes('/api/generate-cv')) {
    serverJS = serverJS.replace('// Handle root or arbitrary routes by falling back to index.html', cvRoute);
    fs.writeFileSync('server.js', serverJS);
    console.log('server.js patched with /api/generate-cv');
} else {
    console.log('server.js already has the route');
}
