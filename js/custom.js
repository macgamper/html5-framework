$(document).ready(function(){

    // ************************************
    // mobile-navigation

    // toggles aria-attribute
    // sets aria to false if closeMenu === true
    function toggleAriaExpanded(target, closeMenu) {
        let expanded = closeMenu ? 'true' : $(target).attr('aria-expanded');
        expanded = (expanded === 'true');
        $(target).attr('aria-expanded', !expanded);
    }

    // toggles menu
    const navToggleClass = 'hamburger--active';
    // close menu if closeMenu === true
    function toggleMenu(container, list, btn, closeMenu) {
        if (closeMenu) {
            $('html').removeClass('js-mobilenav-visible');
            $(btn).removeClass(navToggleClass);
            $(container).slideUp(200);
            $(selectors.navBackground).fadeOut(200);
        } else {
            $('html').toggleClass('js-mobilenav-visible');
            $(btn).toggleClass(navToggleClass);
            $(selectors.navBackground).fadeToggle(200);
            $(container).slideToggle(200);
        }
        toggleAriaExpanded(btn, closeMenu);
    }

    // hamburger & mobilenav
    const selectors = {
        navButton : '.js-hamburger',
        navBackground : '.js-mobilenav__bg',
        navContainer : '.mobilenav__container',
        navList : '.mobilenav-box > ul',
        navSkiplink : 'a[href="#mainnav"]'
    };
    
    $(selectors.navButton + ', ' + selectors.navBackground).on('click', function(e) {
        // toggle menu
        toggleMenu(selectors.navContainer, selectors.navList, selectors.navButton);

        // close by pressing ESC
        // loop through menu by tab
        $(selectors.navContainer + ', ' + selectors.navButton).keydown(function(e) {
            if (e.keyCode === 27) {
                toggleMenu(selectors.navContainer, selectors.navList, selectors.navButton, true);
                $(selectors.navButton).focus();
                return false;
            } else if (e.keyCode === 9) {
                if (e.target === $(selectors.navList).find('li:last > *:last-child')[0]) {
                    e.preventDefault;
                    $(selectors.navButton).focus();
                    return false;
                }
            }
        });
    });

    // change skiplink-href for navigation, when mobilenav is visible
    $(selectors.navSkiplink).on('click', function(e){
        if ($(selectors.navButton).is(':visible')){
            e.preventDefault;
            $(selectors.navButton).click();
            $(selectors.navList).find('>li:first-child()>a').focus();
            return false;
        }
    });

    // ************************************
    // presentation-tabellen mit entprechender ARIA-Role versehen
    $('table.presentation').attr('role','presentation');

    // ************************************
    // keine icons für verlinkte bilder
    $('main a img').closest('a').addClass('no-icon');

    // ************************************
    // touch-friendly dropdown-menus
    function isTouchDevice(){
        return typeof window.ontouchstart !== 'undefined';
    }
    /* If mobile browser, prevent click on parent nav item from redirecting to URL */
    if(isTouchDevice()) {
        // 1st click, add "clicked" class, preventing the location change. 2nd click will go through.
        $('.mainnav .folder > a').click(function(event) {
            // Perform a reset - Remove the "clicked" class on all other menu items
            $('.mainnav .folder > a').not(this).removeClass('clicked');
            $(this).toggleClass('clicked');
            if ($(this).hasClass('clicked')) {
                event.preventDefault();
            }
        });
    }
    
    // ************************************
    // change form methods from post to get for old IE to be able to navigate back
    if (window.hasOwnProperty("helperJs") && window.helperJs.hasOwnProperty("changeFormSubmitMethod")){
        window.helperJs.changeFormSubmitMethod('form.js-mod-search');
    }
});