const express = require('express');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve static files from the "Avumile Tati Portfolio" directory
const staticPath = path.join(__dirname, 'Avumile Tati Portfolio');
app.use(express.static(staticPath));

// Chat API endpoint
app.post('/api/chat', async (req, res) => {
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            return res.status(500).json({ error: 'GEMINI_API_KEY is not configured on the server.' });
        }

        const { history, message } = req.body;
        
        const ai = new GoogleGenAI({ 
            apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });
        
        // Map history to the SDK format
        const formattedHistory = (history || []).map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }));
        
        const chat = ai.chats.create({
            model: "gemini-3.5-flash",
            history: formattedHistory,
            config: {
                systemInstruction: "You are an AI assistant for Avumile Tati's portfolio website. You help visitors learn more about Avumile's skills, projects, experience, and background. Be polite, professional, and concise. Only answer questions related to Avumile, web development, or the portfolio.",
            }
        });

        const response = await chat.sendMessage({ message });
        res.json({ reply: response.text });
    } catch (error) {
        console.error('Chat API Error:', error);
        res.status(500).json({ error: 'Failed to generate response' });
    }
});


// EmailJS Config endpoint
app.get('/api/email-config', (req, res) => {
    res.json({
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        serviceId: process.env.EMAILJS_SERVICE_ID || '',
        templateId: process.env.EMAILJS_TEMPLATE_ID || ''
    });
});


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

        const prompt = `You are an expert resume writer and formatter. 
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
If a target job is provided: "${targetJob || 'General IT/Web Developer Role'}", strongly emphasize the skills and project bullet points that align best with that role in the summary and experience highlights.

Format Requirements:
- Return ONLY valid HTML code. No markdown code blocks like \`\`\`html or \`\`\`. Just the raw HTML string.
- DO NOT wrap the output in <html>, <head>, or <body> tags. Just return the inner container/markup.
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

        let htmlContent = response.text;
        // Strip markdown backticks if Gemini accidentally adds them
        if (htmlContent.startsWith('```html')) {
            htmlContent = htmlContent.replace(/^```html\n/, '').replace(/\n```$/, '');
        } else if (htmlContent.startsWith('```')) {
            htmlContent = htmlContent.replace(/^```\n/, '').replace(/\n```$/, '');
        }

        res.json({ html: htmlContent });
    } catch (error) {
        console.error('CV Generation Error:', error);
        res.status(500).json({ error: 'Failed to generate CV' });
    }
});

// Handle root or arbitrary routes by falling back to index.html


app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
