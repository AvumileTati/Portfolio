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