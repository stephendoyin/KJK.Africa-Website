import anime from 'animejs'

class HeaderMapAnim {

    constructor() {
        this.path = anime.path(".header__text__box path");
        this.startMotion();
    }

    startMotion() {
        anime({
            targets: '.circle',
            translateX: this.path('x'),
            translateY: this.path('y'),
            rotate: this.path('angle'),
            easing: 'linear',
            duration: 30000,
            loop: true
        });
    }



}


export default HeaderMapAnim;