const smoothScroll = () => {
  const up = document.querySelector('.scroll-top'),
    down = document.querySelectorAll('.blog__scroll'),
    blog = document.querySelector('.blog');

  if (down) down.forEach(element => {
    element.addEventListener('click', (e) => {
      window.scrollTo({
        top: blog.offsetHeight - 67,
        behavior: "smooth"
      });
      e.preventDefault();
    });
  });

  up.addEventListener('click', (e) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
};

export default smoothScroll;