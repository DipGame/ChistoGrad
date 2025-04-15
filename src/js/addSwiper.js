document.addEventListener("DOMContentLoaded", function () {

    let swiperObjects = new Swiper(".swiperObjects", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
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
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
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
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
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
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
        breakpoints: {
            961: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },

    });

    const swiperHowWork = new Swiper(".swiperHowWork", {
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
        loop: true, // Бесконечная прокрутка
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 8,
        breakpoints: {
            721: {
                spaceBetween: 40,
                slidesPerView: "auto",
                centeredSlides: true,
            },
        },
        pagination: {
            el: ".swiperHowWork-pagin",
            clickable: true,
        },
    });
    const swiperObject = new Swiper(".swiperObject", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
        loop: true, // Бесконечная прокрутка
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
        breakpoints: {
            1281: {
                spaceBetween: 30,
                slidesPerView: "auto",
                centeredSlides: true,
            },
        },
        pagination: {
            el: ".swiperObject-pagin",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiperObject-next",
            prevEl: ".swiperObject-prev",
        },
    });
    const swiperObjectImg = new Swiper(".swiperObjectImg", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        speed: 1000, // Длительность анимации
        on: {
            progress: function () {
                this.slides.forEach((slide) => {
                    const progress = slide.progress;
                    slide.style.opacity = 1 - Math.abs(progress); // Изменение прозрачности
                    slide.style.transform = `scale(${1 - Math.abs(progress) * 0.2})`; // Изменение масштаба
                });
            },
            setTransition: function (duration) {
                this.slides.forEach((slide) => {
                    slide.style.transitionDuration = `${duration}ms`; // Применить длительность анимации
                });
            },
        },
        loop: true, // Бесконечная прокрутка
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 15,
        navigation: {
            nextEl: ".swiperObjectImg-next",
            prevEl: ".swiperObjectImg-prev",
        },
        
    });

    console.log('addSwiper.js finish work');
});