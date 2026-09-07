const fs = require('fs');
let js = fs.readFileSync('Avumile Tati Portfolio/script.js', 'utf8');

const targetFunction = `            const showStatus = (message, isSuccess) => {
                formStatus.textContent = message;
                formStatus.className = \`form-status \${isSuccess ? 'success' : 'error'}\`;
                formStatus.style.display = 'block';

                // Hide after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            };`;

const newFunction = `            const showStatus = (message, isSuccess) => {
                if (isSuccess) {
                    formStatus.innerHTML = \`
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <span class="status-text">\${message}</span>
                    \`;
                    formStatus.style.display = 'flex';
                } else {
                    formStatus.textContent = message;
                    formStatus.style.display = 'block';
                }
                
                formStatus.className = \`form-status \${isSuccess ? 'success' : 'error'}\`;

                // Hide after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.innerHTML = ''; // reset
                }, 5000);
            };`;

if (js.includes(targetFunction)) {
    js = js.replace(targetFunction, newFunction);
    fs.writeFileSync('Avumile Tati Portfolio/script.js', js);
    console.log("Script updated successfully.");
} else {
    console.log("Could not find target function in script.");
}
