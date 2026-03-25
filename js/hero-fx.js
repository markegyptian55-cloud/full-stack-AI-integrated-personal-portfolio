document.addEventListener('DOMContentLoaded', () => {
  // 1. Canvas Animation
  function initCanvas() {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let particlesArray;

    function setSize() {
      canvas.width = window.innerWidth;
      const hero = document.getElementById('hero');
      canvas.height = hero ? hero.offsetHeight : window.innerHeight;
    }
    
    window.addEventListener('resize', setSize);
    setSize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.color = 'rgba(0, 201, 167, 0.5)'; // teal
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX = -this.speedX;
        if (this.y < 0 || this.y > canvas.height) this.speedY = -this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArray = [];
      for (let i = 0; i < 50; i++) {
        particlesArray.push(new Particle());
      }
    }

    function connect() {
      const maxDistance = 15000;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = dx * dx + dy * dy;
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(0, 201, 167, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      requestAnimationFrame(animate);
    }

    init();
    animate();
  }

  // 2. Typewriter
  function initTypewriter(rolesEn, rolesAr) {
    const el = document.getElementById('typewriter');
    if (!el) return;

    let currentLang = document.documentElement.lang || 'en';
    let roles = currentLang === 'en' ? rolesEn : rolesAr;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;
    let erasingDelay = 40;
    let newTextDelay = 2000;
    let timeoutId;

    function type() {
      clearTimeout(timeoutId);
      
      if (roleIndex >= roles.length) roleIndex = 0;
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        el.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        el.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      let nextDelay = isDeleting ? erasingDelay : typingDelay;

      if (!isDeleting && charIndex === currentRole.length) {
        nextDelay = newTextDelay;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        nextDelay = 500;
      }

      timeoutId = setTimeout(type, nextDelay);
    }

    window.typewriterSetLang = function(lang) {
      currentLang = lang;
      roles = currentLang === 'en' ? rolesEn : rolesAr;
      roleIndex = 0;
      charIndex = 0;
      isDeleting = false;
      clearTimeout(timeoutId);
      el.textContent = "";
      type();
    };

    type();
  }

  // 3. Stats Counter
  function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    if (!stats.length) return;

    const statsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          if (window.animateCounter) {
            window.animateCounter(entry.target, target, 2000);
          } else {
            entry.target.textContent = target; // fallback if core.js is missing
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));
  }

  // 4. Hamburger Mobile Nav
  function initHamburger() {
    const btn = document.getElementById('hamburger-btn');
    const menu = document.querySelector('.nav-menu');
    const links = document.querySelectorAll('.nav-link');

    if (!btn || !menu) return;

    function toggleMenu() {
      btn.classList.toggle('active');
      menu.classList.toggle('open');
      document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
    }

    btn.addEventListener('click', toggleMenu);

    links.forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
          toggleMenu();
        }
      });
    });
  }

  // Initialize all
  initCanvas();
  
  const rolesEn = ["Data Analyst", "BI Developer", "ML Engineer", "AI Enthusiast"];
  const rolesAr = ["محلل بيانات", "مطور ذكاء أعمال", "مهندس تعلم آلة", "متحمس للذكاء الاصطناعي"];
  initTypewriter(rolesEn, rolesAr);
  
  initStatsCounter();
  initHamburger();
});
