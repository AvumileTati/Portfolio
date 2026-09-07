const fs = require('fs');
let html = fs.readFileSync('Avumile Tati Portfolio/index.html', 'utf8');

const oldContactInfo = `<div class="contact-info">
                    <div class="contact-item email-item">
                        <div class="icon-box"><i data-lucide="mail"></i></div>
                        <div class="contact-details" style="position: relative; width: 100%;">
                            <h4>Email</h4>
                            <p style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <a href="mailto:tatiavumile@gmail.com" id="contact-email">tatiavumile@gmail.com</a>
                                <button type="button" class="btn-copy" id="btn-copy-email" aria-label="Copy email" title="Copy to clipboard">
                                    <i data-lucide="copy" style="width: 14px; height: 14px;"></i>
                                </button>
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="icon-box"><i data-lucide="map-pin"></i></div>
                        <div>
                            <h4>Location</h4>
                            <p>Cape Town, South Africa</p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="icon-box"><i data-lucide="linkedin"></i></div>
                        <div>
                            <h4>LinkedIn</h4>
                            <p><a href="https://www.linkedin.com/in/avumile-tati/" target="_blank">View Profile</a></p>
                        </div>
                    </div>
                </div>`;

const newContactInfo = `<div class="contact-info">
                    <div class="contact-item email-item">
                        <div class="icon-box"><i class='bx bx-envelope'></i></div>
                        <div class="contact-details" style="position: relative; width: 100%;">
                            <h4>Email</h4>
                            <p style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <a href="mailto:tatiavumile@gmail.com" id="contact-email">tatiavumile@gmail.com</a>
                                <button type="button" class="btn-copy" id="btn-copy-email" aria-label="Copy email" title="Copy to clipboard">
                                    <i class='bx bx-copy' style="font-size: 14px;"></i>
                                </button>
                            </p>
                        </div>
                    </div>

                    <div class="contact-item">
                        <div class="icon-box"><i class='bx bx-map'></i></div>
                        <div class="contact-details" style="position: relative; width: 100%;">
                            <h4>Location</h4>
                            <p>Cape Town, South Africa</p>
                        </div>
                    </div>

                    <div class="contact-item social-item">
                        <div class="icon-box"><i class='bx bx-share-alt'></i></div>
                        <div class="contact-details" style="position: relative; width: 100%;">
                            <h4>Connect With Me</h4>
                            <div class="social-icon-row" style="display: flex; gap: 12px; margin-top: 8px;">
                                <a href="https://www.linkedin.com/in/avumile-tati/" target="_blank" class="social-icon-btn linkedin" title="LinkedIn">
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                                <a href="https://github.com/avumiletati" target="_blank" class="social-icon-btn github" title="GitHub">
                                    <i class='bx bxl-github'></i>
                                </a>
                                <a href="mailto:tatiavumile@gmail.com" class="social-icon-btn email" title="Email">
                                    <i class='bx bx-envelope'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;

if (html.includes('<div class="contact-info">')) {
    html = html.replace(oldContactInfo, newContactInfo);
    fs.writeFileSync('Avumile Tati Portfolio/index.html', html);
    console.log('index.html contact info updated successfully');
} else {
    console.log('Could not find contact info section');
}
