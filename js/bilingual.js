const TRANSLATIONS = {
  en: { dir: 'ltr', font: "'DM Sans', sans-serif", toggle: 'عربي' },
  ar: { dir: 'rtl', font: "'Cairo', sans-serif", toggle: 'English' }
};

function applyLanguage(lang) {
  const config = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = config.dir;
  document.body.style.fontFamily = config.font;
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('[data-ph-' + lang + ']').forEach(el => {
    el.placeholder = el.getAttribute('data-ph-' + lang);
  });
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = config.toggle;
  localStorage.setItem('lang', lang);
  // Notify typewriter if active
  if (window.typewriterSetLang) window.typewriterSetLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'en' ? 'ar' : 'en');
  });
});
