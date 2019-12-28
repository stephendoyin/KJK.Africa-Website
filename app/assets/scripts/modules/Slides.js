import 'owl.carousel';


class Slides {

    constructor() {
        this.triggerSlider();
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
            autoplayTimeout: 5000,
            autoplaySpeed: 300,
            autoplayHoverPause: false,
        });
    }



}


export default Slides;



