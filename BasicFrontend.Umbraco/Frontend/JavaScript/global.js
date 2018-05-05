/* global.js */

(function ($) {

    function createCookie(name, value, days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + date.toGMTString();
        }
        else var expires = "";

        document.cookie = name + "=" + value + expires + "; path=/";
    }


    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }


    function eraseCookie(name) {
        createCookie(name, "", -1);
    }


    // read value from querystring
    var vars = [], hash;

    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }

    /*
        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function () {
            window.setTimeout(function () {
                $body.removeClass('is-loading');
            }, 250);
        });
        */


    $('.tooltipster').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        contentAsHTML: true,
        maxWidth: 560,
        trigger: 'click',
        interactive: true
    });


    $('ul.tooltip_ul li:even').addClass('even');

    $('ul.tooltip_ul li:odd').addClass('odd');

})(jQuery);