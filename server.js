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

// Handle root or arbitrary routes by falling back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
