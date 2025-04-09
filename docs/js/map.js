document.addEventListener("DOMContentLoaded", function () {
    if (document.querySelector('#map')) {
        ymaps.ready(init);

        function init() {
            // Создаем SVG-иконку
            var svgIcon = `<svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.669 0.639941L3.05894 7.74605C1.56891 8.744 0.731407 10.4725 0.868754 12.2663L1.94512 26.3237C2.14354 28.9152 4.29455 30.9163 6.88173 30.9163H24.1182C26.7054 30.9163 28.8564 28.9152 29.0548 26.3237L30.1312 12.2663C30.2685 10.4725 29.431 8.744 27.941 7.74605L17.3309 0.639941C16.2222 -0.102637 14.7777 -0.102637 13.669 0.639941ZM11.3739 23.1279C10.7354 23.1279 10.2177 23.6456 10.2177 24.2842C10.2177 24.9228 10.7354 25.4404 11.3739 25.4404H19.6259C20.2645 25.4404 20.7822 24.9228 20.7822 24.2842C20.7822 23.6456 20.2645 23.1279 19.6259 23.1279H11.3739Z" fill="#0080F7"/>
</svg>
`;

            // Создаем карту
            var myMap = new ymaps.Map("map", {
                center: [54.710266, 55.977987], // Москва
                zoom: 16,
                controls: []
            });

            // Создаем метку с SVG-иконкой
            var myPlacemark = new ymaps.Placemark([54.710266, 55.977987], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'data:image/svg+xml;base64,' + btoa(svgIcon),
                iconImageSize: [29, 30],
                iconImageOffset: [-15, -15]
            });

            // Добавляем метку на карту
            myMap.geoObjects.add(myPlacemark);
        }
    }
})