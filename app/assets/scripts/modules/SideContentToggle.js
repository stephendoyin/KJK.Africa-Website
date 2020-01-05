

class SideContent {

    constructor() {
        this.sideLink = document.querySelectorAll(".case__block-item");
        this.sideLinkHeader = document.querySelectorAll(".case__block__header+span");
        this.sideHeader = document.querySelectorAll(".case__block__header");
        this.addEvent();

    }

    addEvent() {
        this.sideLink.forEach((item, i) => {
            item.addEventListener("click", () => {
                this.toggleDropDown(i);
            });
        });
    }

    toggleDropDown(i) {
        console.log(this.sideHeader[i]);
        this.sideLinkHeader[i].classList.toggle("active");
        this.sideHeader[i].classList.toggle("active");
    }


}


export default SideContent;



