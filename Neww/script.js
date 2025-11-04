/* script.js */
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const navList = document.getElementById('primary-nav');
  const root = document.documentElement;

  // Ensure iOS style is enabled by default (no UI toggle)
  try { root.classList.add('ios'); } catch (e) { /* ignore */ }

  // Start with landing state active. The .intro.landing section is shown full-screen.
  try { document.body.classList.add('landing-active'); } catch (e) { /* ignore */ }

  // End landing on the first meaningful user interaction and reveal the page.
  (function attachLandingExit() {
    const once = { once: true, passive: true };
    function endLanding() {
      document.body.classList.remove('landing-active');
      // smooth scroll slightly so the user lands at the main content
      setTimeout(() => {
        const main = document.getElementById('main');
        if (main) main.scrollIntoView({ behavior: 'smooth' });
      }, 50);
      // detach listeners automatically because of `{ once: true }`
    }
    // interactions that should end the landing: scroll/wheel/touch/key press/click on CTA
    window.addEventListener('wheel', endLanding, once);
    window.addEventListener('touchstart', endLanding, once);
    window.addEventListener('keydown', (e) => {
      const keys = ['ArrowDown','PageDown',' ','Enter'];
      if (keys.includes(e.key)) endLanding();
    }, { once: true });
    document.addEventListener('scroll', endLanding, { once: true, passive: true });
    // also allow the primary button to exit landing
    const heroBtn = document.querySelector('.intro.landing .btn');
    if (heroBtn) heroBtn.addEventListener('click', endLanding, { once: true });
  })();

  // Menu handling
  if (!menuToggle || !nav || !navList) return;

  function openMenu() {
    nav.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    nav.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
  }

  function toggleMenu() {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu(); else openMenu();
  }

  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when a nav link is clicked (mobile behavior)
  navList.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === 'A') {
      closeMenu();
    }
  });

  // Close the menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
      menuToggle.focus();
    }
  });

  // Contact form handling (validation + mailto fallback)
  const form = document.getElementById('contact-form');
  const noticeEl = document.getElementById('form-notice');
  let noticeTimeout = null;

  function showNotice(message, type = 'info', timeout = 5000) {
    if (!noticeEl) {
      alert(message); // fallback
      return;
    }
    noticeEl.classList.remove('error');
    if (type === 'error') noticeEl.classList.add('error');
    noticeEl.querySelector('.notice-text').textContent = message;
    noticeEl.hidden = false;
    noticeEl.classList.add('show');
    // set aria-hidden attr to false for screen readers
    noticeEl.setAttribute('aria-hidden', 'false');

    if (noticeTimeout) clearTimeout(noticeTimeout);
    if (timeout > 0) {
      noticeTimeout = setTimeout(() => hideNotice(), timeout);
    }
  }

  function hideNotice() {
    if (!noticeEl) return;
    noticeEl.classList.remove('show');
    noticeEl.setAttribute('aria-hidden', 'true');
    // keep element in DOM but mark hidden for accessibility after animation
    setTimeout(() => { noticeEl.hidden = true; }, 310);
    if (noticeTimeout) { clearTimeout(noticeTimeout); noticeTimeout = null; }
  }

  // close button on notice
  if (noticeEl) {
    const closeBtn = noticeEl.querySelector('.notice-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        hideNotice();
      });
    }
  }

  if (form) {
    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      const nameEl = form.querySelector('#name');
      const emailEl = form.querySelector('#email');
      const msgEl = form.querySelector('#message');
      const name = nameEl.value.trim();
      const email = emailEl.value.trim();
      const message = msgEl.value.trim();

      if (!name || !email || !message) {
        // focus first empty field and show iOS-like notice
        const firstInvalid = !name ? nameEl : !email ? emailEl : msgEl;
        firstInvalid.focus();
        showNotice('Please complete all required fields.', 'error', 5000);
        return;
      }
      const subject = encodeURIComponent('Portfolio contact from ' + name);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      // open user's mail client
      window.location.href = `mailto:tatiavumile@gmail.com?subject=${subject}&body=${body}`;
      // optionally show success feedback (brief)
      showNotice('Opening your email client…', 'info', 3000);
    });
  }

  // REVEAL ON SCROLL
  try {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced && 'IntersectionObserver' in window) {
      const reveals = document.querySelectorAll('.reveal');
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      }, {threshold: 0.12});

      reveals.forEach((el) => io.observe(el));
    } else {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    }
  } catch (err) {
    console.error('Reveal observer error', err);
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
  }

});