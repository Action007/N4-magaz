import Swiper from 'swiper/bundle';

const sliders = () => {
  const slider1 = new Swiper('.team-slider', {
    spaceBetween: 30,
    slidesPerGroup: 1,
    slidesPerView: 1,
    breakpoints: {
      600: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1100: {
        slidesPerGroup: 4,
        slidesPerView: 4,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  const slider2 = new Swiper('.brands-slider', {
    spaceBetween: 30,
    slidesPerGroup: 1,
    slidesPerView: 1,
    breakpoints: {
      400: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      860: {
        slidesPerGroup: 3,
        slidesPerView: 3,
      },
      1100: {
        slidesPerGroup: 6,
        slidesPerView: 6,
      },
    },
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    },
  });

  const slider3 = new Swiper('.creative-slider__wrapper', {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
  });

  const slider5 = new Swiper('.service-rate__wrapper', {
    slidesPerView: 1,
    spaceBetween: 150,
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  });

  const slider6 = new Swiper('.agency-slider--work', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      860: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.agency-slider__next',
      prevEl: '.agency-slider__prev',
    },
  });

  const slider7 = new Swiper('.agency-slider--about', {
    spaceBetween: 30,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const slider8 = new Swiper('.country-slider, .custom-slider__wrapper', {
    spaceBetween: 30,
    slidesPerGroup: 1,
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      760: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
    }
  });
};

export default sliders;