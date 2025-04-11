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
    let swiperPromotion = new Swiper(".swiperPromotion", {
        loop: false,
        slidesPerView: "auto",
        centeredSlides: false,
        spaceBetween: 16,
        breakpoints: {
            961: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });
    let swiperVideoRews = new Swiper(".swiperVideoRews", {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        navigation: {
            nextEl: ".rew_vid .sw-btn-next",
            prevEl: ".rew_vid .sw-btn-prev",
        },
        pagination: {
            el: ".rew_vid .swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            961: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },

    });
    let swiperRews = new Swiper(".swiperRews", {
        loop: false,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            961: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },

    });

    console.log('addSwiper.js finish work');

});