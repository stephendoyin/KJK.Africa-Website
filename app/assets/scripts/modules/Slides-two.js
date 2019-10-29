

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

        });
    }

}


export default SlidesTwo;