/* navigation.js */

(function ($) {
    
    // Navigation
    $('#toggle').click(function () {
        $('.has-child').removeClass('selected');
        $('nav').toggleClass('open');
        $('.cross').toggleClass('open');
    });

    $('.has-child').click(function () {
        if (window.innerWidth < 768) {
            if ($(this).hasClass('selected')) {
                $('.has-child').removeClass('selected');
            } else {
                $('.has-child').removeClass('selected');
                $(this).toggleClass('selected');
            }
        }
    });

})(jQuery);