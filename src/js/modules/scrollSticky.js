const scrollSticky = () => {
  window.addEventListener("scroll", () => {
    const menu = document.querySelector(".header-main");
  
    menu.classList.toggle("sticky", window.scrollY > 54);
  });
};

export default scrollSticky;