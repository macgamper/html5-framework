$(document).ready(function(){

    // ************************************
    // mobile-navigation

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
        window.helperJs.toggleAriaExpanded(btn, closeMenu);
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
            // get last link in Menu
            const lastLinkInList = $(selectors.navContainer).find('button, a, input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])').last()[0];
            // close menu with escape and focus button
            if (e.key === 'Escape') {
                toggleMenu(selectors.navContainer, selectors.navList, selectors.navButton, true);
                $(selectors.navButton).focus();
                return false;
            // go to button clicking tab and last link focused
            } else if (!e.shiftKey && e.key === 'Tab') {
                if (e.target === lastLinkInList) {
                    e.preventDefault;
                    $(selectors.navButton).focus();
                    return false;
                }
            // go to last link when clicking shift-tab, open menu and button focused
            } else if (e.shiftKey && e.key === 'Tab') {
                if ($(e.target).hasClass(selectors.navButton.substring(1)) && $(selectors.navContainer).is(':visible')) {
                    e.preventDefault;
                    lastLinkInList.focus();
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
    // keine icons für verlinkte bilder
    $('main a img').closest('a').addClass('no-icon');

    // responsive-container für tabellen
    window.helperJs.responsiveTable();

    // ************************************
    // touch-friendly dropdown-menus
    /* If mobile browser, prevent click on parent nav item from redirecting to URL */
    if(window.helperJs.isTouchDevice()) {
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

});