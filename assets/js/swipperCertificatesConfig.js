const swipperConfig = {
    spaceBetween: 20,
    // loop: true,
    autoplay: {
        // delay: 100,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        // waitForTransition: true
    },
    reverseDirection: true,
    speed: 6000,
    slidesPerView: 2,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 3,
        },
    },
};

const swipperConfigSecond = {
    spaceBetween: 20,
    // loop: true,
    autoplay: {
        // delay: 100,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
        reverseDirection: true,
    },
    reverseDirection: true,
    speed: 6000,
    slidesPerView: 2,
    slidesPerView: 1,

    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1100: {
            slidesPerView: 3,
        },
    },
};

var swiper = new Swiper('.mySwiper-1', swipperConfig);
// swiper.autoplay.pause();

var swiperSecond = new Swiper('.mySwiper-2', swipperConfigSecond);

var swiperTestimonials = new Swiper('.testimonials', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
});
