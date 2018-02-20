var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center:[55.76, 37.64], // Москва
        zoom:6
    });

    myMap.controls
        // Кнопка изменения масштаба.
        .add('zoomControl', { left: 5, top: 5 })
        // Список типов карты
        .add('typeSelector');
}

function showCity(city) {
    
    var myGeocoder = ymaps.geocode(city);
    myGeocoder.then(
        function (res) {
            //alert('Координаты объекта :' + res.geoObjects.get(0).geometry.getCoordinates());
            var coord = res.geoObjects.get(0).geometry.getCoordinates();
            myMap.setCenter (coord, 7);
            
           var placemark = new ymaps.Placemark(coord, {
                
                iconContent: city
                }, {
                preset: "twirl#yellowStretchyIcon",
                // Отключаем кнопку закрытия балуна.
                balloonCloseButton: false,
                // Балун будем открывать и закрывать кликом по иконке метки.
                hideIconOnBalloonOpen: false
                });
            myMap.geoObjects.add(placemark);
            
        },
        function (err) {
            alert('Ошибка');
        }
    );   
 }   