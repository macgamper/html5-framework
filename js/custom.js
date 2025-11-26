(() => {
    globalThis.helperJs.onReady((() => {
        const mobileNav = {
            classes: {
                headActive: "js-mobilenav-visible",
                buttonActive: "hamburger--active"
            },
            selectors: {
                navButton: ".js-hamburger",
                navBackground: ".js-mobilenav__bg",
                navContainer: ".mobilenav__container",
                navList: ".mobilenav-box > ul",
                navSkiplink: "a[href='#mainnav']"
            },
            animation: {
                duration: 200,
                easing: "ease",
                fill: "backwards"
            }
        };
        const noIconConf = {
            selector: "main a img",
            noIconClass: "no-icon"
        };
        const touchDropdownConf = {
            selector: ".mainnav .folder > a",
            clickedClass: "clicked"
        };
        class MobileMenu {
            constructor(config) {
                this.isActive = false;
                const selectors = config.selectors;
                this.config = config;
                this.button = document.querySelector(selectors.navButton);
                this.container = document.querySelector(selectors.navContainer);
                this.background = document.querySelector(selectors.navBackground);
                if (this.validate()) {
                    this.init();
                    this.setListeners();
                }
            }
            validate() {
                const result = this.button && this.container;
                if (!result) console.warn([ "Not valid configuration", this ]);
                return result;
            }
            init() {
                this.animate = new globalThis.helperJs.dom.AnimateElement(this.config.animation);
                this.slider = new globalThis.helperJs.dom.SlideElement(this.animate, this.container);
                this.toggle(true);
            }
            setListeners() {
                [ this.button, this.background ].forEach((element => {
                    element && element.addEventListener("click", (e => {
                        e.preventDefault();
                        this.toggle();
                    }));
                }));
                new globalThis.helperJs.A11yDropdownKeyNavigation(this.button, this.container, (() => {
                    this.toggle(true);
                }));
                this.skipLinkForMobileView();
            }
            toggle(closeMenu) {
                const html = document.documentElement;
                const getBackgroundFrames = () => [ {
                    opacity: "0"
                }, {
                    opacity: "1"
                } ];
                const classes = this.config.classes;
                if (closeMenu || this.isActive) {
                    html.classList.remove(classes.headActive);
                    this.button.classList.remove(classes.buttonActive);
                    this.slider.up();
                    this.animate.animate(this.background, true, getBackgroundFrames);
                } else {
                    html.classList.add(classes.headActive);
                    this.button.classList.add(classes.buttonActive);
                    this.animate.animate(this.background, false, getBackgroundFrames);
                    this.slider.down();
                }
                this.isActive = closeMenu ? false : !this.isActive;
                globalThis.helperJs.toggleAriaExpanded(this.button, closeMenu);
            }
            skipLinkForMobileView() {
                document.querySelectorAll(this.config.selectors.navSkipLink).forEach((el => {
                    el.addEventListener("click", (e => {
                        if (this.isActive) {
                            e.preventDefault();
                            this.onSkipLinkClick();
                            return false;
                        }
                    }));
                }));
            }
            onSkipLinkClick() {
                this.button.click();
                const selector = this.config.selectors.navList;
                const a = selector && document.querySelector(`${selector} > li:first-child > a`);
                if (a) a.focus({
                    preventScroll: false
                });
            }
        }

        new MobileMenu(mobileNav);
        setNoIconsOnLinkedImages(noIconConf);
        globalThis.helperJs.responsiveTable();
        initTouchDropdowns(touchDropdownConf);

        function setNoIconsOnLinkedImages(_ref) {
            let {selector, noIconClass} = _ref;
            document.querySelectorAll(selector).forEach((img => {
                const a = img.closest("a");
                a && a.classList.add(noIconClass);
            }));
        }
        function initTouchDropdowns(_ref2) {
            let {selector, clickedClass} = _ref2;
            if (globalThis.helperJs.isTouchDevice()) {
                const getLinks = () => document.querySelectorAll(selector);
                getLinks().forEach((link => {
                    link.addEventListener("click", (event => {
                        getLinks().forEach((other => {
                            if (other !== link) other.classList.remove(clickedClass);
                        }));
                        link.classList.toggle(clickedClass);
                        if (link.classList.contains(clickedClass)) event.preventDefault();
                    }));
                }));
            }
        }
    }));
})();
