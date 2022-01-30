'use strict';

import sliders from './modules/sliders';
import scrollSticky from './modules/scrollSticky';
import check from './modules/check';
import burgerMenu from './modules/burgerMenu';
import smoothScroll from './modules/smoothScroll';
import accordion from './modules/accordion';
import productLoading from './modules/productLoading';
import addBasketProductReview from './modules/addBasketProductReview';
import animations from './modules/animations';

// ALL SLIDERS
sliders();

// HEADER SCROLL STICKY
scrollSticky();

// CHECKBOX PRICE
check();

// BURGER MENU
burgerMenu();

// SMOOTH SCROLL MAIN PAGE
smoothScroll();

// QUESTIONS ACCORDION
accordion();

// PRODUCT LOADING
productLoading();

// ADD ELEM BASKET AND PRODUCT REVIEW
addBasketProductReview();

// GSAP PLUGIN ANIMATIONS
animations();