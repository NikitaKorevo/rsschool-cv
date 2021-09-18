const mediaQuery = window.matchMedia('(max-width: 768px)');
const imgRSSchool = document.querySelector('.footer__rsschool');

if (mediaQuery) {
  imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-white.svg');
}

mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-white.svg');
  } else {
    imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-black.svg');
  }
});