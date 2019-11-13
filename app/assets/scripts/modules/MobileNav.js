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

/*

<div class="mobile-nav mobile-nav--open">
                <img src="assets/images/mobile-map.png" class="mobile-nav__map" alt="">
                <div class="mobile-nav__content">
                    <div class="mobile-nav__links">
                        <div class="mobile-nav__container">
                            <a href="" class="mobile-nav__link link-resp active">
                                Our Services
                                <span>
                                    <img src="assets/images/arrow-right.png" class="mobile-nav__link__arrow-img img-resp active" alt="">
                                </span>
                            </a>
                            <div class="mobile-nav__list mobile-nav--resp active">
                                <div class="mobile-nav__list-item">
                                    <a href="" class="mobile-nav__title">
                                        Web:
                                    </a>
                                    <div class="mobile-nav__sub">
                                        <a href="" class="mobile-nav__list-item-link">UI/UX</a>
                                        <a href="" class="mobile-nav__list-item-link">FRONTEND DEVELOPER</a>
                                        <a href="" class="mobile-nav__list-item-link">BACKEND DEVELOPMENT</a>
                                        <a href="" class="mobile-nav__list-item-link">UI/UX</a>
                                    </div>
                                </div>
                                <div class="mobile-nav__list-item">
                                    <a href="" class="mobile-nav__title">
                                        Mobile App Development
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item">
                                    <a href="" class="mobile-nav__title">
                                        Coporate E-brand
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item">
                                    <a href="" class="mobile-nav__title">
                                        Desktop Development
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item">
                                    <a href="" class="mobile-nav__title">
                                        Business Technology Consulting
                                    </a>
                                </div>
                            </div>
                        </div>



                        
                        <div class="mobile-nav__container">
                            <a href="" class="mobile-nav__link link-resp">
                                Solutions
                                <span>
                                    <img src="assets/images/arrow-right.png" class="mobile-nav__link__arrow-img img-resp" alt="">
                                </span>
                            </a>
                            <div class="mobile-nav__list mobile-nav--resp">
                                <div class="mobile-nav__list-item mobile-nav__list-item--header">
                                    <a href="" class="mobile-nav__title">
                                        Industries
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Retail and Ecommerce
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Real Estate
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Mobility Tech
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Agriculture
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Food Tech
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Travel and Tourism
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        School and Management
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="mobile-nav__container">
                            <a href="" class="mobile-nav__link link-resp">
                                Portfolio
                                <span>
                                    <img src="assets/images/arrow-right.png" class="mobile-nav__link__arrow-img img-resp" alt="">
                                </span>
                            </a>
                            <div class="mobile-nav__list mobile-nav--resp">
                                <div class="mobile-nav__list-item mobile-nav__list-item--header">
                                    <a href="" class="mobile-nav__title">
                                        Projects we worked on
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Tru-Data
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Afiaanyi
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        TwoReport
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Pave
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        April Travels
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Trans-Meridian
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        Agro Seeds
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="mobile-nav__container">
                            <a href="" class="mobile-nav__link link-resp">
                                Contact Us
                                <span>
                                    <img src="assets/images/arrow-right.png" class="mobile-nav__link__arrow-img img-resp img-resp--active" alt="">
                                </span>
                            </a>
                            <div class="mobile-nav__list">
                                <div class="mobile-nav__list-item mobile-nav__list-item--header">
                                    <a href="" class="mobile-nav__title">
                                        Get in touch with us
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/call.svg" class="mobile-nav__social-img" alt=""> &nbsp;&nbsp;+234-808-604-5502
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/envelope.svg" class="mobile-nav__social-img" alt=""> &nbsp;&nbsp;Info@kjk.com.ng
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/location.svg" class="mobile-nav__social-img" alt=""> &nbsp;&nbsp;Block 36, Apartment 6 Glover Estate, Adekunle, Yaba, Lagos
                                    </a>
                                </div>
                                <div class="mobile-nav__list-item mobile-nav__list-item--small mobile-nav__list-item--adjusted">
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/fb-white.svg" style="width: 10px" class="mobile-nav__social-img" alt="">
                                    </a>
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/linkedin-white.svg" class="mobile-nav__social-img" alt="">
                                    </a>
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/ins-white.svg" class="mobile-nav__social-img" alt="">
                                    </a>
                                    <a href="" class="mobile-nav__title mobile-nav__title--small">
                                        <img src="assets/images/twitter-white.svg" class="mobile-nav__social-img " alt=" ">
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>