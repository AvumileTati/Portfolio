const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

// I will just append the new styles with `!important` to override the old ones, or replace them.
// Appending is safer to ensure it overrides.

const newNavCSS = `
/* =========================================
   RAUL DRONCA NAV REPLACEMENT
   ========================================= */
:root {
  --nav-black: #0f0f0f;
  --nav-gray: #3f3f3f;
  --nav-white: #fff;
}

.nav-container {
    padding-top: 20px;
}

.nav-wrap {
  border: 1px solid var(--nav-gray) !important;
  width: fit-content !important;
  margin: 0 auto !important;
  border-radius: 500px !important;
  position: relative !important;
  box-shadow: inset 10px 0 10px black !important;
  background: linear-gradient(0deg, #141414, #242424) !important;
  padding: 0 !important;
  backdrop-filter: none !important;
  -webkit-backdrop-filter: none !important;
}

.nav-wrap:after {
  content: "";
  display: block;
  position: absolute;
  inset: -5px;
  background: linear-gradient(180deg, var(--nav-gray), #212121);
  border-radius: 500px;
  z-index: -1;
}

.nav {
  width: fit-content !important;
  anchor-name: --nav;
  margin: 6.7px !important;
  display: flex !important;
  align-items: center;
  gap: 0 !important;
}

.nav a {
  z-index: 10 !important;
  position: relative !important;
  display: flex !important;
  align-items: center;
  justify-content: center;
  padding: 12px 24px !important; /* Adjusted from 20x50 to fit the page */
  color: white !important;
  text-decoration: none !important;
  background: transparent !important;
  border-radius: 0 !important;
}

.nav a:before {
  content: "";
  display: block;
  position: absolute;
  inset: 0;
  opacity: 0.2;
}

.nav a.active {
  anchor-name: --active;
  color: black !important;
}

.nav a:hover:before {
  anchor-name: --nav;
}

.nav-wrap .bubble {
  background: white !important;
  top: anchor(top) !important;
  right: anchor(right) !important;
  bottom: anchor(bottom) !important;
  left: anchor(left) !important;
  position: absolute !important;
  transition: all 0.2s !important;
  border-radius: 500px !important;
  opacity: 1 !important;
  pointer-events: none;
  transform: none !important;
  margin: 0 !important;
  padding: 0 !important;
}

.nav-wrap .bubble.active {
  position-anchor: --active;
  z-index: 2 !important;
  background: linear-gradient(180deg, #f2f2f2, #b3b3b3) !important;
  box-shadow: inset 0 2px 7px #fff !important;
}

.nav-wrap .bubble.hover {
  z-index: 1 !important;
  background: linear-gradient(180deg, var(--nav-gray), #212121) !important;
  box-shadow: inset 0 2px 7px #ffffff29 !important;
  position-anchor: --nav;
  opacity: 1 !important; /* Let CSS anchor handle it, wait: does it only show on hover? */
}

/* Fallback for browsers that don't support CSS Anchor Positioning */
@supports not (anchor-name: --nav) {
    .nav-wrap .bubble {
        display: none !important;
    }
    .nav a.active {
        background: white !important;
        color: black !important;
        border-radius: 500px !important;
    }
    .nav a:hover {
        background: rgba(255,255,255,0.1) !important;
        border-radius: 500px !important;
    }
}

/* Ensure mobile menu still looks somewhat okay or overrides */
@media (max-width: 768px) {
    .nav-wrap {
        border-radius: 16px !important;
    }
    .nav-wrap:after {
        border-radius: 20px !important;
    }
    .nav {
        flex-direction: column !important;
    }
    .nav a {
        padding: 15px !important;
        width: 100% !important;
    }
}

/* The Theme Toggle */
#theme-toggle {
    color: white !important;
}
`;

fs.appendFileSync('Avumile Tati Portfolio/styles.css', newNavCSS);
console.log("Appended new nav CSS");
