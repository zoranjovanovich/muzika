document.addEventListener('DOMContentLoaded', function () {
  const scrollNext = document.getElementById('scrollNext');
  const nextSection = document.getElementById('shows');
  const nav = document.querySelector('.site-nav');
  const toggle = document.querySelector('.site-nav__toggle');

  if (scrollNext && nextSection) {
    scrollNext.addEventListener('click', function () {
      nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nextSection.querySelector('h2')?.focus();
    });
  }

  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      const isOpen = nav.classList.toggle('site-nav--open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});

