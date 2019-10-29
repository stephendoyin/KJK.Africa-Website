import $ from 'jquery';

class CountLine {

    constructor() {
        this.textarea = $(".footer__quote__input--msg");
        this.countLine();
        this.unCountLine();
    }

    countLine() {
        $(this.textarea).focus(function () {
            $(this).attr('rows', '2');
        });
    }

    unCountLine() {
        $(this.textarea).blur(function () {
            $(this).attr('rows', '1');
        })
    }







}


export default CountLine;