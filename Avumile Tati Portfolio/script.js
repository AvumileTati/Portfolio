// Global variable to hold EmailJS config
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
})();

// Global Scroll To Section Helper
window.scrollToSection = function (selector) {
    const target = document.querySelector(selector);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const hamburger = document.getElementById('mobile-menu');
    const navWrap = document.querySelector('.nav-wrap'); // Matches your rounded bubble container
    const navLinks = document.querySelectorAll('.nav a');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollTop = document.getElementById('scrollTop');
    const body = document.body;
    const typingElement = document.getElementById('typed-text');
    const activeBubble = document.querySelector('.bubble.active');
    const hoverBubble = document.querySelector('.bubble.hover');

    // 1b. SLIDING PILL BUBBLE NAVIGATION & SCROLL SPY LOGIC
    function updateActiveBubble() {
        // Disable bubble positioning on mobile
        if (window.innerWidth <= 768) {
            if (activeBubble) 
            if (hoverBubble) 
            return;
        }

        const activeLink = document.querySelector('.nav a.active');
        if (activeLink && activeBubble && navWrap) {
            const rect = activeLink.getBoundingClientRect();
            const navWrapRect = navWrap.getBoundingClientRect();

            
            
            
            
            
        } else if (activeBubble) {
            
        }
    }

    // Set up hover bubble positioning
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return;
            if (hoverBubble && navWrap) {
                const rect = link.getBoundingClientRect();
                const navWrapRect = navWrap.getBoundingClientRect();

                
                
                
                
                
            }
        });

        link.addEventListener('mouseleave', () => {
            if (hoverBubble) {
                
            }
        });
    });

    // Scroll Spy Logic
    const sections = document.querySelectorAll('section[id]');
    function scrollSpy() {
        if (sections.length === 0) return; // Only run on index.html
        
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 180; // Offset for floating nav bar
            const sectionId = current.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                const activeLink = document.querySelector(`.nav a[href*="#${sectionId}"]`);
                if (activeLink) {
                    navLinks.forEach(l => l.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }
        });
        
    }

    window.addEventListener('resize', updateActiveBubble);
    window.addEventListener('scroll', scrollSpy);
    setTimeout(updateActiveBubble, 150); // Let fonts and DOM settle

    // 2. THEME TOGGLE LOGIC
    const savedTheme = localStorage.getItem('theme') || 'light';
    // Use documentElement to match the flash-prevention script in <head>
    document.documentElement.setAttribute('data-theme', savedTheme);

    const updateThemeIcon = (theme) => {
        if (!themeToggle) return;
        themeToggle.innerHTML = theme === 'dark'
            ? '<i data-lucide="sun"></i>'
            : '<i data-lucide="moon"></i>';
        if (window.lucide) lucide.createIcons();
    };

    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            
            document.documentElement.classList.add('theme-transition');

            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            if (newTheme === 'dark') {
                document.documentElement.style.backgroundColor = '#0b0b0f';
            } else {
                document.documentElement.style.backgroundColor = '#ffffff';
            }
            
            setTimeout(() => {
                document.documentElement.classList.remove('theme-transition');
            }, 850);

            setTimeout(updateActiveBubble, 300);
        });
    }

    // 3. NAVIGATION LOGIC (Mobile Menu + Bubble Active State)
    if (hamburger && navWrap) {
        // Toggle mobile menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navWrap.classList.toggle('active');
        });

        // Close menu on link click & update bubble position
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Close menu
                hamburger.classList.remove('active');
                navWrap.classList.remove('active');

                // Update active state for the rounded bubble
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navWrap.classList.contains('active') &&
                !navWrap.contains(e.target) &&
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navWrap.classList.remove('active');
            }
        });
    }

    // 4. HERO TYPING EFFECT
    if (typingElement) {
        const roles = ["IT Support & Service Desk Technician", "ICT Graduate", "Tech Enthusiast"];
        let roleIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                typingElement.textContent = currentRole.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentRole.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === currentRole.length) {
                isDeleting = true;
                typeSpeed = 2000; // Wait before starting to delete
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                typeSpeed = 500;
            }

            setTimeout(typeEffect, typeSpeed);
        }
        typeEffect();
    }

    // 5. SCROLL EFFECTS (Scroll to Top + Reveal Animations)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, we can stop observing if we want a one-time animation
                // observer.unobserve(entry.target); 
            } else {
                // Remove this if you want animations to only happen once
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal, .cool-project-card').forEach(el => observer.observe(el));

    window.addEventListener('scroll', () => {
        if (scrollTop) {
            // Show button after scrolling 300px
            scrollTop.classList.toggle('visible', window.pageYOffset > 300);
        }
    });

    if (scrollTop) {
        scrollTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5b. DYNAMIC STATISTICS COUNTER ANIMATION
    const statsSection = document.querySelector('.stats-section');
    let countersAnimated = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !countersAnimated) {
                    countersAnimated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.3 });

        statsObserver.observe(statsSection);
    }

    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'), 10);
            const suffix = counter.getAttribute('data-suffix') || '';
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Cubic ease-out transition math
                const easeOutProgress = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(easeOutProgress * target);

                counter.textContent = currentValue + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    counter.textContent = target + suffix;
                }
            };

            requestAnimationFrame(updateCount);
        });
    }

    // 6. CONTACT FORM HANDLING WITH EMAILJS
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Show loading state on button
            const submitBtn = this.querySelector('.btn-send');
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;

            // Prepare template parameters
            // Ensure your EmailJS template uses these exact names: {{from_name}}, {{from_email}}, {{message}}
            const templateParams = {
                from_name: document.getElementById('name').value,
                from_email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_name: "Avumile Tati"
            };

            // Preparation for status feedback
            const formStatus = document.getElementById('form-status');
            const showStatus = (message, isSuccess) => {
                if (isSuccess) {
                    formStatus.innerHTML = `
                        <div class="success-animation">
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <span class="status-text">${message}</span>
                    `;
                    formStatus.style.display = 'flex';
                } else {
                    formStatus.textContent = message;
                    formStatus.style.display = 'block';
                }
                
                formStatus.className = `form-status ${isSuccess ? 'success' : 'error'}`;

                // Hide after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                    formStatus.innerHTML = ''; // reset
                }, 5000);
            };

            if (typeof emailjs === 'undefined') {
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
                
                const errorLog = `EmailJS Configuration Error: Missing environment variables: ${missing.join(', ')}`;
                console.error(errorLog);
                console.warn('To fix this: Add the missing environment variables to your deployment environment (e.g. Netlify UI).');
                
                showStatus(`Config Error: Missing ${missing.join(', ')}`, false);
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.disabled = false;
                return;
            }

            const serviceID = emailJSConfig.serviceId;
            const templateID = emailJSConfig.templateId;

            // Log that we are attempting to send
            console.log(`Attempting to send email via EmailJS...\nService ID: ${serviceID}\nTemplate ID: ${templateID}`);

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
                    
                    showStatus(`Oops! ${errorMsg}`, false);
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
                });
        });
    }

    // 5c. DYNAMIC PROJECTS CATEGORY FILTER
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.projects-showcase-grid .cool-project-card');

    if (filterButtons.length > 0 && projectCards.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                projectCards.forEach(card => {
                    card.classList.remove('fade-in');
                    card.classList.add('fade-out');

                    // Wait for fade-out animation to complete, then update display
                    setTimeout(() => {
                        const cardCategory = card.getAttribute('data-category');
                        if (filterValue === 'all' || cardCategory === filterValue) {
                            card.classList.remove('hide');
                            card.classList.remove('fade-out');
                            card.classList.add('fade-in');
                        } else {
                            card.classList.add('hide');
                        }
                    }, 350);
                });
            });
        });
    }

    // 5d. CLICK-TO-COPY CONTACT EMAIL UTILITY
    const copyEmailBtn = document.getElementById('btn-copy-email');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const emailAddress = "tatiavumile@gmail.com";
            
            navigator.clipboard.writeText(emailAddress).then(() => {
                // Check if tooltip already exists
                const parent = copyEmailBtn.parentElement;
                let tooltip = parent.querySelector('.copy-tooltip');
                if (!tooltip) {
                    tooltip = document.createElement('span');
                    tooltip.className = 'copy-tooltip';
                    tooltip.textContent = 'Copied! ✓';
                    parent.appendChild(tooltip);
                }
                
                // Remove tooltip after 1.5 seconds
                setTimeout(() => {
                    tooltip.remove();
                }, 1500);
            }).catch(err => {
                console.error('Clipboard copy failed:', err);
            });
        });
    }

    // Initial icon creation
    if (window.lucide) lucide.createIcons();
});
// Project Data Object (Add your specific images here)
const projectData = {
    "PrePhones Official Store": {
        description: "Built the official Google Sites storefront for PrePhones — a Cape Town retailer for pre-owned smartphones. The site features a premium dark-themed hero section, responsive product carousels, and integrated contact channels to drive sales and customer engagement.",
        images: ["Images/prephones_home.png", "Images/prephones_products.png"],
        tags: ["Web Development", "Google Sites", "E-commerce"],
        liveDemo: "https://sites.google.com/view/prephones/home",
        sourceCode: "https://github.com/avumiletati",
        isWebApp: true
    },
    "Brand Identity & Marketing Design Assets": {
        description: "Full creative suite developed for PrePhones, including logo design, business cards, official letterheads, and social media marketing graphics. These assets were designed to create a cohesive and trustworthy brand presence for the smartphone retailer.",
        images: ["Images/Business Card.png", "Images/Instagram story.png", "Images/Twitter graphic.png", "Images/social banner.png", "Images/Advertisement mockups.png"],
        tags: ["Branding", "Graphic Design", "Illustrator", "Canva"],
        liveDemo: "",
        sourceCode: "",
        downloads: [
            { label: "Brand Kit Vol.1 (Letterhead, Logo, Business Card, Banner)", url: "https://drive.google.com/file/d/1AwQ6FDzqE8kralNGStsiOQmoq-gsA0g7/view?usp=drive_link" },
            { label: "Brand Kit Vol.2 (Marketing & Social Media Design)", url: "https://drive.google.com/file/d/1AjA8Mx1OdYsT3xG-LGZkDralk7bHU8JQ/view?usp=drive_link" }
        ]
    },
    "Dynamic Duo Tech Solutions": {
        description: "Developed web pages, logo designs, and managed custom DNS configurations for ddtsolutions.co.za.",
        images: ["Images/ddt_home.png", "Images/ddt_about.png", "Images/ddt_services.png", "Images/ddt_contact.png"],
        tags: ["Web Development", "Microsoft 365", "Cybersecurity", "IT Support", "Next.js"],
        liveDemo: "https://ddtsolutions.co.za/",
        sourceCode: "https://github.com/avumiletati",
        isWebApp: true
    },
    "TechnoResolve Desk": {
        description: "TechnoResolve Desk routes business requests with AI triage and gives admins, technicians and customers a dashboard built for their role. Implemented advanced AI ticket classification and role-based access control.",
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"],
        tags: ["AI Triage", "Dashboard", "SaaS", "Full-Stack"],
        liveDemo: "https://technoresolve-desk.ai.studio/",
        sourceCode: "",
        isWebApp: true
    },
    "SRD Registration System": {
        description: "Designed a mobile UI/UX prototype in Figma for the SASSA SRD R350 grant application system, targeting youth aged 18–26. The design features a profile dashboard with an integrated Google Maps view showing nearby SASSA offices, a Youth Registration form with identity number verification, and a step-by-step SRD 350 Payment onboarding flow. Built with a bold yellow & dark theme for accessibility and youth appeal.",
        images: ["Images/srd_figma1.png", "Images/srd_figma2.png", "Images/figma.png"],
        tags: ["Figma", "UI/UX", "Maps Integration", "Mobile Design"],
        liveDemo: "https://www.figma.com/design/g6lfoZvSpSPmxNIDKIij84/Untitled?node-id=0-1&t=WCvltsKAyVpkmuXO-1",
        sourceCode: ""
    },
    "Bright Minds Hub": {
        description: "A comprehensive community platform for an after-school program delivering academic support, nutrition, and holistic growth to learners. The website features a dynamic community wish list, a gallery showcasing program life, and clear mission pillars to drive engagement and local support. Built with a vibrant, accessible design to serve as a digital 'home away from home'.",
        images: ["Images/bright_minds_home.png", "Images/bright_minds_pillars.png", "Images/bright_minds_wishlist.png", "Images/bright_minds_life.png"],
        tags: ["Web Development", "Community Support", "Responsive Design", "Non-Profit"],
        liveDemo: "https://avumiletati.github.io/Bright-Minds-Hub/",
        sourceCode: "https://github.com/avumiletati/Bright-Minds-Hub"
    }
};

const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');

if (modal && closeBtn) {
    document.querySelectorAll('.cool-project-card').forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').innerText;
            const data = projectData[title];

            if (data) {
                document.getElementById('modal-title').innerText = title;
                document.getElementById('modal-description').innerText = data.description;
                
                const mainImg = document.getElementById('modal-main-img');
                
                // Add iframe support for real-time live preview
                let liveIframe = document.getElementById('modal-live-iframe');
                if (!liveIframe) {
                    liveIframe = document.createElement('iframe');
                    liveIframe.id = 'modal-live-iframe';
                    liveIframe.style.width = '100%';
                    liveIframe.style.height = '100%';
                    liveIframe.style.border = 'none';
                    liveIframe.style.borderRadius = '12px';
                    liveIframe.style.display = 'none';
                    liveIframe.style.position = 'absolute';
                    liveIframe.style.top = '0';
                    liveIframe.style.left = '0';
                    liveIframe.style.background = '#fff';
                    // Insert after mainImg
                    mainImg.parentNode.style.position = 'relative';
                    mainImg.parentNode.appendChild(liveIframe);
                }

                if (data.isWebApp && data.liveDemo) {
                    mainImg.style.display = 'none';
                    liveIframe.src = data.liveDemo;
                    liveIframe.style.display = 'block';
                } else {
                    liveIframe.style.display = 'none';
                    liveIframe.src = '';
                    mainImg.style.display = 'block';
                    mainImg.src = data.images[0];
                }
                
                // Links setup
                const liveLinkBtn = document.getElementById('modal-live-link');
                const sourceLinkBtn = document.getElementById('modal-source-link');
                
                if (data.liveDemo) {
                    liveLinkBtn.href = data.liveDemo;
                    liveLinkBtn.style.display = 'inline-flex';
                } else {
                    liveLinkBtn.style.display = 'none';
                }
                
                if (data.sourceCode) {
                    sourceLinkBtn.href = data.sourceCode;
                    sourceLinkBtn.style.display = 'inline-flex';
                } else {
                    sourceLinkBtn.style.display = 'none';
                }

                // Tags
                const tagContainer = document.getElementById('modal-tags');
                tagContainer.innerHTML = data.tags.map(t => `<span class="badge">${t}</span>`).join('');

                // Carousel Logic
                const thumbContainer = document.getElementById('modal-thumbnails');
                thumbContainer.innerHTML = '';
                let currentImageIndex = 0;

                const updateMainImage = (index) => {
                    document.getElementById('modal-main-img').src = data.images[index];
                    document.querySelectorAll('.thumbnail-grid img').forEach((t, i) => {
                        t.classList.toggle('active', i === index);
                    });
                };

                data.images.forEach((img, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = img;
                    if (index === 0) thumb.classList.add('active');
                    thumb.onclick = (e) => {
                        e.stopPropagation();
                        currentImageIndex = index;
                        updateMainImage(currentImageIndex);
                    };
                    thumbContainer.appendChild(thumb);
                });
                
                const prevBtn = document.getElementById('modal-prev-btn');
                const nextBtn = document.getElementById('modal-next-btn');
                
                if (prevBtn && nextBtn) {
                    const showControls = data.images.length > 1;
                    prevBtn.style.display = showControls ? 'flex' : 'none';
                    nextBtn.style.display = showControls ? 'flex' : 'none';
                    
                    // Cleanup previous listeners
                    prevBtn.replaceWith(prevBtn.cloneNode(true));
                    nextBtn.replaceWith(nextBtn.cloneNode(true));
                    
                    const newPrevBtn = document.getElementById('modal-prev-btn');
                    const newNextBtn = document.getElementById('modal-next-btn');
                    
                    newPrevBtn.onclick = (e) => {
                        e.stopPropagation();
                        currentImageIndex = (currentImageIndex - 1 + data.images.length) % data.images.length;
                        updateMainImage(currentImageIndex);
                    };

                    newNextBtn.onclick = (e) => {
                        e.stopPropagation();
                        currentImageIndex = (currentImageIndex + 1) % data.images.length;
                        updateMainImage(currentImageIndex);
                    };
                }

                // Download buttons
                const modalActions = document.querySelector('.modal-actions');
                // Remove any existing download buttons from a previous modal open
                modalActions.querySelectorAll('.btn-download').forEach(el => el.remove());
                if (data.downloads && data.downloads.length) {
                    data.downloads.forEach(dl => {
                        const a = document.createElement('a');
                        a.href = dl.url;
                        a.target = '_blank';
                        a.rel = 'noopener noreferrer';
                        a.className = 'btn-download';
                        a.innerHTML = `<i data-lucide="download"></i> ${dl.label}`;
                        modalActions.appendChild(a);
                    });
                    if (window.lucide) lucide.createIcons();
                }

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    closeBtn.onclick = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    window.onclick = (event) => { 
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    };
}
;
// =========================================
// CHAT WIDGET LOGIC
// =========================================
document.addEventListener('DOMContentLoaded', () => {
    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatForm = document.getElementById('chat-form');
    const chatInput = document.getElementById('chat-input');
    const chatMessages = document.getElementById('chat-messages');
    const chatSubmit = document.getElementById('chat-submit');

    // Make sure Lucide icons are re-initialized for the chat if possible
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    if (!chatToggle || !chatWindow) return;

    let chatHistory = [
        { role: 'model', content: "Hi! I'm Avumile's AI assistant. Ask me anything about his skills, projects, or experience!" }
    ];

    chatToggle.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default scrolling behavior
        chatWindow.classList.remove('hidden');
        chatToggle.style.display = 'none';
        // Delay focus slightly to allow animation to complete and prevent mobile keyboard from immediately pushing UI up awkwardly
        setTimeout(() => {
            chatInput.focus({ preventScroll: true });
        }, 300);
    });

    chatClose.addEventListener('click', () => {
        chatWindow.classList.add('hidden');
        chatToggle.style.display = 'flex';
    });

    function appendMessage(role, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${role}`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        // Convert basic markdown/newlines to HTML
        const formattedText = text.replace(/\n/g, '<br>');
        contentDiv.innerHTML = formattedText;
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function showTypingIndicator() {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message assistant typing`;
        messageDiv.id = 'typing-indicator';
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.className = 'typing-dot';
            contentDiv.appendChild(dot);
        }
        
        messageDiv.appendChild(contentDiv);
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const typingIndicator = document.getElementById('typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const message = chatInput.value.trim();
        if (!message) return;

        // Add user message to UI
        appendMessage('user', message);
        chatInput.value = '';
        chatInput.disabled = true;
        chatSubmit.disabled = true;

        showTypingIndicator();

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: message,
                    history: chatHistory
                })
            });

            const data = await response.json();
            
            removeTypingIndicator();
            
            if (response.ok) {
                appendMessage('assistant', data.reply);
                // Update history
                chatHistory.push({ role: 'user', content: message });
                chatHistory.push({ role: 'model', content: data.reply });
            } else {
                appendMessage('assistant', "Sorry, I'm having trouble connecting right now. Please try again later.");
                console.error("Chat Error:", data.error);
            }
        } catch (error) {
            removeTypingIndicator();
            appendMessage('assistant', "Sorry, I'm having trouble connecting right now. Please try again later.");
            console.error("Network Error:", error);
        } finally {
            chatInput.disabled = false;
            chatSubmit.disabled = false;
            chatInput.focus();
        }
    });
});

/* =========================================
   QUICK VIEW MODAL LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('quick-view-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    
    if (!modal) return; // Exit if modal isn't on the page

    
    // Open Modal and Handle Navigation
    const quickViewBtns = Array.from(document.querySelectorAll('.quick-view-btn'));
    let currentProjectIndex = 0;
    
    const modalPrevBtn = document.getElementById('modal-prev');
    const modalNextBtn = document.getElementById('modal-next');
    
    function populateModal(index) {
        if(index < 0 || index >= quickViewBtns.length) return;
        
        const btn = quickViewBtns[index];
        const title = btn.getAttribute('data-title');
        const desc = btn.getAttribute('data-desc');
        const img = btn.getAttribute('data-img');
        const link = btn.getAttribute('data-link');
        
        modalTitle.textContent = title;
        modalDesc.textContent = desc;
        modalImage.src = img;
        modalLink.href = link;
        
        // Disable/enable buttons based on index
        if(modalPrevBtn) modalPrevBtn.style.opacity = index === 0 ? '0.5' : '1';
        if(modalPrevBtn) modalPrevBtn.style.pointerEvents = index === 0 ? 'none' : 'auto';
        
        if(modalNextBtn) modalNextBtn.style.opacity = index === quickViewBtns.length - 1 ? '0.5' : '1';
        if(modalNextBtn) modalNextBtn.style.pointerEvents = index === quickViewBtns.length - 1 ? 'none' : 'auto';
    }

    quickViewBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation(); // Prevent slider interactions if any
            
            currentProjectIndex = index;
            populateModal(currentProjectIndex);
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    if (modalPrevBtn) {
        modalPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentProjectIndex > 0) {
                currentProjectIndex--;
                populateModal(currentProjectIndex);
            }
        });
    }
    
    if (modalNextBtn) {
        modalNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentProjectIndex < quickViewBtns.length - 1) {
                currentProjectIndex++;
                populateModal(currentProjectIndex);
            }
        });
    }


    // Close Modal via Button
    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    // Close Modal via Overlay Click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close Modal via Escape Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
});

/* =========================================
   STATIC CV PREVIEW & DOWNLOAD LOGIC
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    const cvModal = document.getElementById('static-cv-modal');
    const openCvBtn = document.getElementById('open-static-cv-btn');
    const closeCvBtn = document.getElementById('static-cv-close-btn');
    const btnDownload = document.getElementById('btn-download-static-cv');

    if (!cvModal || !openCvBtn) {
        console.error("Missing CV elements:", { cvModal, openCvBtn });
        return;
    }

    // Auto-Update CV Content from Portfolio
    function syncCvContent() {
        try {
            const cvDoc = document.getElementById('static-cv-document');
            if (!cvDoc) return;

            // 1. Profile Summary
            const aboutIntro = document.querySelector('.about-intro p:first-of-type');
            const aboutGoals = document.querySelector('.about-intro p:nth-of-type(2)');
            const cvProfile = cvDoc.querySelector('h3:contains("Profile") + p');
            if (aboutIntro && aboutGoals && cvProfile) {
                // Remove HTML tags for clean text in CV
                let cleanGoals = aboutGoals.innerHTML.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
                cvProfile.textContent = aboutIntro.textContent.trim() + " " + cleanGoals;
            }

            // 2. Experience
            const timelineItems = document.querySelectorAll('.timeline-item');
            const cvExperienceContainer = cvDoc.querySelectorAll('h3:contains("Experience")')[0].nextElementSibling.parentNode;
            
            // We need to carefully replace just the experience blocks, but this is risky if the DOM structure changes.
            // A safer approach is to dynamically rebuild the experience section in the CV.
            
            // Let's create a targeted rebuild of just the lists based on DOM parsing.
            
            // Note: Writing a robust two-way sync in vanilla JS that handles complex nesting without a framework (like React) is error-prone.
            // Instead, since the CV HTML is static in index.html, we will implement a "hydrate" function that grabs the latest DOM text content.
        } catch(e) {
            console.error("Auto-sync CV failed", e);
        }
    }

    // Custom jQuery-like contains selector for vanilla JS
    HTMLElement.prototype.querySelectorAllContains = function(selector, text) {
        return Array.from(this.querySelectorAll(selector)).filter(el => el.textContent.trim() === text);
    };

    function autoSyncResume() {
        const doc = document.getElementById('static-cv-document');
        if (!doc) return;

        // 1. Sync Profile Summary
        const aboutIntro = document.querySelector('.about-intro p:first-of-type');
        const aboutGoals = document.querySelector('.about-intro p:nth-of-type(2)');
        const cvProfileHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Profile'));
        
        if (aboutIntro && aboutGoals && cvProfileHeaders.length > 0) {
            const cvProfile = cvProfileHeaders[0].nextElementSibling;
            if (cvProfile && cvProfile.tagName === 'P') {
                let cleanGoals = aboutGoals.innerHTML.replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
                cvProfile.textContent = aboutIntro.textContent.trim() + " " + cleanGoals;
            }
        }

        // 2. Sync Projects
        const domProjects = document.querySelectorAll('.project-card');
        if (domProjects.length > 0) {
            const projHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Projects'));
            if (projHeaders.length > 0) {
                const projHeader = projHeaders[0];
                let nextEl = projHeader.nextElementSibling;
                // Keep removing until next H3
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                const ul = document.createElement('ul');
                ul.style.fontSize = '14px';
                ul.style.paddingLeft = '20px';
                ul.style.marginBottom = '20px';
                ul.style.color = '#444';

                domProjects.forEach(proj => {
                    const title = proj.querySelector('h3') ? proj.querySelector('h3').textContent.trim() : '';
                    const desc = proj.querySelector('p') ? proj.querySelector('p').textContent.trim() : '';
                    
                    if (title && desc) {
                        const li = document.createElement('li');
                        li.style.marginBottom = '6px';
                        li.innerHTML = `<strong>${title}:</strong> ${desc}`;
                        ul.appendChild(li);
                    }
                });
                
                if(ul.children.length > 0) {
                    projHeader.parentNode.insertBefore(ul, projHeader.nextSibling);
                }
            }
        }

        // 3. Sync Experience
        const domExperiences = document.querySelectorAll('.timeline-item .card.experience');
        if (domExperiences.length > 0) {
            const expHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Experience'));
            if (expHeaders.length > 0) {
                const expHeader = expHeaders[0];
                // Remove old experience blocks
                let nextEl = expHeader.nextElementSibling;
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                // Inject fresh experiences from portfolio
                const fragment = document.createDocumentFragment();
                // Reverse the NodeList to preserve correct top-to-bottom order if we use insertBefore repeatedly,
                // actually, fragment preserves order.
                Array.from(domExperiences).forEach(exp => {
                    const title = exp.querySelector('h4') ? exp.querySelector('h4').textContent : '';
                    const date = exp.querySelector('.date') ? exp.querySelector('.date').textContent : '';
                    const desc = exp.querySelector('p:not(.date)') ? exp.querySelector('p:not(.date)').textContent : '';

                    const block = document.createElement('div');
                    block.style.marginBottom = '15px';
                    block.innerHTML = `
                        <h4 style="font-size: 16px; margin: 0; color: #111;">${title}</h4>
                        <div style="font-size: 14px; color: #2563eb; margin-bottom: 5px; font-weight: 500;">${date}</div>
                        <ul style="font-size: 14px; padding-left: 20px; margin-top: 5px; color: #444;">
                            <li style="margin-bottom: 4px;">${desc}</li>
                        </ul>
                    `;
                    fragment.appendChild(block);
                });
                
                // Insert after header
                expHeader.parentNode.insertBefore(fragment, expHeader.nextSibling);
            }
        }
        
        // 4. Sync Education
        const domEdu = document.querySelectorAll('.card.education');
        if (domEdu.length > 0) {
            const eduHeaders = Array.from(doc.querySelectorAll('h3')).filter(el => el.textContent.includes('Education'));
            if (eduHeaders.length > 0) {
                const eduHeader = eduHeaders[0];
                let nextEl = eduHeader.nextElementSibling;
                while(nextEl && nextEl.tagName !== 'H3') {
                    const toRemove = nextEl;
                    nextEl = nextEl.nextElementSibling;
                    toRemove.remove();
                }

                const fragment = document.createDocumentFragment();
                Array.from(domEdu).forEach(edu => {
                    const title = edu.querySelector('p:not(.date)') ? edu.querySelector('p:not(.date)').textContent : '';
                    const inst = edu.querySelector('h4') ? edu.querySelector('h4').textContent : '';
                    const date = edu.querySelector('.date') ? edu.querySelector('.date').textContent : '';

                    const block = document.createElement('div');
                    block.style.marginBottom = '15px';
                    block.innerHTML = `
                        <h4 style="font-size: 16px; margin: 0; color: #111;">${title}</h4>
                        <div style="font-size: 14px; color: #666;">${inst} | ${date}</div>
                    `;
                    fragment.appendChild(block);
                });
                eduHeader.parentNode.insertBefore(fragment, eduHeader.nextSibling);
            }
        }
    }

    // Function to periodically check and sync the CV
    function startPeriodicCvSync() {
        // Run immediately once
        autoSyncResume();
        
        // Then check every 5 seconds for any updates to the DOM
        setInterval(() => {
            if (document.getElementById('static-cv-document')) {
                autoSyncResume();
            }
        }, 5000);
    }

    // Initialize the periodic background sync
    startPeriodicCvSync();

    // Open Modal
    openCvBtn.addEventListener('click', (e) => {
        e.preventDefault();
        autoSyncResume(); // Force an immediate pull just in case before showing
        cvModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close Modal
    const closeCvModal = () => {
        cvModal.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (closeCvBtn) {
        closeCvBtn.addEventListener('click', closeCvModal);
    }
    
    cvModal.addEventListener('click', (e) => {
        if (e.target === cvModal) closeCvModal();
    });

    // Handle PDF Download using html2pdf

    // Handle Native Print to PDF
    const btnPrint = document.getElementById('btn-print-static-cv');
    if (btnPrint) {
        btnPrint.addEventListener('click', () => {
            window.print();
        });
    }

    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const element = document.getElementById('static-cv-document');
            if (!element) return;
            
            const opt = {
                margin:       10,
                filename:     'Avumile_Tati_CV.pdf',
                image:        { type: 'jpeg', quality: 1 },
                html2canvas:  { scale: 2, useCORS: true },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Change button text while processing
            const originalText = btnDownload.innerHTML;
            btnDownload.innerHTML = "<i class='bx bx-loader-alt bx-spin'></i> Generating PDF...";
            btnDownload.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                btnDownload.innerHTML = originalText;
                btnDownload.disabled = false;
            }).catch(err => {
                console.error("PDF generation failed", err);
                btnDownload.innerHTML = originalText;
                btnDownload.disabled = false;
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', () => { 
    // Intersection Observer for stagger-reveal on project slides
    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // If the container is in view, we find all the slides inside it
                // Actually, let's just observe the slides directly, but if we want them to stagger together,
                // we can observe the .project-slider container.
                
                const slides = entry.target.querySelectorAll('.project-slide-stagger');
                slides.forEach((slide, index) => {
                    setTimeout(() => {
                        slide.classList.add('in-view');
                    }, index * 200); // 200ms stagger delay between each slide
                });
                
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const projectSliderContainer = document.querySelector('#projects .project-slider');
    if (projectSliderContainer) {
        staggerObserver.observe(projectSliderContainer);
    }
 });

// RAUL DRONCA NAV SCROLL SPY
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav a');
    
    // Collect all valid target sections
    const sections = [];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            const section = document.querySelector(href);
            if (section) sections.push(section);
        }
    });

    // Observer options to detect when a section is roughly in the middle of the screen
    const observerOptions = {
        root: null,
        rootMargin: '-40% 0px -60% 0px',
        threshold: 0
    };

    const scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to corresponding link
                const activeLink = document.querySelector(`.nav a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        scrollSpyObserver.observe(section);
    });
});

