const fs = require('fs');
let css = fs.readFileSync('Avumile Tati Portfolio/styles.css', 'utf8');

const newFooterCSS = `
/* =========================================
   FOOTER UPGRADE (Premium Adaptive & Glassmorphic)
   ========================================= */
.main-footer {
    background: var(--bg-light) !important;
    color: var(--text) !important;
    padding: 5rem 0 2rem !important;
    position: relative;
    border-top: 1px solid var(--border) !important;
    overflow: hidden;
}

.main-footer::before {
    content: '';
    position: absolute;
    top: -50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
    height: 400px;
    background: radial-gradient(ellipse at top, rgba(37, 99, 235, 0.08) 0%, transparent 60%);
    z-index: 0;
    pointer-events: none;
}

[data-theme="dark"] .main-footer::before {
    background: radial-gradient(ellipse at top, rgba(37, 99, 235, 0.15) 0%, transparent 60%);
}

.main-footer .container {
    position: relative;
    z-index: 1;
}

.footer-section h3 {
    color: var(--text) !important;
    margin-bottom: 1.2rem !important;
    font-size: 1.7rem !important;
    font-weight: 700 !important;
}

.footer-section p {
    color: var(--text-light) !important;
    line-height: 1.7 !important;
}

.footer-section h4 {
    color: var(--primary) !important;
    margin-bottom: 1.5rem !important;
    font-weight: 600 !important;
    text-transform: uppercase !important;
    letter-spacing: 1px !important;
    font-size: 0.95rem !important;
}

.footer-nav li {
    margin-bottom: 1rem !important;
}

.footer-nav a {
    color: var(--text-light) !important;
    transition: all 0.3s cubic-bezier(0.25, 0.85, 0.15, 1.15) !important;
    display: inline-flex !important;
    align-items: center;
}

.footer-nav a:hover {
    color: var(--primary) !important;
    transform: translateX(6px) !important;
}

.footer-tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px !important;
}

.footer-tech-tags span {
    background: rgba(37, 99, 235, 0.08) !important;
    border: 1px solid rgba(37, 99, 235, 0.15) !important;
    color: var(--primary) !important;
    padding: 6px 14px !important;
    border-radius: 99px !important;
    font-size: 0.85rem !important;
    font-weight: 500 !important;
    transition: all 0.3s cubic-bezier(0.25, 0.85, 0.15, 1.15) !important;
}

[data-theme="dark"] .footer-tech-tags span {
    background: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.08) !important;
    color: var(--text-light) !important;
}

.footer-tech-tags span:hover {
    background: var(--primary) !important;
    color: white !important;
    transform: translateY(-3px) scale(1.05) !important;
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.25) !important;
    border-color: var(--primary) !important;
}

.footer-divider {
    height: 1px !important;
    background: var(--border) !important;
    margin: 4rem 0 2rem !important;
}

.bottom-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-light) !important;
    font-size: 0.95rem !important;
    font-weight: 500;
}

.heart-icon {
    color: #ef4444 !important;
    display: inline-block;
    width: 16px !important;
    height: 16px !important;
    margin: 0 4px;
    vertical-align: text-bottom;
    animation: heartPulse 2s infinite cubic-bezier(0.25, 0.85, 0.15, 1.15);
}

@keyframes heartPulse {
    0% { transform: scale(1); }
    10% { transform: scale(1.25); }
    20% { transform: scale(1); }
    30% { transform: scale(1.25); }
    40% { transform: scale(1); }
    100% { transform: scale(1); }
}

@media (max-width: 768px) {
    .footer-grid {
        grid-template-columns: 1fr !important;
        gap: 2.5rem !important;
    }
    .bottom-flex {
        flex-direction: column !important;
        gap: 1.5rem !important;
        text-align: center !important;
    }
}
`;

fs.appendFileSync('Avumile Tati Portfolio/styles.css', newFooterCSS);
console.log("Appended new footer styles");
