$(document).ready(function(){

    // ************************************
    // presentation-tabellen mit entprechender ARIA-Role versehen
    $('table.presentation').attr("role","presentation");

    // ************************************
    // keine icons für verlinkte bilder
    $('main a > img').closest('a').addClass('no-icon');

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

});

// ************************************
// Auto-Responsive-Tables. Copyright: https://goo.gl/zKhPMy
function scrollWideTables(container) { // puts scrolling container around wide tables
    var tables = document.querySelectorAll(container), wrap, i;
    for (i=0; i<tables.length; i++) {
        var table = tables[i];
        wrap = document.createElement('div');
        wrap.className = 'table-responsive';
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
        if (wrap.scrollWidth > wrap.clientWidth) { 
          wrap.className += ' table-responsive--active';
        }
    }
}
window.addEventListener('resize', function() { // add or remove wide-table-gradient if viewport resized 
    var wrap = document.querySelector('.table-responsive');
    wrap.className = wrap.scrollWidth > wrap.clientWidth ? 'table-responsive table-responsive--active' : 'table-responsive';
    }, false);
scrollWideTables('main table'); // class of wide tables (can just be 'table' to target all tables on page)
