class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="site-nav" aria-label="Glavni meni">
        <a class="site-nav__brand" href="/">O.U.R. LIVE</a>
        <button class="site-nav__toggle" aria-expanded="false" aria-controls="site-menu" aria-label="Meni" type="button">☰</button>
        <ul id="site-menu" class="site-nav__list">
          <li class="site-nav__item"><a class="site-nav__link" href="/">Početna</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/o-projektu.html">O projektu</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/svirke/">Svirke</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/muzicari.html">Muzičari</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/partneri.html">Partneri</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/transparentnost.html">Transparentnost</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/vesti/">Vesti</a></li>
          <li class="site-nav__item"><a class="site-nav__link" href="/kontakt.html">Kontakt</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('site-nav', SiteNav);

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

