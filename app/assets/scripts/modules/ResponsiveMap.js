import { isNull } from "util";


class ResponsiveMap {

    constructor() {
        this.leftContainer = document.querySelector('.portfolio-section__text');
        this.rightContainer = document.querySelector('.portfolio-section__img');
        if (!isNull(this.leftContainer)) {
            // this.startReduction();
            this.resizeColoredMap()
        }
    }

    resizeColoredMap() {
        window.addEventListener('resize', () => {
            // this.startReduction();
        });
    }

    startReduction() {
        // console.log(this.leftContainer.clientHeight)
        // if (Number(window.screen.availHeight) > 1336) {
        //     console.log(true)
        //     // 

        // }
        if (window.screen.availWidth > 1366) {
            console.log(true);
            this.rightContainer.style.width = `${this.leftContainer.clientHeight + 100}px`;
        }

    }

}


export default ResponsiveMap;

