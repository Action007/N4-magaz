'use strict';

const addBasketProductReview = () => {
  const shopItems = document.querySelector('.shop-items'),
    basketSvg = document.querySelector('.header-main__basket'),
    shopBasket = document.querySelector('.shop-basket'),
    body = document.querySelector('body'),
    shopContainer = document.querySelector('.main');

  let x = 1;

  let localAppData = localStorage.getItem('localAppData') ?
    JSON.parse(localStorage.getItem('localAppData')) : [];


  const localSetRemove = () => {
    const shopBasketList = document.querySelectorAll('.shop-basket__wrapper');

    localStorage.clear();
    let localAppData = localStorage.getItem('localAppData') ?
      JSON.parse(localStorage.getItem('localAppData')) : [];

    shopBasketList.forEach(item => {
      const title = item.querySelector('.shop-basket__text').textContent,
        src = item.querySelector('.shop-basket__img img').src,
        price = item.querySelector('.shop-basket__price').textContent,
        id = item.dataset.cardId,
        amount = item.querySelector('.shop-basket__number span').textContent;

      localAppData.push({
        title,
        src,
        price,
        id,
        amount
      });
    });

    localStorage.setItem('localAppData', JSON.stringify(localAppData));
  };

  const addElemBasket = (title, src, price, amount = 1) => {
    return `
        <a class="shop-basket__img" href="#">
          <img src="${src}" alt="${title}">
        </a>
        <div class="shop-basket__inner">
          <a class="shop-basket__text" href="#">${title}</a>
          <div class="shop-basket__box">
            <span class="shop-basket__price">${price}</span>
            <a class="shop-basket__delete" href="#"></a>
          </div>
          <div class="shop-basket__number">
            Quantity: <span>${amount}</span>
          </div>
        </div>`;
  };

  const getLocal = () => {
    const cardList = document.querySelector('.shop-basket__items');

    while (cardList.firstChild) {
      cardList.firstChild.remove();
    }

    localAppData.forEach(item => {
      cardList.insertAdjacentHTML('beforeend',
        `<li class="shop-basket__wrapper" data-card-id="${item.id}">
            ${addElemBasket(item.title, item.src, item.price, item.amount)}
            </li>`);
    });
  };



  const totalBasketPrice = () => {
    const totalPrice = document.querySelector('.shop-basket__total'),
      basketPrice = document.querySelectorAll('.shop-basket__price'),
      basketAmount = document.querySelector('.header-main__num'),
      amountItems = document.querySelectorAll('.shop-basket__number span');
    basketAmount.textContent = 0;

    if (basketPrice && totalPrice) {
      totalPrice.textContent = 0;

      basketPrice.forEach(item => {
        const amount = item.parentNode.parentNode.querySelector('.shop-basket__number span').textContent;

        totalPrice.textContent =
          '$' + (+totalPrice.textContent.substring(1) + (item.textContent.substring(1) * amount));
      });
    }

    amountItems.forEach(item => {
      basketAmount.textContent = Number(basketAmount.textContent) + Number(item.textContent);
    });
  };

  const filledBasket = () => {
    shopBasket.insertAdjacentHTML('afterbegin',
      `
        <span class="shop-basket__head">Your Card</span>
      `);

    shopBasket.insertAdjacentHTML('beforeend',
      `
        <div class="shop-basket__wrap">
          <span class="shop-basket__desc">TOTAL</span>
          <span class="shop-basket__total">$</span>
        </div>
      `
    );
  };

  const emptyBasket = () => {
    shopBasket.insertAdjacentHTML('beforeend',
      `<span class="shop-basket__span">No products in the card.</span>`);
    shopBasket.classList.remove('active');
  };

  const checkBasket = () => {
    const basketItem = document.querySelector('.shop-basket__wrapper'),
      totalPrice = document.querySelector('.shop-basket__wrap'),
      items = document.querySelectorAll('.shop-basket__wrap'),
      span = document.querySelector('.shop-basket__span'),
      cardText = document.querySelector('.shop-basket__head');

    if (basketItem) {
      if (!totalPrice) {

        if (span) span.remove();

        filledBasket();
      }
    } else {
      if (!span) {
        emptyBasket();
      }

      if (items) items.forEach(element => element.remove());

      if (cardText) cardText.remove();
    }
  };

  const addProductReview = (id, img, name, price, newPrice) => {
    shopContainer.insertAdjacentHTML('beforeend',
      `
      <section class="breadcrumbs">
        <div class="breadcrumbs__wrapper">
          <div class="breadcrumbs__inner">
            <h1 class="breadcrumbs__title">${name}</h1>
            <ul class="breadcrumbs__items">
              <li class="breadcrumbs__item">
                <a class="breadcrumbs__link" href="index.html">Home</a>
              </li>
              <li class="breadcrumbs__item">
                <a class="breadcrumbs__link" href="shop.html">Shop</a>
              </li>
              <li class="breadcrumbs__item">
                <span class="breadcrumbs__link">${name}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
  
      <section class="products">
        <div class="container">
          <div class="card">
            <div class="product-slider">
              <div class="product-slider__showcase">
                <div class="product-slider__img active">
                  <img src="${img}" alt="">
                </div>
                <div class="product-slider__img">
                  <img src="./img/products/SamsungGalaxyS21.png" alt="">
                </div>
                <div class="product-slider__img">
                  <img src="./img/products/XiaomiMi11Pro.png" alt="">
                </div>
              </div>
              <div class="product-slider__select">
                <div class="product-slider__item">
                  <div class="product-slider__btn">
                    <img class="product-slider__src" src="${img}">
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-slider__btn">
                    <img class="product-slider__src" src="./img/products/SamsungGalaxyS21.png">
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-slider__btn">
                    <img class="product-slider__src" src="./img/products/XiaomiMi11Pro.png">
                  </div>
                </div>
              </div>
            </div>
            <div class="product-content">
              <h2 class="product-content__title">${name}</h2>
              ${(newPrice) ? `
                <div class="shop__price-wrap">
                <span class="product-content__price product-content__price--none">${price}</span>
                <span class="product-content__price">${newPrice}</span>
                </div>
              ` : `<span class="product-content__price">${price}</span>`}
              <div class="product-content__text">
                <p>
                  Meet Pixel 4, the ultimate Google phone with the speed of 5G. It has the helpful stuff you need in a
                  phone, with an
                  extra boost of 5G speed. So you can download a movie in seconds, take stunning ultrawide photos in any
                  light, and keep
                  going with an all-day battery that can last up to 48 hours with Extreme Battery Saver.
                </p>
              </div>
              <div class="product-content__number">
                <div class="product-content__wrap">
                  <button class="product-content__btn _minus" type="button">-</button>
                  <input class="product-content__num" type="number" value="1" data-id="${id}" disabled>
                  <button class="product-content__btn _plus" type="button">+</button>
                </div>
                <button class="product-content__submit link-btn" type="submit">
                  Add to Cart
                </button>
              </div>
              <div class="product-content__span">
                <span>Categories</span>: Audio, Technology
              </div>
            </div>
          </div>
  
          <div class="products-tabs">
            <div class="products-tabs__title active">
              Description
            </div>
            <div class="products-tabs__title">
              Additional Information
            </div>
          </div>
  
          <div class="products-desc">
            <div class="products-desc__text products-desc__content">
              <p>
                Enjoy pure sound, pure materials and pure expression with Beoplay H4 wireless headphones. These high
                quality
                headphones
                feature precise Bang & Olufsen Signature Sound; delivering music the way the artist intended it to be
                heard.
              </p>
              <p>
                Honest and authentic, the leather, aluminum and steel materials are carefully selected for comfort and
                fit.
                These
                expressive and contemporary Bluetooth headphones offer up to 19 hours of playtime per charge, so you can
                keep
                the music
                going while you’re on the move.
              </p>
            </div>
            <div class="products-desc__info products-desc__content product-tabs__content--none">
              <ul class="products-desc__list">
                <li class="products-desc__li">Weight</li>
                <li class="products-desc__li">Dimensions</li>
              </ul>
              <ul class="products-desc__list">
                <li class="products-desc__li">100 kg</li>
                <li class="products-desc__li">20 × 150 × 200 cm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
  
      <section class="subscribe">
        <div class="join">
          <div class="container">
            <div class="join__wrapper">
              <h3 class="join__title">
                Do you want to receive the newest trends and special offers?
                Sign up now and get 10% off your order.
              </h3>
              <p class="join__subtitle">
                We'll keep you up to date with our latest productss, discounts, insights, free resources, and much more.
              </p>
              <form class="join-form join__form">
                <input class="join-form__input join__input" type="email" placeholder="Enter your email">
                <button class="link-btn" type="submit">
                  Subscribe
                </button>
              </form>
              <span class="join__span">Don't worry, we won't spam you.</span>
            </div>
          </div>
        </div>
      </section>
        `
    );
  };

  const addBasket = (id, img, name, price, quantity) => {
    const cardProduct = document.querySelector(`[data-card-id="${id}"]`),
      cardList = document.querySelector('.shop-basket__items'),
      cardProductContent = addElemBasket(name, img, price, quantity),
      num = cardProduct ? cardProduct.querySelector('.shop-basket__number span') : '';

    if (!cardProduct) {
      cardList.insertAdjacentHTML('beforeend',
        `<li class="shop-basket__wrapper" data-card-id="${id}">${cardProductContent}</li>`);
    } else {
      num.textContent = Number(num.textContent) + Number(quantity);
    }

    checkBasket();
    totalBasketPrice(true);
    localSetRemove();
  };


  const productAmount = (id, img, name, price, newPrice) => {
    const amount = document.querySelector('.product-content__number'),
      input = document.querySelector('.product-content__num'),
      submit = document.querySelector('.product-content__submit'),
      plus = document.querySelector('._plus'),
      minus = document.querySelector('._minus');

    const minusPlusElem = (plus) => {
      if (!plus && input.value > 1) input.value = +input.value - 1;
      if (plus) input.value = +input.value + 1;
    };

    amount.addEventListener('click', (event) => {
      if (event.target === plus) {
        minusPlusElem(true);
      } else if (event.target === minus) {
        minusPlusElem(false);
      } else if (event.target === submit) {
        if (newPrice) {
          addBasket(id, img, name, newPrice, input.value);
        } else {
          addBasket(id, img, name, price, input.value);
        }
      }
    });
  };

  const tabs = () => {
    const tabHeader = document.querySelector('.products-tabs');

    if (tabHeader) {
      const tab = tabHeader.querySelectorAll('.products-tabs__title'),
        tabContent = document.querySelectorAll('.products-desc__content');

      const toggleTab = (index) => {
        for (let i = 0; i < tabContent.length; i++) {
          if (index === i) {
            tab[i].classList.add('active');
            tabContent[i].classList.remove('product-tabs__content--none');
          } else {
            tab[i].classList.remove('active');
            tabContent[i].classList.add('product-tabs__content--none');
          }
        }
      };
      tabHeader.addEventListener('click', (event) => {
        let target = event.target;
        target = target.closest('.products-tabs__title');

        if (target) {
          tab.forEach((item, index) => {
            if (item === target) {
              toggleTab(index);
            }
          });
          return;
        }
      });
    }
  };

  const productImageSlider = () => {
    const selectBtn = document.querySelector('.product-slider'),
      img = document.querySelectorAll('.product-slider__img img');

    if (selectBtn) {
      const changeImg = (target) => {
        if (target.classList.contains('product-slider__src')) {
          img.forEach(item => {
            if (target.src === item.src) {
              item.parentNode.classList.add('active');
            } else {
              item.parentNode.classList.remove('active');
            }
          });
        }
      };
      selectBtn.addEventListener('click', (event) => changeImg(event.target));
    }
  };

  const productReview = (elem) => {
    let item = elem.parentNode.parentNode,
      id = item.parentNode.dataset.id,
      img = item.querySelector('.shop__img img').src,
      name = item.querySelector('.shop__name').textContent,
      price = item.querySelector('.shop__price').textContent,
      newPrice = item.querySelector('.shop__price--new');

    while (shopContainer.firstChild) {
      shopContainer.firstChild.remove();
    }

    window.scrollTo({ top: 0 });


    if (newPrice) {
      addProductReview(id, img, name, price, newPrice.textContent);
      productAmount(id, img, name, price, newPrice.textContent);
    } else {
      addProductReview(id, img, name, price);
      productAmount(id, img, name, price);
    }

    tabs();
    productImageSlider();
  };

  const addToBasket = (productButton, productId) => {
    const cardProduct = document.querySelector(`[data-card-id="${productId}"]`),
      cardList = document.querySelector('.shop-basket__items'),
      cardProductQuantity = cardProduct ? cardProduct.querySelector('.shop-basket__number span') : '';

    if (!cardProduct) {
      const product = document.querySelector(`[data-id="${productId}"]`),
        productPrice = product.querySelector('.shop__price--new') ?
          product.querySelector('.shop__price--new') : product.querySelector('.shop__price'),
        cardProductImg = product.querySelector('.shop__img img'),
        cardProductTitle = product.querySelector('.shop__name').innerHTML,
        cardProductContent =
          addElemBasket(cardProductTitle, cardProductImg.src, productPrice.textContent);
      cardList.insertAdjacentHTML('beforeend',
        `<li class="shop-basket__wrapper" data-card-id="${productId}">${cardProductContent}</li>`);
    } else {
      cardProductQuantity.innerHTML = ++cardProductQuantity.innerHTML;
    }

    productButton.classList.remove('_hold');

    checkBasket();
    totalBasketPrice(true);
    localSetRemove();
  };

  const addToCard = (productButton, productId) => {
    if (!productButton.classList.contains('_hold')) {
      const product = document.querySelector(`[data-id="${productId}"]`),
        productImg = product.querySelector('.shop__img img'),
        productImgFly = productImg.cloneNode(true),
        productImgFlyWidth = productImg.offsetWidth,
        productImgFlyHeight = productImg.offsetHeight,
        productImgFlyTop = productImg.getBoundingClientRect().top,
        productImgFlyLeft = productImg.getBoundingClientRect().left;

      productButton.classList.add('_hold');
      productButton.classList.add('_fly');

      productImgFly.setAttribute('class', '_flyImage _ibg');
      productImgFly.style.cssText =
        `
          left: ${productImgFlyLeft}px;
          top: ${productImgFlyTop}px;
          width: ${productImgFlyWidth}px;
          height: ${productImgFlyHeight}px;
          `;

      document.body.append(productImgFly);

      const cardFlyLeft = basketSvg.getBoundingClientRect().left,
        cardFlyTop = basketSvg.getBoundingClientRect().top;

      productImgFly.style.cssText =
        `
          left: ${cardFlyLeft}px;
          top: ${cardFlyTop}px;
          width: 0px;
          height: 0px;
          opacity: 0;
          `;

      productImgFly.addEventListener('transitionend', () => {
        if (productButton.classList.contains('_fly')) {
          productImgFly.remove();
          addToBasket(productButton, productId);
          productButton.classList.remove('_fly');
        }
      });
    }
  };

  const removeBasketItem = (event) => {
    const productId = event.target.closest('.shop-basket__wrapper').dataset.cardId;
    const cardProduct = document.querySelector(`[data-card-id="${productId}"]`);

    event.preventDefault();
    if (cardProduct) cardProduct.remove();

    checkBasket();
    totalBasketPrice(false);
    localSetRemove();
  };

  body.addEventListener('click', (event) => {
    const basket = event.target.closest('.basket-btn'),
      addItem = event.target.closest('.shop__btn'),
      basketWrapper = event.target.closest('.shop-basket'),
      removeItem = event.target.closest('.shop-basket__delete'),
      addBtn = event.target.closest('.product-content__number');

    if (basket) {
      shopBasket.classList.toggle('active');
    } else if (!basket && !addItem && !basketWrapper && !removeItem && !addBtn) {
      shopBasket.classList.remove('active');
    }
  });

  if (shopItems) {
    shopItems.addEventListener('click', (event) => {
      if (event.target.classList.contains('shop__btn')) {
        addToCard(event.target, event.target.dataset.id);
      }

      if (event.target.closest('.shop__img') || event.target.classList.contains('shop__name')) {
        event.preventDefault();
        productReview(event.target);
      }
    });
  }

  shopBasket.addEventListener('click', (event) => {
    if (event.target.classList.contains('shop-basket__delete')) {
      removeBasketItem(event);
    }

    if (event.target.closest('.shop-basket__img') || event.target.closest('.shop-basket__text')) {
      const elem = event.target.closest('.shop-basket__wrapper'),
        img = elem.querySelector('.shop-basket__img img').src,
        name = elem.querySelector('.shop-basket__text').textContent,
        price = elem.querySelector('.shop-basket__price').textContent;

      event.preventDefault();

      while (shopContainer.firstChild) {
        shopContainer.firstChild.remove();
      }

      shopBasket.classList.remove('active');

      addProductReview(elem.dataset.cardId, img, name, price);

      window.scrollTo({ top: 0 });

      productAmount(elem.dataset.cardId, img, name, price);
      tabs();
      productImageSlider();
    }
  });

  getLocal();
  checkBasket();
  totalBasketPrice();
};

export default addBasketProductReview;