const productLoading = () => {
  let from = 0,
    to = 12,
    start = true;

  const shopInner = document.querySelector('.shop-items'),
    shopFormSelect = document.querySelector('.shop-select__wrap'),
    addBtn = document.querySelector('.shop__add-btn');

  if (shopInner && shopFormSelect) {
    const addCard = (item) => {
      shopInner.insertAdjacentHTML('beforeend',
        `
          <article class="shop__item animate__zoomIn animate__animated wow" data-id="${item.id}">
            <div class="shop__wrapper">
              <a class="shop__img" href="#">
              ${(item.status === "sale") ? `
              <span class="shop__status shop__status--sale">${item.status.toUpperCase()}</span>
              ` : ''}
              ${(item.status === "hot") ? `
              <span class="shop__status shop__status--hot">${item.status.toUpperCase()}</span>
              ` : ''}
              ${(item.status === "new") ? `
              <span class="shop__status shop__status--new">${item.status.toUpperCase()}</span>
              ` : ''}
                <img src="${item.img}" alt="${item.name}">
              </a>
              <div class="shop__wrap">
                <a class="shop__name" href="#">${item.name}</a>
                ${(item.newPrice) ? `
                <div class="shop__price-wrap">
                <span class="shop__price shop__price--none">${item.price}</span>
                <span class="shop__price shop__price--new">${item.newPrice}</span>
                </div>
              ` : `<span class="shop__price">${item.price}</span>`}
                <button class="shop__btn link-btn" data-id="${item.id}">
                  Add to card
                </button>
              </div>
            </div>
          </article>
      `);

      if (start) {
        window.scrollTo({ top: 0 });
        start = false;
      }
    };

    const addElemClick = (arr, zero = false) => {
      addBtn.textContent = 'Show More';
      addBtn.classList.remove('_hold');
      if (zero === true) {
        from = 0;
        to = 12;
        addBtn.classList.remove('shop__add-btn--none');
      }

      if (to <= arr.length) {
        for (from; from < to; from++) {
          addCard(arr[from]);
        }
        to += 12;
      }

      if (to > arr.length) addBtn.classList.add('shop__add-btn--none');
    };

    const filterArr = (arr, event) => {
      const select1 = shopFormSelect.options[shopFormSelect.selectedIndex].value,
        target = event.target.options[event.target.selectedIndex].value;

      while (shopInner.firstChild) {
        shopInner.firstChild.remove();
      }

      if (target === '1') {
        arr.sort((a, b) => a.price.substring(1) - b.price.substring(1));
        arr.sort((a, b) => a.newPrice ? a.newPrice.substring(1) - b.price.substring(1) : '');
      } else if (target === '2') {
        arr.sort((a, b) => b.price.substring(1) - a.price.substring(1));
        arr.sort((a, b) => b.newPrice ? b.newPrice.substring(1) - a.price.substring(1) : '');
      } else {
        arr.sort((a, b) => {
          const nameA = a.name.toLowerCase(),
            nameB = b.name.toLowerCase();

          if (nameA < nameB) return -1;

          if (nameA > nameB) return 1;

          return 0;
        });
      }

      addElemClick(arr, true);
    };

    const firstAddElem = (arr) => {
      arr.sort((a, b) => {
        const nameA = a.name.toLowerCase(),
          nameB = b.name.toLowerCase();

        if (nameA < nameB) return -1;

        if (nameA > nameB) return 1;

        return 0;
      });

      addElemClick(arr);

      shopFormSelect.addEventListener('change', (event) => {
        filterArr(arr, event);
      });

      addBtn.addEventListener("click", () => {
        addBtn.textContent = 'Loading...';
        addBtn.classList.add('_hold');

        setTimeout(() => addElemClick(arr), 500);
      });
    };

    const getArray = () => {
      const postData = () => {
        return fetch('./json/products.json');
      };

      postData()
        .then(response => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          return response.json();
        })
        .then(response => {
          firstAddElem(response);
        })
        .catch(error => console.log(error));
    };

    getArray();
  }
};

export default productLoading;