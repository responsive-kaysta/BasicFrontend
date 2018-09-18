/*
Spectral by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

'use strict';

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
            $equalizer = $('#equalizer'),
            $header = $('#header');

        // Mobile?
        if (skel.vars.isMobile) $body.addClass('is-mobile');else skel.on('-medium !medium', function () {
            $body.removeClass('is-mobile');
        }).on('+medium', function () {
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
        if (skel.vars.IEVersion < 9) $header.removeClass('alt');

        if ($banner.length > 0 && $header.hasClass('alt')) {
            $window.on('resize', function () {
                $window.trigger('scroll');
            });

            $banner.scrollex({
                bottom: $header.outerHeight() + 1,
                terminate: function terminate() {
                    $header.removeClass('alt');
                },
                enter: function enter() {
                    $header.addClass('alt');
                },
                leave: function leave() {
                    $header.removeClass('alt');
                }
            });
        }

        // get equal height for blogarchive elements
        if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
            getElementEqualHeight($(".equal"));
        }

        // on ready
        skel.ready(function () {

            console.log('[window] - ready ...');
        });

        // and on resize
        skel.resize(function () {

            // get equal height for blogarchive elements
            if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
                getElementEqualHeight($(".equal"));
            }

            console.log('[window] - resize ...');
        });
    });
})(jQuery);

