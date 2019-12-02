import 'owl.carousel';


class Testimonials {

    constructor() {
        this.startSlider();
    }

    startSlider() {
        let owl = $(".owl-three").owlCarousel({
            items: 1,
            nav: false,
            dots: false,
            loop: true,
            autoplay: true,
            autoplayTimeout: 10000

        });

        $('.testimonials__trigger--left').click(function () {
            owl.trigger('prev.owl.carousel')
        })


        $('.testimonials__trigger--right').click(function () {
            owl.trigger('next.owl.carousel')
        })
    }



}


export default Testimonials;



