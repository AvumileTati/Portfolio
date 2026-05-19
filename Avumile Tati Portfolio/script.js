// Initialize EmailJS with Public Key
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init("l_3AEBZ3w63Er-f-G");
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
            if (activeBubble) activeBubble.style.opacity = '0';
            if (hoverBubble) hoverBubble.style.opacity = '0';
            return;
        }

        const activeLink = document.querySelector('.nav a.active');
        if (activeLink && activeBubble && navWrap) {
            const rect = activeLink.getBoundingClientRect();
            const navWrapRect = navWrap.getBoundingClientRect();

            activeBubble.style.left = `${rect.left - navWrapRect.left}px`;
            activeBubble.style.width = `${rect.width}px`;
            activeBubble.style.height = `${rect.height}px`;
            activeBubble.style.top = `${rect.top - navWrapRect.top + rect.height / 2}px`;
            activeBubble.style.opacity = '1';
        } else if (activeBubble) {
            activeBubble.style.opacity = '0';
        }
    }

    // Set up hover bubble positioning
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            if (window.innerWidth <= 768) return;
            if (hoverBubble && navWrap) {
                const rect = link.getBoundingClientRect();
                const navWrapRect = navWrap.getBoundingClientRect();

                hoverBubble.style.left = `${rect.left - navWrapRect.left}px`;
                hoverBubble.style.width = `${rect.width}px`;
                hoverBubble.style.height = `${rect.height}px`;
                hoverBubble.style.top = `${rect.top - navWrapRect.top + rect.height / 2}px`;
                hoverBubble.style.opacity = '1';
            }
        });

        link.addEventListener('mouseleave', () => {
            if (hoverBubble) {
                hoverBubble.style.opacity = '0';
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
        updateActiveBubble();
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
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);

            // Sync background to prevent flashes during navigation
            if (newTheme === 'dark') {
                document.documentElement.style.backgroundColor = '#0b0b0f';
            } else {
                document.documentElement.style.backgroundColor = '#ffffff';
            }
            
            // Re-render active bubble position on theme change (due to any transition shifts)
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
                
                updateActiveBubble();
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
        const roles = ["Full Stack Developer", "ICT Graduate", "Tech Enthusiast"];
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
                formStatus.textContent = message;
                formStatus.className = `form-status ${isSuccess ? 'success' : 'error'}`;
                formStatus.style.display = 'block';

                // Hide after 5 seconds
                setTimeout(() => {
                    formStatus.style.display = 'none';
                }, 5000);
            };

            if (typeof emailjs === 'undefined') {
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
        link: "https://sites.google.com/view/prephones/home"
    },
    "Brand Identity & Marketing Design Assets": {
        description: "Full creative suite developed for PrePhones, including logo design, business cards, official letterheads, and social media marketing graphics. These assets were designed to create a cohesive and trustworthy brand presence for the smartphone retailer.",
        images: ["Images/Business Card.png", "Images/Instagram story.png", "Images/Twitter graphic.png", "Images/social banner.png", "Images/Advertisement mockups.png"],
        tags: ["Branding", "Graphic Design", "Illustrator", "Canva"],
        link: "#",
        downloads: [
            { label: "Brand Kit Vol.1 (Letterhead, Logo, Business Card, Banner)", url: "https://drive.google.com/file/d/1AwQ6FDzqE8kralNGStsiOQmoq-gsA0g7/view?usp=drive_link" },
            { label: "Brand Kit Vol.2 (Marketing & Social Media Design)", url: "https://drive.google.com/file/d/1AjA8Mx1OdYsT3xG-LGZkDralk7bHU8JQ/view?usp=drive_link" }
        ]
    },
    "Dynamic Duo Tech Solutions": {
        description: "Built and maintained the full ddtsolutions.co.za website for Dynamic Duo Tech — a South African IT company servicing SMBs. The site showcases their managed Microsoft 365 consulting, cybersecurity & antivirus solutions, web & app development services, and 24/7 local IT support. Designed with a focus on clear service communication, B-BBEE compliance transparency, and lead generation via Calendly integrations.",
        images: ["Images/ddt_home.png", "Images/ddt_about.png", "Images/ddt_services.png", "Images/ddt_contact.png"],
        tags: ["Web Development", "Microsoft 365", "Cybersecurity", "IT Support", "Next.js"],
        link: "https://ddtsolutions.co.za/"
    },
    "SRD Registration System": {
        description: "Designed a mobile UI/UX prototype in Figma for the SASSA SRD R350 grant application system, targeting youth aged 18–26. The design features a profile dashboard with an integrated Google Maps view showing nearby SASSA offices, a Youth Registration form with identity number verification, and a step-by-step SRD 350 Payment onboarding flow. Built with a bold yellow & dark theme for accessibility and youth appeal.",
        images: ["Images/srd_figma1.png", "Images/srd_figma2.png", "Images/figma.png"],
        tags: ["Figma", "UI/UX", "Maps Integration", "Mobile Design"],
        link: "https://www.figma.com/design/g6lfoZvSpSPmxNIDKIij84/Untitled?node-id=0-1&t=WCvltsKAyVpkmuXO-1"
    },
    "Bright Minds Hub": {
        description: "A comprehensive community platform for an after-school program delivering academic support, nutrition, and holistic growth to learners. The website features a dynamic community wish list, a gallery showcasing program life, and clear mission pillars to drive engagement and local support. Built with a vibrant, accessible design to serve as a digital 'home away from home'.",
        images: ["Images/bright_minds_home.png", "Images/bright_minds_pillars.png", "Images/bright_minds_wishlist.png", "Images/bright_minds_life.png"],
        tags: ["Web Development", "Community Support", "Responsive Design", "Non-Profit"],
        link: "https://avumiletati.github.io/Bright-Minds-Hub/"
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
                document.getElementById('modal-main-img').src = data.images[0];
                document.getElementById('modal-link').href = data.link;

                // Tags
                const tagContainer = document.getElementById('modal-tags');
                tagContainer.innerHTML = data.tags.map(t => `<span class="badge">${t}</span>`).join('');

                // Thumbnails
                const thumbContainer = document.getElementById('modal-thumbnails');
                thumbContainer.innerHTML = '';
                data.images.forEach((img, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = img;
                    if (index === 0) thumb.classList.add('active');
                    thumb.onclick = (e) => {
                        e.stopPropagation();
                        document.getElementById('modal-main-img').src = img;
                        document.querySelectorAll('.thumbnail-grid img').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    };
                    thumbContainer.appendChild(thumb);
                });

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