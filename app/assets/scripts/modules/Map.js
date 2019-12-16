import { isNull } from "util";

class Map {

    constructor() {
        this.insideMap = document.querySelector('.contact__map-inner');
        this.map = document.querySelector('.contact__map');
        this.gradientBg = document.querySelector('.contact__bg');
        this.innerMap = document.querySelector('.contact__map-inside');
        this.iframe = document.querySelector('.contact iframe');
        if (!isNull(this.map)) {
            this.getMapWidth();
            this.triggerEvent();
        }
    }


    getMapWidth() {
        if (window.innerWidth > 1100) {
            this.resizeMapForBigScreen();
        } else if (window.innerWidth < 740) {
            this.resizeMapForSmallScreen();
        } else {
            this.resizeMap();
        }
    }


    triggerEvent() {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 1100 && window.innerWidth > 760) {
                this.resizeMap();
            } else if (window.innerWidth > 1100) {
                this.resizeMapForBigScreen();
            } else if (window.innerWidth < 760) {
                this.resizeMapForSmallScreen()
            }

        });
    }





    resizeMap() {
        this.insideMap.style.height = `${this.insideMap.clientWidth - 80}px`;
        this.map.style.height = `${this.map.clientWidth - 80}px`;
        this.gradientBg.style.height = `${this.map.clientWidth - 80}px`;
        this.innerMap.style.height = `${this.map.clientWidth - 80}px`;
        this.iframe.style.height = `${this.map.clientWidth - 80}px`;
    }

    resizeMapForBigScreen() {
        this.insideMap.style.height = `400px`;
        this.map.style.height = `400px`;
        this.gradientBg.style.height = `400px`;
        this.innerMap.style.height = `400px`;
        this.iframe.style.height = `400px`;
    }

    resizeMapForSmallScreen() {
        this.insideMap.style.height = `${this.insideMap.clientWidth - 80}px`;
        this.map.style.height = `${this.map.clientWidth - 80}px`;
        this.gradientBg.style.height = `${this.map.clientWidth - 80}px`;
        this.innerMap.style.height = `${this.map.clientWidth - 80}px`;
        this.iframe.style.height = `${this.map.clientWidth - 80}px`;
    }


}


export default Map;