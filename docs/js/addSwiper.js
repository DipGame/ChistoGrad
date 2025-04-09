document.addEventListener("DOMContentLoaded", function () {

    let swiperObjects = new Swiper(".swiperObjects", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        
        navigation: {
            nextEl: ".main_objects .sw-btn-next",
            prevEl: ".main_objects .sw-btn-prev",
        },
        breakpoints: {
            961: {
                slidesPerView: 2,
                spaceBetween: 30,
                initialSlide: 2,
            },
        },
    });

    console.log('addSwiper.js finish work');

});