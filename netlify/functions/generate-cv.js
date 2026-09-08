const { GoogleGenAI } = require('@google/genai');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return {
                statusCode: 500,
                body: JSON.stringify({ error: 'GEMINI_API_KEY is not configured on the server.' })
            };
        }

        const body = JSON.parse(event.body);
        const { targetJob } = body;

        const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });

        const prompt = `You are an expert resume writer and formatter. 
I need a professional, clean HTML resume for Avumile Tati.

User Profile:
- Name: Avumile Tati
- Role: IT Support & Service Desk Technician, aspiring Full Stack Developer
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

Experience & Education:
(Make up realistic but generalized placeholder bullet points for an IT Support Technician / ICT Graduate if exact details aren't provided, but keep it professional). 

Task:
Generate a complete CV tailored to this profile. 
If a target job is provided: "${targetJob || 'General IT/Web Developer Role'}", strongly emphasize the skills and project bullet points that align best with that role in the summary and experience highlights.

Format Requirements:
- Return ONLY valid HTML code. No markdown code blocks like \`\`\`html.
- DO NOT wrap the output in <html>, <head>, or <body> tags. Just return the inner container.
- Use semantic tags (<h1> for name, <h3> for sections, <ul> for lists).
- Add inline CSS styles to make it look like a highly professional, modern, clean, printable resume (black text on white background, standard fonts like Arial or Helvetica, clean margins, subtle borders under headers).
- Ensure it is visually ready to be converted directly to a PDF.`;

        const response = await ai.models.generateContent({
            model: 'gemini-3.5-flash',
            contents: prompt,
            config: {
                temperature: 0.7
            }
        });

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ html: response.text })
        };
    } catch (error) {
        console.error('CV Generation Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate CV' })
        };
    }
};
