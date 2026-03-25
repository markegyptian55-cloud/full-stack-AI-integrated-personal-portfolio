/**
 * skills-fx.js
 * Handles skill bar animations and intersection observers
 */

document.addEventListener('DOMContentLoaded', () => {
    initSkillBars();
    initScrollAnimations();
});

function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-fill');
    
    // Observer for skill bars
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const widthTarget = bar.getAttribute('data-width');
                if (widthTarget) {
                    // Set width to trigger CSS transition
                    bar.style.width = widthTarget;
                }
                observer.unobserve(bar);
            }
        });
    }, { 
        threshold: 0.1, 
        rootMargin: '0px 0px -50px 0px' 
    });
    
    skillBars.forEach(bar => {
        observer.observe(bar);
    });
}

function initScrollAnimations() {
    // Add logic to animate elements up when scrolled into view
    // if not already handled by another core script.
    const animElements = document.querySelectorAll('.animate-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing after it becomes visible
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animElements.forEach(el => {
        observer.observe(el);
    });
}
