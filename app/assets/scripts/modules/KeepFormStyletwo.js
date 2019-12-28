

class KeepFormStyleTwo {

    constructor() {
        this.footerInput = $(".quote-form__input");
        this.footerLabel = $('.quote-form__label');
        this.keepStyle();
    }


    keepStyle() {
        $(this.footerInput).blur(function (e) {

            if (this.value.trim().length !== 0) {
                this.nextElementSibling.classList.add('quote-form__label--keep');
            } else {
                this.nextElementSibling.classList.remove('quote-form__label--keep');
            }

            console.log(typeof (this.value.trim()));

        })
    }
    // footer__label--keep
}


export default KeepFormStyleTwo;