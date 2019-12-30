
class MobileNavigation {

    constructor() {

        this.navIcon = document.querySelector(".nav-bar__menu-icon");
        this.nav = document.querySelector('.mobile-nav');
        this.links = document.querySelectorAll('.mobile-nav__link');
        this.linkImgs = document.querySelectorAll('.mobile-nav__link__arrow-img');
        this.repLinkImgs = document.querySelectorAll('.img-resp')
        this.mobileNavList = document.querySelectorAll('.mobile-nav__list');
        this.mobileNavResp = document.querySelectorAll(".mobile-nav--resp");
        this.mobileResp = document.querySelectorAll('.resp');
        this.navBar = document.querySelector('.nav-bar');
        this.initialScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.triggerEvent();
        this.resize();
        this.reset();

    }

    resize() {
        window.addEventListener("resize", () => {
            let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            if (this.initialScreenWidth > screenWidth)
                this.reset();
        })
    }

    reset() {
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (Number(screenWidth) < 740) {

            this.linkImgs.forEach((item) => {
                item.classList.remove('active');
            });
            this.mobileNavList.forEach((item) => {
                item.classList.add('active');
                item.classList.remove('show');
            });


        } else {
            this.linkImgs.forEach((item) => {
                item.classList.remove('active');
            });
            this.links.forEach((item) => {
                item.classList.remove('active');
            });
            this.mobileNavList.forEach((item) => {
                item.classList.remove('active');
            });
            this.mobileNavList[0].classList.add('active');
            this.links[0].classList.add('active');
            this.linkImgs[0].classList.add('active');
        }
    }


    triggerEvent() {
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        for (let i = 0; i < this.links.length; i++) {

            this.links[i].addEventListener('click', () => {
                event.preventDefault();
                this.navHandler(i);
            });

            if (screenWidth > 740) {
                this.links[i].addEventListener('mouseenter', () => {
                    this.navHandler(i);
                });
            }

        }


        this.navIcon.addEventListener('click', () => {
            this.toggleSlider(event);
        });
    }

    navHandler(i) {

        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        for (let x = 0; x < this.links.length; x++) {
            if (i !== x) {
                if (screenWidth > 740) {
                    this.links[x].classList.remove('active');
                    this.mobileNavList[x].classList.remove('active');
                    this.linkImgs[x].classList.remove('active');
                } else {
                    this.mobileNavResp[x].classList.remove('show');
                    this.repLinkImgs[x].classList.remove('active');
                }

            }

        }
        if (screenWidth > 740) {
            this.mobileNavList[i].classList.add('active');
            this.links[i].classList.add('active');
            this.linkImgs[i].classList.add('active');
        } else {
            this.mobileNavList[i].classList.toggle('show');
            this.repLinkImgs[i].classList.toggle('active');
        }

    }

    toggleSlider(event) {
        this.nav.classList.toggle('mobile-nav--open');
        this.navIcon.classList.toggle("nav-bar__menu-icon--close");
        document.body.classList.toggle('fixed');
        if (this.nav.classList.contains('mobile-nav--open')) {
            this.navBar.classList.remove('nav-bar--down');
        } else {
            if (window.pageYOffset > 55)
                this.navBar.classList.add('nav-bar--down');

        }
        this.reset();
    }


}


export default MobileNavigation;

