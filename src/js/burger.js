export const initMobileMenu = () => {
  const page = document.querySelector('html');
  const burgerButton = document.querySelector('.header-menu__toggle');

  burgerButton.addEventListener('click', () => {
    page.classList.toggle('js-menu-open');

    const isMenuOpen = page.classList.contains('js-menu-open');

    if (isMenuOpen) {
      burgerButton.setAttribute('aria-expanded', 'true');
    } else {
      burgerButton.setAttribute('aria-expanded', 'false');
    }
  });
};
