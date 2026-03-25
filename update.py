import re

file_path = "c:/Users/marke/Desktop/Mohamed-Portfolio/index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Creative Preloader HTML
preloader_html = """<body>
  <!-- Preloader -->
  <div id="preloader">
    <div class="blob-loader"></div>
  </div>"""
content = re.sub(r'<body.*?>', preloader_html, content, count=1)

# Preloader JS
preloader_js = """
// Preloader Logic
window.addEventListener('load', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      preloader.style.opacity = '0';
      setTimeout(() => {
        preloader.style.display = 'none';
      }, 500); // Wait for transition
    }
  }, 1500);
});
"""

# Find closing </script> before closing </body> and append Preloader JS
# or just insert before </body>
content = content.replace("</body>", f"<script>{preloader_js}</script>\n  </body>")

# 2. Extreme Glassmorphism
glassmorphism_css = """
      background: rgba(255, 255, 255, 0.04) !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      border: 1px solid rgba(255, 255, 255, 0.08) !important;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;
"""

# Let's insert new CSS rules into the style tag instead of replacing individually which could break.
# I'll add a block of CSS at the end of the <style> section.

custom_css = """
    /* ========================================= */
    /* AGENT 10 - CREATIVE OVERHAUL CSS          */
    /* ========================================= */

    /* Preloader */
    #preloader {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: var(--bg-base);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
      transition: opacity 0.5s ease;
    }

    .blob-loader {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--accent-teal), var(--accent-blue));
      animation: liquid-blob 3s ease-in-out infinite alternate;
    }

    /* Animation Keyframes */
    @keyframes liquid-blob {
      0% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        transform: scale(1) rotate(0deg);
      }
      50% {
        border-radius: 60% 40% 30% 70% / 60% 50% 40% 50%;
        transform: scale(1.05) rotate(90deg);
        box-shadow: 0 0 20px var(--accent-teal), inset 0 0 15px var(--accent-blue);
      }
      100% {
        border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
        transform: scale(1) rotate(180deg);
      }
    }

    /* Extreme Glassmorphism for specific elements */
    #navbar, .terminal-card, .skill-category-card, .timeline-content, 
    .cert-card, .project-card, .contact-card, .footer-section, .contact-form,
    .nav-menu.open {
      background: rgba(255, 255, 255, 0.04) !important;
      backdrop-filter: blur(20px) !important;
      -webkit-backdrop-filter: blur(20px) !important;
      border: 1px solid rgba(255, 255, 255, 0.08) !important;
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37) !important;
    }

    /* Liquid Hover effects for cards & buttons */
    .project-card, .btn, .skill-category-card {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }
    
    .project-card::before, .btn::before, .skill-category-card::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background: linear-gradient(135deg, rgba(0, 240, 255, 0.2), rgba(176, 38, 255, 0.2));
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1), height 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s;
      z-index: -1;
      opacity: 0;
    }

    .project-card:hover::before, .btn:hover::before, .skill-category-card:hover::before {
      width: 300%;
      height: 300%;
      opacity: 1;
      border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    }

    /* Profile photo border fluid rotating shape */
    .photo-border {
      animation: liquid-blob 5s ease-in-out infinite alternate, spin 8s linear infinite !important;
    }

    /* Typography Overrides (Arabic RTL) */
    [dir="rtl"] body {
      font-family: var(--font-arabic) !important;
      line-height: 1.85 !important;
      font-size: 1.1rem !important; /* Slightly larger for elegance */
    }
    
    [dir="rtl"] h1, [dir="rtl"] h2, [dir="rtl"] h3 {
      line-height: 1.5 !important;
    }

    /* Mobile First & Responsiveness */
    @media (max-width: 768px) {
      .container {
        padding: 0 16px !important;
      }
      .project-card, .terminal-card, .skill-category-card, .timeline-content, .cert-card, .contact-card {
        margin: 10px !important; /* ensure cards don't touch edges */
        width: calc(100% - 20px) !important; 
        box-sizing: border-box;
      }
      
      body {
        font-size: clamp(0.9rem, 2.5vw, 1.1rem) !important;
      }
      
      h1 { font-size: clamp(1.8rem, 5vw, 2.5rem) !important; }
      h2 { font-size: clamp(1.5rem, 4.5vw, 2rem) !important; }
      h3 { font-size: clamp(1.2rem, 3.5vw, 1.5rem) !important; }

      /* Hamburger Menu Liquid Dropdown */
      .nav-menu {
        transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55), opacity 0.4s ease !important;
        transform: translateY(-100%) scale(0.9) !important;
        border-radius: 0 0 40px 40px !important;
      }
      
      .nav-menu.open {
        transform: translateY(0) scale(1) !important;
        border-radius: 0 0 40% 40% / 0 0 10% 10% !important; /* Fluid look at the bottom */
      }
    }
"""

content = content.replace("  </style>", custom_css + "\n  </style>")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
