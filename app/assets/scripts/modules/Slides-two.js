

class SlidesTwo {

    constructor() {
        this.startSlider();
    }

    startSlider() {
        $('.owl-two').owlCarousel({
            items: 1,
            dots: true,
            dotsEach: true,
            autoplayHoverPause: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000,

        });
    }

}


export default SlidesTwo;