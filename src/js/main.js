// 📁 main.js

// Янадекс нары -- Начало
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
    zoom: 5,
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