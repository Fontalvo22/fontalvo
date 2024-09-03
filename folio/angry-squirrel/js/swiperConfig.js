document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 5,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        loopFillGroupWithBlank: true,
        breakpoints: {
            600: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true,
            },
            1024: {
                slidesPerView: 6,
                spaceBetween: 20,
                loop: true,
            },
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    const swiper2 = new Swiper(".second-swiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        loopFillGroupWithBlank: true,
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
            },
        },

        navigation: {
            nextEl: ".swiper-button-next-second",
            prevEl: ".swiper-button-prev",
        },
    });
    console.log(swiper2);
});