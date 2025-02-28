// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme from localStorage or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
body.dataset.theme = savedTheme;
themeToggle.innerHTML = savedTheme === 'dark' 
    ? '<i class="fas fa-sun"></i>' 
    : '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
    const newTheme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    body.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' 
        ? '<i class="fas fa-sun"></i>' 
        : '<i class="fas fa-moon"></i>';
});

// Enhanced Mobile Menu Functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click from bubbling
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.style.overflow = body.style.overflow === 'hidden' ? '' : 'hidden';
});

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    });
});

// Scroll to Top Functionality
const scrollTop = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTop.classList.add('visible');
    } else {
        scrollTop.classList.remove('visible');
    }
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') && 
        !navMenu.contains(e.target) && 
        !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        body.style.overflow = '';
    }
});