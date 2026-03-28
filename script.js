// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navMenu.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Navbar scroll shadow
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });
