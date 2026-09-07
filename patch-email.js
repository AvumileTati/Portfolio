const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

// Replace Top Block
const oldTopBlock = `// Initialize EmailJS with Public Key
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("l_3AEBZ3w63Er-f-G");
    }
})();`;

const newTopBlock = `// Global variable to hold EmailJS config
let emailJSConfig = { publicKey: '', serviceId: '', templateId: '' };

// Fetch EmailJS Config on load
(async function initEmailJSConfig() {
    try {
        const response = await fetch('/api/email-config');
        if (response.ok) {
            emailJSConfig = await response.json();
            if (typeof emailjs !== 'undefined' && emailJSConfig.publicKey) {
                emailjs.init(emailJSConfig.publicKey);
                console.log("EmailJS initialized with dynamic public key.");
            } else {
                console.warn("EmailJS SDK not found or Public Key is missing.");
            }
        }
    } catch (err) {
        console.error("Failed to fetch EmailJS config:", err);
    }
})();`;

js = js.replace(oldTopBlock, newTopBlock);

// Replace Form Submit logic
const targetLogic = `            if (typeof emailjs === 'undefined') {
                showStatus('Email service is currently unavailable. Please email me directly at tatiavumile@gmail.com.', false);
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                return;
            }

            // Use your Service ID 
            // Most common is "service_default" or "gmail_service"
            const serviceID = "service_074c36z";
            const templateID = "template_sxyyixd";

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    showStatus('Message sent successfully! I will get back to you soon.', true);
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    const errorMsg = error.text || 'Error connecting to service. Check Service ID.';
                    showStatus(\`Oops! \${errorMsg}\`, false);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });`;

const newLogic = `            if (typeof emailjs === 'undefined') {
                showStatus('Email service is currently unavailable. Please email me directly at tatiavumile@gmail.com.', false);
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                return;
            }

            // Add detailed validation & error logging for Environment Variables
            if (!emailJSConfig.serviceId || !emailJSConfig.templateId || !emailJSConfig.publicKey) {
                const missing = [];
                if (!emailJSConfig.serviceId) missing.push('EMAILJS_SERVICE_ID');
                if (!emailJSConfig.templateId) missing.push('EMAILJS_TEMPLATE_ID');
                if (!emailJSConfig.publicKey) missing.push('EMAILJS_PUBLIC_KEY');
                
                const errorLog = \`EmailJS Configuration Error: Missing environment variables: \${missing.join(', ')}\`;
                console.error(errorLog);
                console.warn('To fix this: Add the missing environment variables to your deployment environment (e.g. Netlify UI).');
                
                showStatus(\`Config Error: Missing \${missing.join(', ')}\`, false);
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                return;
            }

            const serviceID = emailJSConfig.serviceId;
            const templateID = emailJSConfig.templateId;

            // Log that we are attempting to send
            console.log(\`Attempting to send email via EmailJS...\\nService ID: \${serviceID}\\nTemplate ID: \${templateID}\`);

            emailjs.sendForm(serviceID, templateID, this)
                .then((response) => {
                    console.log('EmailJS Success Response:', response.status, response.text);
                    showStatus('Message sent successfully! I will get back to you soon.', true);
                    contactForm.reset();
                })
                .catch((error) => {
                    // Detailed Error Logging
                    console.error('EmailJS Form Submission Failed!');
                    console.error('Error Details:', error);
                    
                    let errorMsg = 'Unknown error occurred.';
                    if (error && error.text) {
                        errorMsg = error.text;
                    } else if (error && error.message) {
                        errorMsg = error.message;
                    }
                    
                    showStatus(\`Oops! \${errorMsg}\`, false);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });`;

if (js.includes('const serviceID = "service_074c36z";')) {
    js = js.replace(targetLogic, newLogic);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("script.js updated successfully.");
} else {
    console.log("Could not find form submit logic in script.");
}
