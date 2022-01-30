const burgerMenu = () => {
  const headerBurger = document.querySelector('.header__burger-wrap'),
    menu = document.querySelector('.menu'),
    overal = document.querySelector('.overal'),
    headerLink = document.querySelector('.header-main__link');

  headerBurger.addEventListener('click', () => {
    menu.classList.toggle('active');
    headerBurger.classList.toggle('active');
    overal.classList.toggle('active');
    headerLink.classList.toggle('active');
  });

  overal.addEventListener('click', () => {
    menu.classList.remove('active');
    headerBurger.classList.remove('active');
    overal.classList.remove('active');
    headerLink.classList.remove('active');
  });
};

export default burgerMenu;