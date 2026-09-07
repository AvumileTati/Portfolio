const fs = require('fs');
let serverJS = fs.readFileSync('server.js', 'utf8');

const newRoute = `
// EmailJS Config endpoint
app.get('/api/email-config', (req, res) => {
    res.json({
        publicKey: process.env.EMAILJS_PUBLIC_KEY || '',
        serviceId: process.env.EMAILJS_SERVICE_ID || '',
        templateId: process.env.EMAILJS_TEMPLATE_ID || ''
    });
});

// Handle root or arbitrary routes by falling back to index.html
`;

serverJS = serverJS.replace('// Handle root or arbitrary routes by falling back to index.html', newRoute);
fs.writeFileSync('server.js', serverJS);
console.log('server.js patched');
