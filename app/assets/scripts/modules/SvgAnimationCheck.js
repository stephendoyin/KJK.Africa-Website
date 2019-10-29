

class SvgAnimationCheck {

    constructor() {
        const textPath = document.querySelectorAll(".header__development path");

        for (let i = 0; i < textPath.length; i++) {
            console.log(`Letter ${i} is ${textPath[i].getTotalLength()}`)
        }

    }



}


export default SvgAnimationCheck;



