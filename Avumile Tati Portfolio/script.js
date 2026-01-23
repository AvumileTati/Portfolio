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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.card, .section-title, .about-container').forEach(el => observer.observe(el));

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

    // Initial icon creation
    if (window.lucide) lucide.createIcons();
});
// Project Data Object (Add your specific images here)
const projectData = {
        "PrePhones Corporate Identity": {
            description: "Developed official stationery featuring contact systems, professional email setups (tati@prephones.com), and Cape Town office details.",
            images: ["Images/letterhead-mockup.png", "Images/prephone.png"],
            tags: ["Branding", "Illustrator", "Corporate"],
            link: "letterhead.pdf"
        },
        "Dynamic Duo Tech Solutions": {
            description: "IT support including Google Workspace management, Microsoft 365 consulting, and security setup.",
            images: ["Images/Ddtsolutions.png", "Images/graphic1.png"],
            tags: ["IT Support", "Google Workspace", "Security"],
            link: "https://ddtsolutions.co.za/"
        },
        "SRD Registration System": {
            description: "Streamlined registration process with integrated maps and identity verification for users aged 18-26.",
            images: ["Images/figma.png", "Images/WebStore.png"],
            tags: ["Figma", "UI/UX", "Maps Integration"],
            link: "#"
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
                    if(index === 0) thumb.classList.add('active');
                    thumb.onclick = (e) => {
                        e.stopPropagation();
                        document.getElementById('modal-main-img').src = img;
                        document.querySelectorAll('.thumbnail-grid img').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    };
                    thumbContainer.appendChild(thumb);
                });

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