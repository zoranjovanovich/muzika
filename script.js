class SiteNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="site-nav-bar">
        <div class="wrap">
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
              <li class="site-nav__item site-nav__item--donate"><a class="btn btn--donate site-nav__donate" href="/#funds">Doniraj</a></li>
            </ul>
          </nav>
        </div>
      </div>
    `;
  }
}
customElements.define('site-nav', SiteNav);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="section stage" aria-labelledby="footer-title">
        <div class="wrap footer-grid">
          <div>
            <span class="eyebrow">kontakt</span>
            <h2 id="footer-title">Ostani povezan</h2>
            <p>Donacije su transparentne. Račun je otvoren za proveru, a svaki izveštaj će biti objavljen online.</p>
            <div class="footer-social" aria-label="Pratite nas na mrežama">
              <a href="#" aria-label="Facebook" class="footer-social__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="4"></rect><path d="M14 21v-7h2.5l.5-3H14V9.5A1.5 1.5 0 0 1 15.5 8H17V5h-2a4 4 0 0 0-4 4v2H9v3h2v7"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" class="footer-social__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg>
              </a>
              <a href="#" aria-label="TikTok" class="footer-social__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4v9.5a4 4 0 1 1-3-3.87V4z"></path><path d="M16 4a4 4 0 0 0 4 4"></path></svg>
              </a>
              <a href="#" aria-label="YouTube" class="footer-social__link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"></rect><path d="M10 9l6 3-6 3V9z" fill="currentColor" stroke="none"></path></svg>
              </a>
            </div>
          </div>
          <div class="footer-links">
            <a class="site-nav__link" href="/transparentnost.html">Izveštaji o donacijama</a>
            <a class="site-nav__link" href="/kontakt.html">Kontakt</a>
            <p class="muted" style="margin-top:0.5rem;">TODO: broj računa</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);

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

  const revealTargets = document.querySelectorAll('.section h2, .card');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (revealTargets.length && 'IntersectionObserver' in window && !reduceMotion) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px 120px 0px' });

    revealTargets.forEach(function (el) {
      el.classList.add('js-reveal');
      revealObserver.observe(el);
    });
  }
});

