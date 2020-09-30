document.addEventListener("DOMContentLoaded",() => {

  const body = document.body;
  const dropLinks = document.querySelectorAll(".products__link.drop");
  const navLinks = document.querySelectorAll(".nav__link.drop");
  const faqLinks = document.getElementsByClassName("faq__item");
  let windowWidth = window.innerWidth;


  window.addEventListener('resize', (event) => {
    windowWidth = window.innerWidth;

    windowWidth >= 768
      ? replaceCart(true) // replace cart to top
      : replaceCart(false);  // replace cart to bottom

    windowWidth >= 1250
      ? replaceNav(true) // replace nav after logo
      : replaceNav(false);

    windowWidth >= 768
      ? replaceOperating(true) // Replace operating after initial page
      : replaceOperating(false);


    // roll up all drop navigation when user resize window
    for (let j = 0; j < dropLinks.length; ++j) {
      dropLinks[j]
        .parentElement
        .classList
        .remove('visible');
    }

    // Hide header nav and header phone
    body.classList.remove('phone-visible');
    body.classList.remove('nav-visible');

  });

// Toggle phone at the header on mobile screen
  const headerPhoneBtn = document.getElementById('headerPhoneBtn');
  const toggleHeaderPhone = () => {
    body
      .classList
      .toggle('phone-visible');
    body
      .classList
      .remove('nav-visible');

    closeAccordion();
  };
  headerPhoneBtn.addEventListener('click', toggleHeaderPhone);


// Toggle navigation at the header on mobile screen
  const navTgglr = document.getElementById('navTgglr');
  const toggleHeaderNav = () => {
    body
      .classList
      .toggle('nav-visible');

    body
      .classList
      .remove('phone-visible');

    closeAccordion();
  };
  navTgglr.addEventListener('click', toggleHeaderNav);


  const closeAccordion =  () => {
    for (let i = 0; i < dropLinks.length; ++i) {
      dropLinks[i]
        .parentElement
        .classList
        .remove('visible');
    }

    for (let i = 0; i < navLinks.length; ++i) {
      navLinks[i]
        .parentElement
        .classList
        .remove('visible');
    }
  };


// Replace cart at the header on mobile screen
  const cart = document.getElementById("cart");
  const headerBottom = document.getElementById("headerBottom");
  const headerTop = document.getElementById("headerTop").firstChild;

  const replaceCart = (move) => {
    move
      ? headerTop.appendChild(cart)
      : headerBottom.appendChild(cart);
  };

  // Replace cart after initial page
  windowWidth >= 768
    ? replaceCart(true)
    : replaceCart(false);





// Replace operating at the header on mobile screen
  const operating = document.getElementById("operating");

  const replaceOperating = (move) => {
    move
      ? headerBottom.appendChild(operating)
      : body.prepend(operating);
  };

  // Replace operating after initial page
  windowWidth >= 768
    ? replaceOperating(true)
    : replaceOperating(false);




// Replace navigation at the header on mobile screen
  const headerBottomContainer = document.getElementById("headerBottomContainer");
  const headerTopNav = document.getElementById("headerTopNav");
  const nav = document.getElementById("nav");
  const region = document.getElementById("region");
  const logo = document.getElementById("logo");

  const replaceNav = (move) => {
    if (move) {
      logo.after(nav);
      region.after(headerTopNav);
    } else {
      nav.appendChild(headerTopNav);
      headerBottomContainer.prepend(nav);
    }
  };

  windowWidth >= 1250
    ? replaceNav(true) // replace nav after logo
    : replaceNav(false);



// Nav accordion for mobile version
  if (windowWidth <=1250) {

    // Toggle product dropdown
    for (let i = 0; i < dropLinks.length; ++i) {
      dropLinks[i].addEventListener('click', event => {

        event.preventDefault(); // stopping click on link

        let prntClasses = event.target.parentElement.classList;
        let isVisible = prntClasses.contains('visible');

        closeAccordion();

        isVisible
          ? prntClasses.remove('visible')
          : prntClasses.add('visible');
      });
    }

    // Toggle nav dropdown
    for (let i = 0; i < navLinks.length; ++i) {
      navLinks[i].addEventListener('click', event => {

        event.preventDefault(); // stopping click on link

        let prntClasses = event.target.parentElement.classList;
        let isVisible = prntClasses.contains('visible');

        closeAccordion();

        isVisible
          ? prntClasses.remove('visible')
          : prntClasses.add('visible');
      });
    }


  }






// FAQ accordion
  const closeFaqAccordion = () => {
    for (let i = 0; i < faqLinks.length; ++i) {
      faqLinks[i].classList.remove("visible");
    }
  };

  for (let i = 0; i < faqLinks.length; ++i) {
    faqLinks[i].addEventListener('click', event => {
      let li = event.target.closest('li');
      let isVisible = li.classList.contains('visible');

      closeFaqAccordion();

      isVisible
        ? li.classList.remove('visible')
        : li.classList.add('visible');
    });
  }





// Input FILE
  let inputs = document.querySelectorAll(".label_file input");

  for (let i = 0; i < inputs.length; i++) {
    let controller = inputs[i].nextElementSibling;

    inputs[i].addEventListener('change', (event) => {
      controller.innerHTML = event.target.value.split('\\').pop();
    });
  }








});






// ***Янадекс нары -- Начало
if (document.getElementById("map")) {
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  ymaps.ready(init);
  function init(){
    // Создание карты.
    let myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [54.90063335092027,51.65889470515492],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 4,
        controls: ['fullscreenControl', 'zoomControl'],
      }),

      myPlacemarkAsfaltobeton = new ymaps.Placemark([55.76, 37.64], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/placemark-asfaltobeton.png',
        iconImageSize: [200, 43],
        iconImageOffset: [-16, -43]
      }),

      myPlacemarkEkaterinburg = new ymaps.Placemark([56.78875104810377,60.60157099999987], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/placemark-ekaterinburg.png',
        iconImageSize: [236, 43],
        iconImageOffset: [-15, -43]
      }),

      myPlacemarkLipeck = new ymaps.Placemark([52.60358425779388,39.59623749999995], {}, {
        iconLayout: 'default#image',
        iconImageHref: '/img/placemark-lipeck.png',
        iconImageSize: [183, 43],
        iconImageOffset: [-15, -43]
      });

    myMap.geoObjects
      .add(myPlacemarkAsfaltobeton)
      .add(myPlacemarkEkaterinburg)
      .add(myPlacemarkLipeck);

    myMap.behaviors.disable('scrollZoom');
  }
}
// ***Янадекс нары -- Конец