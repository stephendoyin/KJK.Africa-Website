import Swiper from 'swiper';

class SwiperJs {
    constructor() {
        this.rightArrow = document.querySelector('.testimonials__trigger--right');
        this.leftArrow = document.querySelector('.testimonials__trigger--left');
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            effect: 'flip',
            speed: 600,
            autoplay: {
                delay: 9000,
            },
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });
        this.triggerSlider();
    }


    triggerSlider() {
        this.rightArrow.addEventListener('click', () => {
            this.mySwiper.slideNext();
        });
        this.leftArrow.addEventListener('click', () => {
            this.mySwiper.slidePrev();
        });
    }
}


export default SwiperJs;