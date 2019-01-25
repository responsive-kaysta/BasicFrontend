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

    skel.on("load", function () {
        // resize, orientationChange, ready, load
        console.log('[skel] - load ...');
    });

    $(function () {

        var $window = $(window),
            $body = $('body'),
            $wrapper = $('#page-wrapper'),
            $banner = $('#banner'),
            $equalizer = $('#equalizer'),
            $header = $('#header');

        var isDebug = true;

        // Mobile?
        if (skel.vars.isMobile) $body.addClass('is-mobile');else skel.on('-medium !medium', function () {
            $body.removeClass('is-mobile');
            if (isDebug) writeLogMessage('[skel] - -medium !medium ...');
        }).on('+medium', function () {
            $body.addClass('is-mobile');
            if (isDebug) writeLogMessage('[skel] - +medium ...');
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
            if (isDebug) writeLogMessage('[menuClose] - click touchend ...');
        });

        // Toggle.
        $menuToggle.on('click touchend', function (event) {
            event.preventDefault();
            event.stopPropagation();
            $body.toggleClass('is-menu-visible');
            if (isDebug) writeLogMessage('[menuToggle] - click touchend ...');
        });

        // Wrapper.
        $wrapper.on('click touchend', function (event) {
            if ($body.hasClass('is-menu-visible')) {
                event.preventDefault();
                event.stopPropagation();
                $body.removeClass('is-menu-visible');
                if (isDebug) writeLogMessage('[wrapper] - click touchend ...');
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

        // fire window ready

        $window.ready(function () {

            if (skel.breakpoint("small").active) {
                /* do something specific for small displays */

                if (isDebug) writeLogMessage('[breakpoint] - small active ...');
            }
            if (skel.breakpoint("medium").active) {

                if (isDebug) writeLogMessage('[breakpoint] - medium active ...');
            }
            if (skel.breakpoint("large").active) {

                if (isDebug) writeLogMessage('[breakpoint] - large active ...');
            }
            if (skel.breakpoint("xlarge").active) {

                if (isDebug) writeLogMessage('[breakpoint] - xlarge active ...');
            }
            if (skel.breakpoint("xxlarge").active) {

                if (isDebug) writeLogMessage('[breakpoint] - xxlarge active ...');
            }
            if (skel.vars.touch) {
                /* enable feature for devices with a touchscreen */

                if (isDebug) writeLogMessage('[breakpoint] - touch active ...');
            }
            if (skel.vars.IEVersion < 9) {
                /* apply workaround for IE<9 */

                if (isDebug) writeLogMessage('[breakpoint] - IEVersion < 9 active ...');
            }

            console.log('[window] - ready ...');
        });

        // fire event on ...

        skel.on("resize", function () {

            if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
                getElementEqualHeight($(".equal"));
            }

            console.log('[skel] - resize ...');
        });

        skel.on("orientationChange", function () {

            if ($equalizer.length > 0 && $equalizer.hasClass('blogarchive')) {
                getElementEqualHeight($(".equal"));
            }

            console.log('[skel] - orientationChange ...');
        });
    });
})(jQuery);
/* skel.js v3.0.2-dev | (c) skel.io | MIT licensed */

