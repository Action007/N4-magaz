"use strict";

const animations = () => {
  const popupBtn = document.querySelector('.blog__popup'),
    blog = document.querySelector('.blog__popup');

  const wowJs = () => {
    const WOW = require('wowjs');

    window.wow = new WOW.WOW();
    window.wow.init();
  };

  const youtubePopup = () => {

  };

  if (blog) {
    popupBtn.addEventListener('click', (event) => {
    });
    wowJs();
  }
}

export default animations;