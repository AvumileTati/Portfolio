const { GoogleGenAI } = require('@google/genai');

exports.handler = async (event, context) => {
    // Only allow POST requests
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
        const { history, message } = body;

        const ai = new GoogleGenAI({
            apiKey,
            httpOptions: {
                headers: {
                    'User-Agent': 'aistudio-build',
                }
            }
        });

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

        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reply: response.text })
        };
    } catch (error) {
        console.error('Chat API Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to generate response' })
        };
    }
};
