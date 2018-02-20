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
        zoom:5
    });


}


function showCity(city) {
    var myGeocoder = ymaps.geocode(city);
    
    myGeocoder.then(
    function (res) {
        //alert('Координаты объекта :' + res.geoObjects.get(0).geometry.getCoordinates());
        
        myPlacemark1 = new ymaps.Placemark(res.geoObjects.get(0).geometry.getCoordinates(), {
            // Свойства.
            // Содержимое иконки, балуна и хинта.
            iconContent: '1',
            balloonContent: 'Балун',
            hintContent: 'Стандартный значок метки'
        }, {
            // Опции.
            // Стандартная фиолетовая иконка.
            preset: 'twirl#violetIcon'
        })
    },
    function (err) {
        alert('Ошибка');
    }
);   
   
   
   
   
   
   /* // Поиск координат центра Нижнего Новгорода.
    ymaps.geocode(city, { results: 1 }).then(function (res) {
        // Выбираем первый результат геокодирования.
        var firstGeoObject = res.geoObjects.get(0),
        // Создаем карту с нужным центром.
            myMap = new ymaps.Map("map", {
                center: firstGeoObject.geometry.getCoordinates(),
                zoom: 5
            });

        
    }, function (err) {
        // Если геокодирование не удалось, сообщаем об ошибке.
        alert(err.message);
    });

*/

}

