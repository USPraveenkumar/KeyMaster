function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  document.getElementById('current-year').textContent = currentYear;
});

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('body'); 
  if (window.scrollY > 50) { 
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
})

