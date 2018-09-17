/*
	Spectral by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    skel.breakpoints({
        xxlarge: '(min-width: 1680px)',
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $header = $('#header');

        // Mobile?
        if (skel.vars.isMobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function () {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function () {
                    $body.addClass('is-mobile');
                });

        // Scrolly.
        $('.scrolly').scrolly({
            speed: 1500,
            offset: $header.outerHeight()
        });

        // Menu.
        var $menu = $('#menu'),
            $menuClose = $('<a class="close">').appendTo($menu),
            $menuToggle = $('.menuToggle');

        // Move to end of body.
        $menu.appendTo($body);

        // Close.
        $menuClose.on('click touchend', function (event) {

            event.preventDefault();
            event.stopPropagation();

            $body.removeClass('is-menu-visible');

        });

        // Toggle.
        $menuToggle.on('click touchend', function (event) {

            event.preventDefault();
            event.stopPropagation();

            $body.toggleClass('is-menu-visible');

        });

        // Wrapper.
        $wrapper.on('click touchend', function (event) {

            if ($body.hasClass('is-menu-visible')) {

                event.preventDefault();
                event.stopPropagation();

                $body.removeClass('is-menu-visible');

            }

        });

        // Header.
        if (skel.vars.IEVersion < 9)
            $header.removeClass('alt');

        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () { $window.trigger('scroll'); });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function () { $header.removeClass('alt'); },
                enter: function () { $header.addClass('alt'); },
                leave: function () { $header.removeClass('alt'); }
            });

        }

        
        // Initialize equal height script
        var heightIsSet;

        // Make elements equal
        var equalheight = function (container) {

            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el;

            $(container).find('.equal').each(function () {

                $el = $(this);
                $($el).height('auto');
                var topPostion = $el.position().top;

                var currentDiv;
                if (currentRowStart != topPostion) {
                    for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPostion;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        };

        // Check for window width before resizing
        function equalHeightChecker() {
            if (window.innerWidth > 767 && !heightIsSet) {
                $('.equalizer')
                    .each(function () {
                        $(this).find('.equal').each(function () {
                            this.style.height = 'auto';
                        });
                        heightIsSet = false;
                    });
            }
            else if (window.innerWidth < 768 && heightIsSet) {
                $('.equalizer')
                    .each(function () {
                        $(this).find('.equal').each(function () {
                            this.style.height = 'auto';
                        });
                        heightIsSet = false;
                    });
            }
        }
        
        // On load
        $window.ready(function () {
            equalHeightChecker();
        });

        // and on resize
        $window.resize(function () {
            equalHeightChecker();
        });

    });

})(jQuery);