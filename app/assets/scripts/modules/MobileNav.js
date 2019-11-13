class MobileNavigation {

    constructor() {
        this.navIcon = document.querySelector(".nav-bar__menu-icon");
        this.nav = document.querySelector('.mobile-nav');
        this.links = document.querySelectorAll('.mobile-nav__link');
        this.linkImgs = document.querySelectorAll('.mobile-nav__link__arrow-img');
        this.repLinkImgs = document.querySelectorAll('.img-resp')
        this.mobileNavList = document.querySelectorAll('.mobile-nav__list');
        this.mobileNavResp = document.querySelectorAll(".mobile-nav--resp");
        this.removeActiveMenuOnShow();
        this.mobileResp = document.querySelectorAll('.resp');
        this.triggerEvent();

    }



    removeActiveMenuOnShow() {
        let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (Number(screenWidth) < 740) {

            this.mobileNavList[0].classList.remove('active');
            this.links.forEach((link) => {
                link.classList.add('link-resp');
            });
            this.linkImgs.forEach((item) => {
                item.classList.add('active');
            });
        }
    }


    triggerEvent() {

        for (let i = 0; i < this.links.length; i++) {
            this.links[i].addEventListener('click', () => {
                event.preventDefault();
                let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                if (Number(screenWidth) < 740) {
                    this.repLinkImgs[i].classList.toggle('img-resp--active');
                    this.mobileNavResp[i].classList.toggle('show');
                    for (let n = 0; n < this.linkImgs.length; n++) {
                        if (i !== n) {
                            this.repLinkImgs[n].classList.remove('img-resp--active');
                            this.mobileNavResp[n].classList.remove('show');
                        }

                        // this.mobileNavList[n].classList.remove('mobile-nav--resp');
                    }

                }
            })

            this.links[i].addEventListener('mouseenter', () => {

                for (let x = 0; x < this.links.length; x++) {
                    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                    if (screenWidth > 740) {
                        this.links[x].classList.remove('active');
                        this.linkImgs[x].classList.remove('active');
                        this.mobileNavList[x].classList.remove('active');
                    };

                }

                this.links[i].classList.add('active');
                this.linkImgs[i].classList.add('active');
                this.mobileNavList[i].classList.add('active');
            });
        }


        this.navIcon.addEventListener('click', () => {
            this.toggleSlider(event);
        });
    }

    toggleSlider(event) {
        this.nav.classList.toggle('mobile-nav--open');
        this.navIcon.classList.toggle("nav-bar__menu-icon--close");
    }


}


export default MobileNavigation;

