const fs = require('fs');
const filePath = 'c:\\\\Users\\\\marke\\\\Desktop\\\\Mohamed-Portfolio\\\\index.html';

try {
  let content = fs.readFileSync(filePath, 'utf8');

  const styleStart = content.indexOf('<style>');
  const styleEnd = content.indexOf('</style>');

  if (styleStart === -1 || styleEnd === -1) {
    console.error('Could not find <style> block.');
    process.exit(1);
  }

  let originalStyle = content.substring(styleStart + '<style>'.length, styleEnd);

  let newStyle = originalStyle;
  newStyle = newStyle.replace(/--bg-base:\s*#[0-9a-fA-F]+;/g, '--bg-base: #0A0A0A;');
  newStyle = newStyle.replace(/--bg-surface:\s*#[0-9a-fA-F]+;/g, '--bg-surface: rgba(255, 255, 255, 0.03);');
  newStyle = newStyle.replace(/--bg-elevated:\s*#[0-9a-fA-F]+;/g, '--bg-elevated: rgba(255, 255, 255, 0.05);');
  newStyle = newStyle.replace(/--accent-teal:\s*#[0-9a-fA-F]+;/g, '--accent-teal: #00F0FF;');
  newStyle = newStyle.replace(/--accent-blue:\s*#[0-9a-fA-F]+;/g, '--accent-blue: #B026FF;');
  newStyle = newStyle.replace(/--accent-green:\s*#[0-9a-fA-F]+;/g, '--accent-green: #00FFAA;');
  newStyle = newStyle.replace(/--transition:\s*0\.3s\s+ease;/g, '--transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);');

  const glassmorphismOverrides = `
/* ========================================= */
/* AI UX REDESIGN MASTER OVERRIDES           */
/* ========================================= */

body {
  position: relative;
  overflow-x: hidden;
  font-family: var(--font-body);
}

/* Background Glowing Orbs */
body::before, body::after {
  content: '';
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  filter: blur(140px);
  z-index: -1;
  opacity: 0.4;
  pointer-events: none;
  animation: orbFloat 20s infinite alternate ease-in-out;
}

body::before {
  top: -100px;
  left: -150px;
  background: radial-gradient(circle, #B026FF 0%, transparent 60%);
}

body::after {
  bottom: -150px;
  right: -100px;
  background: radial-gradient(circle, #00F0FF 0%, transparent 60%);
  animation-delay: -10s;
}

@keyframes orbFloat {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(100px, 50px) scale(1.2); }
}

/* Glassmorphism Classes */
.terminal-card,
.skill-category-card,
.project-card,
.timeline-content,
.edu-card,
.cert-card,
.contact-form-wrapper,
.tools-row,
.contact-icon,
.contact-socials a,
.btn-secondary {
  background: rgba(255, 255, 255, 0.03) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border: 1px solid rgba(255, 255, 255, 0.05) !important;
  border-radius: 16px !important;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1) !important;
}

/* Navbar specific glassmorphism */
#navbar {
  background: rgba(10, 10, 10, 0.6) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
}

/* Interactive Whimsy (Hover Effects for Cards) */
.terminal-card:hover,
.skill-category-card:hover,
.project-card:hover,
.timeline-content:hover,
.edu-card:hover,
.cert-card:hover,
.contact-form-wrapper:hover {
  transform: translateY(-8px) scale(1.01) !important;
  border-color: rgba(0, 240, 255, 0.4) !important;
  box-shadow: 0 20px 40px rgba(0, 240, 255, 0.15), 0 0 20px rgba(176, 38, 255, 0.1) !important;
  background: rgba(255, 255, 255, 0.05) !important;
}

/* Button & Interactive Elements Glow */
.btn-primary, .btn-cv, .submit-btn {
  background: linear-gradient(135deg, #00F0FF, #B026FF) !important;
  color: #0A0A0A !important;
  border: none !important;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1) !important;
}

.btn-primary:hover, .btn-cv:hover, .submit-btn:hover {
  box-shadow: 0 0 20px rgba(0, 240, 255, 0.6), 0 0 30px rgba(176, 38, 255, 0.4) !important;
  transform: translateY(-3px) scale(1.05) !important;
}

.btn-primary::before, .btn-cv::before, .submit-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transition: all 0.4s ease;
  z-index: -1;
}

.btn-primary:hover::before, .btn-cv:hover::before, .submit-btn:hover::before {
  left: 100%;
}

/* Typography Overrides */
h1, h2, h3, h4, .hero-name, .section-title, .about-headline {
  font-weight: 700 !important;
  letter-spacing: -0.02em !important;
  line-height: 1.2 !important;
}

.hero-name, .section-title {
  background: linear-gradient(135deg, #FFF 30%, #00F0FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.hero-bio {
  line-height: 1.8 !important;
  font-weight: 500 !important;
}

/* Gradients on text */
.greeting-line, #typewriter, .logo-code {
  background: linear-gradient(90deg, #00F0FF, #B026FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent !important;
  font-weight: 700;
}

/* Make Timeline Dots glow */
.timeline-dot {
  background-color: var(--accent-teal) !important;
  border-color: #0A0A0A !important;
  box-shadow: 0 0 15px var(--accent-teal), 0 0 5px var(--accent-teal) inset !important;
}

/* Glowing Form Inputs */
.form-group input, .form-group textarea, .form-group select {
  background: rgba(0, 0, 0, 0.3) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(8px) !important;
  color: #FFF !important;
  border-radius: 12px !important;
  transition: all 0.4s ease !important;
}

.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
  border-color: #00F0FF !important;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.3) !important;
  background: rgba(0, 0, 0, 0.5) !important;
  outline: none !important;
}

/* Hover effects for tool icons */
.tool-icon {
  background: rgba(255, 255, 255, 0.05) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.tool-icon:hover {
  background: rgba(0, 240, 255, 0.1) !important;
  border-color: #00F0FF !important;
  color: #00F0FF !important;
  box-shadow: 0 0 15px rgba(0, 240, 255, 0.4) !important;
}

/* Skills bar fill with gradient */
.skill-bar-fill {
  background: linear-gradient(90deg, #B026FF, #00F0FF) !important;
  box-shadow: 0 0 10px rgba(0, 240, 255, 0.5) !important;
}

/* Social links glow */
.social-links a:hover, .footer-socials a:hover, .contact-socials a:hover {
  background: rgba(176, 38, 255, 0.1) !important;
  border-color: #B026FF !important;
  color: #B026FF !important;
  box-shadow: 0 0 15px rgba(176, 38, 255, 0.4) !important;
  transform: translateY(-5px) scale(1.1) !important;
}

/* Fixing hero image border gradient */
.photo-border {
  background: conic-gradient(from 0deg, #0A0A0A, #00F0FF, #B026FF, #0A0A0A) !important;
}
`;

  newStyle = newStyle + "\n" + glassmorphismOverrides + "\n  ";

  const newContent = content.substring(0, styleStart + '<style>'.length) + newStyle + content.substring(styleEnd);

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log('Successfully updated the CSS.');
} catch (err) {
  console.error('Error:', err);
}
