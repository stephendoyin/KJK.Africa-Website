import Swiper from 'swiper/js/swiper';
import { isNull } from 'util';

class SwiperSection {
    constructor() {

        this.rightArrow = document.querySelector('.testimonials__trigger--right');
        this.leftArrow = document.querySelector('.testimonials__trigger--left');
        if (!(isNull(this.rightArrow))) {
            this.slideInit();
            this.triggerSlider();
        }
    }



    slideInit() {
        this.mySwiper = new Swiper('.swiper-container', {
            effect: 'flip',
            autoplay: {
                delay: 9000,
            },
            loop: true,
            speed: 800,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        });

        this.anotherSwiper = new Swiper('.swiper-container-two', {
            loop: true,
            speed: 600,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        this.yetAnotherSwiper = new Swiper(".corouzel__container", {
            loop: true,
            speed: 800,
            autoplay: {
                delay: 9000,
                disableOnInteraction: false,
            },
            slidesPerView: 4,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                    slidesPerView: 2,
                },
                // when window width is >= 480px
                480: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                // when window width is >= 640px
                600: {
                    slidesPerView: 3,
                },
                1000: {
                    slidesPerView: 4,
                },
                1200: {
                    slidesPerView: 4
                }
            }
        })
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


export default SwiperSection;