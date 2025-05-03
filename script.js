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
  // Scroll to top button logic
const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollBtn.classList.remove('hide');
  } else {
    scrollBtn.classList.add('hide');
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Initially hide the button
scrollBtn.classList.add('hide');
