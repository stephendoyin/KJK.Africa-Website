

class KeepFormStyleTwo {

    constructor() {
        this.quoteInput = document.querySelectorAll(".quote-form__input");
        this.quoteLabel = document.querySelectorAll('.quote-form__label');
        this.contactLabel = document.querySelectorAll('.contact-form__label');
        this.contactInput = document.querySelectorAll('.contact-form__input');
        this.keepStyle();
        this.keepStyleTwo();
    }


    // keepStyle() {
    //     $(this.footerInput).blur(function (e) {

    //         if (this.value.trim().length !== 0) {
    //             this.nextElementSibling.classList.add('quote-form__label--keep');
    //         } else {
    //             this.nextElementSibling.classList.remove('quote-form__label--keep');
    //         }

    //         console.log(typeof (this.value.trim()));

    //     })
    // }
    // footer__label--keep

    keepStyleTwo() {
        this.contactInput.forEach(item => {
            item.addEventListener('blur', function () {
                console.log(item.value)
                if (item.value.trim().length !== 0) {
                    item.nextElementSibling.classList.add('contact-form__label--keep');
                } else {
                    item.nextElementSibling.classList.remove('contact-form__label--keep');
                }
            })
        });
    }

    keepStyle() {
        this.quoteInput.forEach(item => {
            item.addEventListener('blur', function () {
                console.log(item.value)
                if (item.value.trim().length !== 0) {
                    item.nextElementSibling.classList.add('quote-form__label--keep');
                } else {
                    item.nextElementSibling.classList.remove('quote-form__label--keep');
                }
            })
        });
        console.log('working')
    }

}


export default KeepFormStyleTwo;