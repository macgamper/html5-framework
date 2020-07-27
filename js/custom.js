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
    // close menu if closeMenu === true
    function toggleMenu(container, list, btn, closeMenu) {
        if (closeMenu) {
            $('html').removeClass('js-mobilenav-visible');
            $(btn).removeClass(navToggleClass);
            $(container).slideUp(200);
            $(navBackgroundClass).fadeOut(200);
        } else {
            $('html').toggleClass('js-mobilenav-visible');
            $(btn).toggleClass(navToggleClass);
            $(navBackgroundClass).fadeToggle(200);
            $(container).slideToggle(200);
        }
        toggleAriaExpanded(btn, closeMenu);
    }

    // hamburger & mobilenav
    const navButtonClass = '.js-hamburger';
    const navBackgroundClass = '.js-mobilenav__bg';
    const navContainerClass = '.mobilenav__container';
    const navListClass = '.mobilenav-box > ul';
    const navToggleClass = 'hamburger--active';
    const navSkiplink = 'a[href="#mainnav"]';
    let navIsOpen = false;

    $(navButtonClass + ', ' + navBackgroundClass).on('click', function(e) {
        // toggle menu
        toggleMenu(navContainerClass, navListClass, navButtonClass);

        // close by pressing ESC
        // loop through menu by tab
        $(navContainerClass + ', ' + navButtonClass).keydown(function(e) {
            if (e.keyCode === 27) {
                toggleMenu(navContainerClass, navListClass, navButtonClass, true);
                $(navButtonClass).focus();
                return false;
            } else if (e.keyCode === 9) {
                if (e.target === $(navListClass).find('li:last > *:last-child')[0]) {
                    e.preventDefault;
                    $(navButtonClass).focus();
                    return false;
                }
            }
        });
    });

    // change skiplink-href for navigation, when mobilenav is visible
    $(navSkiplink).on('click', function(e){
        if ($(navButtonClass).is(":visible")){
            e.preventDefault;
            $(navButtonClass).click();
            $(navListClass).find('>li:first-child()>a').focus();
            return false;
        }
    });

    // ************************************
    // presentation-tabellen mit entprechender ARIA-Role versehen
    $('table.presentation').attr("role","presentation");

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
        jQuery(".mainnav .folder > a").click(function(event) {
            // Perform a reset - Remove the "clicked" class on all other menu items
            jQuery(".mainnav .folder > a").not(this).removeClass("clicked");
            jQuery(this).toggleClass("clicked");
            if (jQuery(this).hasClass("clicked")) {
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
