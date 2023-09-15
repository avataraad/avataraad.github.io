window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

let hamburger = document.querySelector('#hamburger');
let navLinks = document.querySelector('#nav-links');
let navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});

window.addEventListener("load", (event) => {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
});