document.addEventListener('DOMContentLoaded', () => {


  //Плавный скролл
  const anchors = document.querySelectorAll('a[href*="#"]');

  for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const blockID = anchor.getAttribute("href").substring(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }
  //Анимация первого экрана
  const hero = document.querySelector('.header__inner')
  const title = document.querySelector('.header__title')
  const desc = document.querySelector('.header__desc')
  const btns = document.querySelector('.header__btns')


  hero.classList.add('active')
  title.classList.add('active')
  desc.classList.add('active')
  btns.classList.add('active')

  //изменение цвета header по scroll
  const headerInner = document.querySelector(".header__inner");
  const headerTop = document.querySelector(".header__top");
  const about = document.querySelector(".about");
  const products = document.querySelector(".products");
  const why = document.querySelector(".why");
  const selection = document.querySelector(".selection");
  document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let heroHeight = headerInner.offsetHeight;
    let aboutHeight = about.offsetHeight;
    let productsHeight = products.offsetHeight;
    let whyHeight = why.offsetHeight;
    let selectionHeight = selection.offsetHeight;
    let scrollTop2 = heroHeight + aboutHeight + productsHeight + whyHeight + selectionHeight

    const items = Array.from(document.querySelectorAll('.gallery__item'))
    const mediaQuery = window.matchMedia('(min-width: 665px)')

    if (scrollTop >= heroHeight) {
      headerTop.style.background = "#0A2341"
      headerTop.style.position = "fixed"
    } else {
      headerTop.style.background = "none"
      headerTop.style.position = "absolute"
    }

    if (scrollTop >= scrollTop2 && mediaQuery.matches) {
      items.forEach(item => {
        item.classList.add('active')
      })
    } else {
      items.forEach(item => {
        item.classList.remove('active')
      })
    }

  })
  //переключение по кнопкам по категории товаров
  const btn1 = document.querySelector('.btn-1')
  const btn2 = document.querySelector('.btn-2')
  const sw1 = document.querySelector('.swiper1')
  const sw2 = document.querySelector('.swiper2')

  btn1.addEventListener('click', () => {
    if (!btn1.classList.contains('btn_dark') && !btn2.classList.contains('btn_transparent') && !btn2.classList.contains('btn_transparent-blue')) {

      btn1.classList.remove('btn_transparent')
      btn1.classList.remove('btn_transparent-blue')
      btn1.classList.add('btn_dark')

      btn2.classList.remove('btn_dark')
      btn2.classList.add('btn_transparent')
      btn2.classList.add('btn_transparent-blue')
      sw1.style.display = 'flex'
      sw2.style.display = 'none'
    }
  })
  btn2.addEventListener('click', () => {
    if (!btn2.classList.contains('btn_dark') && !btn1.classList.contains('btn_transparent') && !btn1.classList.contains('btn_transparent-blue')) {

      btn2.classList.remove('btn_transparent')
      btn2.classList.remove('btn_transparent-blue')
      btn2.classList.add('btn_dark')

      btn1.classList.remove('btn_dark')
      btn1.classList.add('btn_transparent')
      btn1.classList.add('btn_transparent-blue')
      sw1.style.display = 'none'
      sw2.style.display = 'flex'
    }
  })


  // popap
  const cross = document.querySelector('.cross')
  const btnConsult = document.querySelector('.btn__consult')
  const popap = document.querySelector('.popap')


  btnConsult.addEventListener('click', () => {
    popap.style.display = 'block'

  })
  cross.addEventListener('click', () => {
    popap.style.display = 'none'

  })

  //инициализация слайдера

  const swiperReviews = new Swiper('.swiper__reviews', {
    direction: 'horizontal',
    slidesPerView: 2,
    slidesPerGroup: 1,
    spaceBetween: 20,
    // centeredSlides: true,
    speed: 2000,
    loop: false,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
      // При ширине >= 320px и до 980px показывать пагинацию
      0: {
        slidesPerView: 1,       
      },

      774: {
        slidesPerView: 2,        
      },
      // При ширине > 980px скрывать пагинацию
      
    },
  });

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.swiper__reviews .swiper-slide').length;

  let autoScrollInterval = null;
  let autoRestartTimeout = null; // таймер для автоповторного запуска

  const startAutoScroll = () => {
    if (autoScrollInterval) clearInterval(autoScrollInterval);
    autoScrollInterval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= totalSlides) currentIndex = 0;
      swiperReviews.slideTo(currentIndex, 2000);
    }, 2500);
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval) {
      clearInterval(autoScrollInterval);
      autoScrollInterval = null;
    }
    // Очищаем задержку перед повторным запуском
    if (autoRestartTimeout) {
      clearTimeout(autoRestartTimeout);
      autoRestartTimeout = null;
    }
  };

  // Функция для автоматического перезапуска через 4 сек
  const scheduleAutoScrollRestart = () => {
    // Очистить старый таймаут, если есть
    if (autoRestartTimeout) clearTimeout(autoRestartTimeout);
    autoRestartTimeout = setTimeout(() => {
      startAutoScroll();
    }, 4000);
  };

  // Запускаем автопрокрутку при загрузке
  startAutoScroll();

  // Обработчики для кнопок
  document.querySelector('.swiper-button-next1').addEventListener('click', () => {
    stopAutoScroll();
    currentIndex++;
    if (currentIndex >= totalSlides) currentIndex = 0;
    swiperReviews.slideTo(currentIndex, 2000);
    scheduleAutoScrollRestart(); // планируем автоповтор через 4 сек
  });
  document.querySelector('.swiper-button-prev1').addEventListener('click', () => {
    stopAutoScroll();
    currentIndex--;
    if (currentIndex < 0) currentIndex = totalSlides - 1;
    swiperReviews.slideTo(currentIndex, 2000);
    scheduleAutoScrollRestart(); // планируем автоповтор через 4 сек
  });

// Объекты слайдеров
const sliders = [
  { id: 'slider2', swiper: null, active: false, currentSlide: 0 },
  { id: 'slider3', swiper: null, active: false, currentSlide: 0 },
  { id: 'slider4', swiper: null, active: false, currentSlide: 0 },
  { id: 'slider5', swiper: null, active: false, currentSlide: 0 },
  { id: 'slider6', swiper: null, active: false, currentSlide: 0 },
];

let autoInterval = null;
let autoStartTimeout = null; // таймер для автозапуска через 4 сек

// Включение слайдера
function enableSwiper(slider) {
  if (slider.swiper) return;
  slider.swiper = new Swiper('#' + slider.id + ' .swiper', {
    direction: 'horizontal',
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 2000,
    allowTouchMove: true,
    loop: false,
    pagination: {
      el: '#' + slider.id + ' .swiper-pagination',
      clickable: true,
    },
  });

  slider.swiper.on('touchStart', () => {
    stopAuto();
    cancelAutoStart(); // при свайпе отменяем таймер автозапуска
  });

  slider.swiper.on('slideChange', () => {
    slider.currentSlide = slider.swiper.activeIndex;
  });

  slider.active = true;
}

// Отключение слайдера (без удаления DOM)
function disableSwiper(slider) {
  if (slider.swiper) {
    stopAuto(); // останавливаем автоп прокрутку
    cancelAutoStart(); // отменяем запуск через 4 сек, если был
    slider.swiper.allowTouchMove = false;
    slider.swiper.off('touchStart');
    slider.swiper.off('slideChange');
  }
  slider.active = false;
}

// Запуск автопрокрутки
function startAuto() {
  stopAuto();
  cancelAutoStart();

  autoInterval = setInterval(() => {
    sliders.forEach(s => {
      if (s.swiper) {
        let nextSlide = s.currentSlide + 1;
        if (nextSlide >= s.swiper.slides.length) nextSlide = 0;
        s.swiper.slideTo(nextSlide);
        s.currentSlide = nextSlide;
      }
    });
  }, 3500);
}

// Остановка автопрокрутки
function stopAuto() {
  if (autoInterval) {
    clearInterval(autoInterval);
    autoInterval = null;
  }
}

// Таймер для автоматического включения автопрокрутки через 4 сек
function scheduleAutoStart() {
  cancelAutoStart();
  autoStartTimeout = setTimeout(() => {
    startAuto();
  }, 4000);
}

// отменить таймаут автозапуска
function cancelAutoStart() {
  if (autoStartTimeout) {
    clearTimeout(autoStartTimeout);
    autoStartTimeout = null;
  }
}

// Обработка resize
function handleResize() {
  if (window.innerWidth < 665) {
    sliders.forEach(s => {
      if (!s.active) {
        enableSwiper(s);
        s.currentSlide = 0;
      }
    });
    startAuto();
  } else {
    sliders.forEach(s => {
      if (s.active && s.swiper) {
        disableSwiper(s);
      }
    });
    stopAuto();
  }
}

// Изначально
handleResize();

// Обработчик resize
window.addEventListener('resize', handleResize);






  //подключение флагов в форму
  const tel1 = document.querySelector("#tel1");
  window.intlTelInput(tel1, {
    separateDialCode: false,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
  });
  const tel2 = document.querySelector("#tel2");
  window.intlTelInput(tel2, {
    separateDialCode: false,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
  });
})

//Маска для тел

// let selector = document.querySelector(".tel");
// let im = new Inputmask("(999) 999-99-99");
// im.mask(selector);

//Валидация и отправка

// let validation = new JustValidate(".form");

// validation
//   .addField("#name", [
//     {
//       rule: "required",
//       errorMessage: "Это обязательное поле для заполнения!",
//     },
//     {
//       rule: "minLength",
//       value: 2,
//       errorMessage: "Минимум 2 символа!",
//     },
//   ])
//   .addField("#tel", [
//     {
//       validator: (value) => {
//         const phone = selector.inputmask.unmaskedvalue();
//         return Boolean(Number(phone) && phone.length > 0);
//       },
//       errorMessage: "Введите телефон",
//     },
//     {
//       validator: (value) => {
//         const phone = selector.inputmask.unmaskedvalue();
//         return Boolean(Number(phone) && phone.length === 10);
//       },
//       errorMessage: "Введите телефон полностью",
//     },
//   ])
//   .onSuccess(async function () {
//     let data = {
//       name: document.getElementById("name").value,
//       tel: selector.inputmask.unmaskedvalue(),
//       msg: document.getElementById("msg").value,
//     };

//     let response = await fetch("mail.php", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-Type": "application/json; charset=UTF-8",
//       },
//     });

//     let result = await response.text();

// alert(result)
// });
//смотрю данные инпута
// const formBtn = document.querySelector(".selection__btn")
// let selector = document.querySelector(".tel")
// console.log(selector)
// formBtn.addEventListener('submit', (e) => {
//   e.preventDefault()
//   console.log(selector.value)
// })






