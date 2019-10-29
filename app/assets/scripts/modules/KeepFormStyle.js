import $ from 'jquery';

class KeepFormStyle {

    constructor() {
        this.footerInput = $(".footer__quote__input");
        this.footerLabel = $('.footer__label')
        this.keepStyle();
    }


    keepStyle() {
        $(this.footerInput).blur(function (e) {

            if (this.value.trim().length !== 0) {
                this.nextElementSibling.classList.add('footer__label--keep');
            } else {
                this.nextElementSibling.classList.remove('footer__label--keep');
            }

            console.log(typeof (this.value.trim()))

        })
    }
    // footer__label--keep
}


export default KeepFormStyle;