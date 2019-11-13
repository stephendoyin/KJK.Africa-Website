import 'owl.carousel';


class Slides {

    constructor() {
        this.triggerSlider();
        this.images = document.querySelectorAll(".brands__img");
        this.triggercolor();
        this.previousNumber = 0;
        this.randNum = 0;
    }

    randomizeImg() {
        this.previousNumber = this.randNum;
        this.randNum = Math.floor(Math.random() * 12);
        return this.randNum;
    }

    colorRandomLogo() {
        this.images[this.randomizeImg()].classList.add('brands__img--colored');
        this.images[this.previousNumber].classList.remove('brands__img--colored');
    }

    triggercolor() {
        setInterval(() => {
            this.colorRandomLogo();
        }, 2000)
    }

    triggerSlider() {
        $('.owl-one').owlCarousel({
            items: 4,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                500: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
            items: 8,
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplaySpeed: 4000,
            autoplayHoverPause: false,
        });
    }



}


export default Slides;



