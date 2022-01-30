const accordion = () => {
  const accordion = document.querySelector('.accordion');
  if (accordion) {
    const add = document.querySelectorAll('.questions__add'),
      items = accordion.querySelectorAll('.accordion__item'),
      title = accordion.querySelectorAll('.accordion__title');

    const toggleAccordion = (target) => {
      const thisItem = target.parentNode;

      items.forEach(item => {
        if (thisItem === item) return thisItem.classList.toggle('active');

        item.classList.remove('active');
      });

      add.forEach(item => {
        if (target === item) return target.classList.toggle('active');

        item.classList.remove('active');
      });
    };

    if (title) title.forEach(question => question.addEventListener('click', (event) => {
      toggleAccordion(event.target);
    }));
  }
};

export default accordion;