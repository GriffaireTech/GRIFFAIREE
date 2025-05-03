// Fade in sections on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });
  
  document.querySelectorAll('.fade-in').forEach((el) => {
    observer.observe(el);
  });
  
  // Auto-update footer year
  document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.year');
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  });
  