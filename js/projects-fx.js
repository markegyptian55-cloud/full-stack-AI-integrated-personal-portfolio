// Projects JS — Filtering Animation logic
document.addEventListener('DOMContentLoaded', () => {
  initProjectFilter();
});

function initProjectFilter() {
  const tabs = document.querySelectorAll('.filter-tab');
  const cards = document.querySelectorAll('.project-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active from all tabs
      tabs.forEach(t => t.removeAttribute('data-active'));
      // Add active to clicked
      tab.setAttribute('data-active', 'true');

      const filter = tab.getAttribute('data-filter');

      // Reflow and filter
      cards.forEach(card => {
        const category = card.getAttribute('data-category');
        
        // Quick fade out
        card.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        
        // Wait for fade out
        setTimeout(() => {
          if (filter === 'all' || filter === category) {
            card.style.display = 'flex';
            // Force reflow
            void card.offsetWidth;
            
            // Fade in
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
          } else {
            card.style.display = 'none';
          }
        }, 200);
      });
    });
  });
}
