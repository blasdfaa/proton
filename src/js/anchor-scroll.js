export const anchorScrollInit = () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();

      const hash = anchor.getAttribute('href');
      const target = document.querySelector(hash);

      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      history.pushState(null, null, hash);
    });
  });
};
