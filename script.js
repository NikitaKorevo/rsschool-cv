const mediaQuery = window.matchMedia('(max-width: 768px)');
const imgRSSchool = document.querySelector('.footer__rsschool');
const buttonBurger = document.querySelector('.header__burger-button');
const headerList = document.querySelector('.header__list');

if (mediaQuery.matches) {
  imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-white.svg');
}

mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-white.svg');
  } else {
    imgRSSchool.setAttribute('src', './src/images/content/footer__rsschool-black.svg');
    buttonBurger.style.backgroundImage = "url('./src/icons/button-close.svg')";
    headerList.style.display = '';
    if (!buttonBurger.classList.contains('header__burger-button--close')) {
      buttonBurger.classList.add('header__burger-button--close');
    }
  }
});

const toggleBurger = () => {
  if (!mediaQuery.matches) return;
  if (buttonBurger.classList.toggle('header__burger-button--close')) {
    buttonBurger.style.backgroundImage = "url('./src/icons/button-close.svg')";
    headerList.style.animationName = 'smooth-departure-back';
    headerList.style.left = '-120%';
    setTimeout(() => {
      headerList.style.display = '';
    }, 300);
  } else {
    buttonBurger.style.backgroundImage = "url('./src/icons/button-open.svg')";
    headerList.style.animationName = 'smooth-departure';
    headerList.style.display = 'block';
    headerList.style.left = '0';
  }
}

buttonBurger.addEventListener('click',() => toggleBurger());

const clickListItem = (e) => {
  if (e.target.classList.contains('header__item')) toggleBurger();
}

headerList.addEventListener('click', (e) => clickListItem(e));