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
    } else {
      headerTop.style.background = "none"
    }
    
    if (scrollTop>= scrollTop2 && mediaQuery.matches) {
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
  
  
  btn1.addEventListener('click', ()=> {
    if(!btn1.classList.contains('btn_dark') && !btn2.classList.contains('btn_transparent') && !btn2.classList.contains('btn_transparent-blue')) {
      
      btn1.classList.remove('btn_transparent')
      btn1.classList.remove('btn_transparent-blue')
      btn1.classList.add('btn_dark')
      
      btn2.classList.remove('btn_dark')
      btn2.classList.add('btn_transparent')
      btn2.classList.add('btn_transparent-blue')
      sw1.style.display = 'flex'
      swi2.style.display = 'none'
    } 
  })
  btn2.addEventListener('click', ()=> {
    if(!btn2.classList.contains('btn_dark') && !btn1.classList.contains('btn_transparent') && !btn1.classList.contains('btn_transparent-blue')) {
      
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
  //инициализация слайдера
  if(window.innerWidth<= 665) {
    const swiperPagoda = new Swiper('.swiper__pagoda', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
    direction: 'horizontal',
    spaceBetween: 'auto',
    lazy: true,
    autoHeight: true,
    // loop: true,
    // rewind: true,
    autoplay: {
      delay: 3000, // задержка между слайдами в миллисекундах
      // enabled: true,    
      disableOnInteraction: true, // отключается при взаимодействии
    },
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
      // dynamicBullets: true,
    },
  });
  const swiperDvuskat = new Swiper('.swiper__dvuskat', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
    direction: 'horizontal',
    spaceBetween: 'auto',
    lazy: true,
    autoHeight: true,
    // loop: true,
    // rewind: true,
    autoplay: {
      delay: 5000, // задержка между слайдами в миллисекундах
      // enabled: true,    
      disableOnInteraction: true, // отключается при взаимодействии
    },
    pagination: {
      el: '.swiper-pagination3',
      type: 'bullets',
      clickable: true,
      // dynamicBullets: true,
    },
  });

  const swiper3 = new Swiper('.swiper3', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
    direction: 'horizontal',
    spaceBetween: 'auto',
    lazy: true,
    autoHeight: true,
    // loop: true,
    // rewind: true,
    autoplay: {
      delay: 5000, // задержка между слайдами в миллисекундах
      // enabled: true,    
      disableOnInteraction: true, // отключается при взаимодействии
    },
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
      // dynamicBullets: true,
    },
  });
  const swiperFaq = new Swiper('.swiper__faq', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    // centeredSlides: true,
    direction: 'horizontal',
    spaceBetween: 'auto',
    lazy: true,
    autoHeight: true,
    // loop: true,
    // rewind: true,
    autoplay: {
      delay: 5000, // задержка между слайдами в миллисекундах
      // enabled: true,    
      disableOnInteraction: true, // отключается при взаимодействии
    },
    pagination: {
      el: '.swiper-pagination2',
      type: 'bullets',
      clickable: true,
      // dynamicBullets: true,
    },
  });
console.log('Swiper inizialised')
  }
  
  
  // function checkScreenAndInitSwiper() {
  //   // Устанавливаем нужный диапазон разрешений (например, от 768px)
  //   const mediaQuery = window.matchMedia('(max-width: 665px)');

  //   if (mediaQuery.matches) {
  //     // Если разрешение больше или равно 768px, инициализируем Swiper
  //     swiperPagoda.init();
  //     console.log("Swiper initialized");
  //     swiperDvuskat.init();
  //     console.log("Swiper initialized");
  //     swiper3.init();
  //     console.log("Swiper initialized");
  //     swiperFaq.init();
  //     console.log("Swiper initialized");
      
      
  //     console.log("Swiper initialized");
  //   } else {
  //     // Если разрешение меньше 768px, уничтожаем Swiper
  //     swiperPagoda.destroy(true); // true - уничтожить слайды, false - не удалять элементы из DOM
  //     swiperDvuskat.destroy(true); // true - уничтожить слайды, false - не удалять элементы из DOM
  //     swiper3.destroy(true); // true - уничтожить слайды, false - не удалять элементы из DOM
  //     swiperFaq.destroy(true); // true - уничтожить слайды, false - не удалять элементы из DOM
  //     console.log("Swiper destroyed");
  //   }
  // }
  // checkScreenAndInitSwiper();
  // window.addEventListener('resize', checkScreenAndInitSwiper);
  



  //подключение флагов в форму
  const tel = document.querySelector("#tel");
  window.intlTelInput(tel, {
    separateDialCode: false,
    excludeCountries: ["in", "il"],
    preferredCountries: ["ru", "jp", "pk", "no"]
  });

  // Burger
  // const burger = document.getElementById("burger");
  // const nav = document.getElementById("nav");
  // const links = Array.from(document.querySelectorAll("burger__menu-link"));

  // burger.addEventListener("click", () => {
  //   nav.classList.toggle("active");
  //   burger.classList.toggle("burger--active");
  // document.body.classList.toggle("stop-scroll");
  // });

  //cookies

  // const cookiesBtn = document.querySelector(".cookie__button");
  // const cookies = document.querySelector(".cookie");
  // function getCookies() {
  //   setTimeout(() => {
  //     cookies.classList.add("active");
  //   }, 2000);
  // }
  // cookiesBtn.addEventListener("click", function () {
  //   cookies.classList.remove("active");
  // });

  //Появление блоков по скроллу
  // const hero = document.querySelector(".hero");
  // const steps = document.querySelector(".steps");
  // const recent = document.querySelector(".recent");
  // const scrollCards = Array.from(document.querySelectorAll(".recent__card"));
  // const scrollCards1 = [scrollCards[0], scrollCards[1], scrollCards[2]];
  // const scrollCards2 = [scrollCards[3], scrollCards[4], scrollCards[5]];
  // const scrollCards3 = [scrollCards[6], scrollCards[7], scrollCards[8]];

  // const technique = document.querySelector(".technique");
  // const contacts = document.querySelector(".contacts");

  // document.addEventListener("DOMContentLoaded", function () {
  //   setTimeout(() => {
  //     hero.classList.add("active");
  //     steps.classList.add("active");
  //     getCookies();
  //   }, 100);
  // });

  // document.addEventListener("scroll", function () {
  //   let scrollTop = window.scrollY;

  //   let heroHeight = hero.offsetHeight;
  //   let stepsHeight = heroHeight + steps.offsetHeight;
  //   let recentCards = stepsHeight + recent.offsetHeight;
  //   let recentCards2 = stepsHeight + recent.offsetHeight / 3;
  //   let recentCards5 = stepsHeight + recent.offsetHeight / 5;
  //   let techniqueHeight = recentCards + technique.offsetHeight / 3;

  // if (scrollTop >= heroHeight / 3) {
  //   steps.classList.add('active');
  // } else {
  //   steps.classList.remove('active');
  // }

  //   if (scrollTop >= stepsHeight) {
  //     scrollCards1.forEach((card) => {
  //       card.classList.add("animation-class");
  //     });
  //   } else {
  //     scrollCards1.forEach((card) => {
  //       card.classList.remove("animation-class");
  //     });
  //   }

  //   if (scrollTop >= recentCards5) {
  //     scrollCards2.forEach((card) => {
  //       card.classList.add("animation-class");
  //     });
  //   } else {
  //     scrollCards2.forEach((card) => {
  //       card.classList.remove("animation-class");
  //     });
  //   }
  //   if (scrollTop >= recentCards5 + recentCards5 / 5) {
  //     scrollCards3.forEach((card) => {
  //       card.classList.add("animation-class");
  //     });
  //   } else {
  //     scrollCards3.forEach((card) => {
  //       card.classList.remove("animation-class");
  //     });
  //   }
  //   if (scrollTop >= recentCards2) {
  //     technique.classList.add("active");
  //   } else {
  //     technique.classList.remove("active");
  //   }
  //   if (scrollTop >= techniqueHeight) {
  //     contacts.classList.add("active");
  //   } else {
  //     contacts.classList.remove("active");
  //   }
  // });

  // let heroHeight = hero.offsetHeight;
  // let stepsHeight = hero.offsetHeight + steps.offsetHeight;

  // const scrollAnimation = () => {
  //   let windowCenter = window.innerHeight / 2 + window.scrollY;
  // };

  // scrollAnimation();
  // window.addEventListener("scroll", () => {
  //   scrollAnimation();
  // });

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

  //Плавное исчезновение placeholder

  // const nameField = document.getElementById("name");
  // const nameFieldCover = document.getElementById("placeholder1");

  // nameFieldCover.addEventListener("click", function () {
  //   nameFieldCover.style.opacity = "0";
  //   nameFieldCover.style.zIndex = "-1";
  //   nameField.focus();
  // });
  // nameField.addEventListener("focusout", function (e) {
  //   if (nameField.value == "") {
  //     nameFieldCover.style.opacity = "1";
  //     nameFieldCover.style.zIndex = "10";
  //     nameField.blur();
  //   }
  // });

  //изменение стиля карточки по наведению
  // const cards = Array.from(document.querySelectorAll(".technique__card"));

  // cards.forEach((card) => {
  //   card.addEventListener("mouseover", function (e) {
  //     let cardCurrent = e.currentTarget;

  //     cardCurrent.style.borderColor = "#DA7000";
  //     let cardName = cardCurrent.querySelector(".technique__name");

  //     cardName.style.color = "#DA7000";
  //   });
  // });
  // cards.forEach((card) => {
  //   card.addEventListener("mouseout", function (e) {
  //     let cardCurrent = e.currentTarget;
  //     cardCurrent.style.borderColor = "#DDDDDD";

  //     let cardName = cardCurrent.querySelector(".technique__name");
  //     cardName.style.color = "#0E0E0E";
  //   });
  // });
  // cards.forEach((card) => {
  //   card.addEventListener("click", function (e) {
  //     let cardCurrent = e.currentTarget;
  //     cardCurrent.style.borderColor = "#EE8414";

  //     let cardName = cardCurrent.querySelector(".technique__name");
  //     cardName.style.color = "#EE8414";

  //     let cardImg = cardCurrent.querySelector(".technique__svg");
  //     cardImg.classList.add("active");
  //   });
  // });

  //Popup
  // const footerPopup = document.querySelector(".footer__popup");
  // const footerPopupButton = document.querySelector(".footer__popup-button");
  // const aboutClinica = document.querySelector(".about__clinica");

  // footerPopupButton.addEventListener("click", () => {
  //   footerPopup.classList.remove("active");
  // });
  // aboutClinica.addEventListener("mouseover", () => {
  //   footerPopup.classList.add("active");
  // document.body.classList.toggle("stop-scroll");
  // });

  // footerPopup.addEventListener("mouseover", () => {
  // 	footerPopup.classList.add('active');

  // });
});


