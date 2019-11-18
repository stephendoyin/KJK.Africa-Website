// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         document.getElementById("navbar").style.top = "0";
//     } else {
//         document.getElementById("navbar").style.top = "-50px";
//     }
//     prevScrollpos = currentScrollPos;
// }







class ScrollJs {

    constructor() {
        this.prevScrollpos = window.pageYOffset;
        this.navBar = document.querySelector('.nav-bar');
        this.scrollTrigger();
    }


    scrollTrigger() {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 60) {
                this.toggleNavBar();
            }
            else if (window.pageYOffset < 60) {
                this.navBar.classList.remove('nav-bar--up');
                this.navBar.classList.remove('nav-bar--down');
            }

        })
    }

    toggleNavBar() {
        this.currentScrollPos = window.pageYOffset;
        if (this.prevScrollpos > this.currentScrollPos) {

            this.navBar.classList.remove('nav-bar--up');
            this.navBar.classList.add('nav-bar--down');
        } else {
            this.navBar.classList.add('nav-bar--up');
            this.navBar.classList.remove('nav-bar--down');
        }

        this.prevScrollpos = this.currentScrollPos;
    }

}


export default ScrollJs;