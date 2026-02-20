// Initialize EmailJS with Public Key
(function () {
    emailjs.init("0UQlWQQQsUT_R6OEC");
})();

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECT ELEMENTS
    const hamburger = document.getElementById('mobile-menu');
    const navWrap = document.querySelector('.nav-wrap'); // Matches your rounded bubble container
    const navLinks = document.querySelectorAll('.nav a');
    const themeToggle = document.getElementById('theme-toggle');
    const scrollTop = document.getElementById('scrollTop');
    const body = document.body;
    const typingElement = document.getElementById('typed-text');

    // 2. THEME TOGGLE LOGIC
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.dataset.theme = savedTheme;

    const updateThemeIcon = (theme) => {
        if (!themeToggle) return;
        // Use Lucide icons: Sun for dark mode, Moon for light
        themeToggle.innerHTML = theme === 'dark'
            ? '<i data-lucide="sun"></i>'
            : '<i data-lucide="moon"></i>';
        if (window.lucide) lucide.createIcons();
    };

    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
            body.dataset.theme = newTheme;
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
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

            // Use your Service ID (replace 'service_id' if you have a specific one, or it usually works with 'default_service')
            const serviceID = "service_default";
            const templateID = "template_sxyyixd";

            emailjs.send(serviceID, templateID, templateParams)
                .then(() => {
                    alert('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                })
                .catch((error) => {
                    console.error('EmailJS Error:', error);
                    alert('Oops! Something went wrong. Please try again later or contact me directly via email.');
                })
                .finally(() => {
                    submitBtn.innerHTML = originalBtnContent;
                    submitBtn.disabled = false;
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
    }
};

const modal = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-modal');

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

window.onclick = (event) => { if (event.target == modal) closeBtn.onclick(); };
;