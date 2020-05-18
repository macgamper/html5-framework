$(document).ready(function(){

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
    if ( window.helperJs.changeFormSubmitMethod != 'undefined' ){
        window.helperJs.changeFormSubmitMethod('form.js-mod-search');
    }
});
