"use strict";

(function ($) {

    function createCookie(name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toGMTString();
        } else {
            expires = "";
        }

        document.cookie = name + "=" + value + expires + "; path=/";
    }

    function readCookie(name) {
        var nameEq = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEq) == 0) return c.substring(nameEq.length, c.length);
        }
        return null;
    }

    function eraseCookie(name) {
        createCookie(name, "", -1);
    }

    // read value from querystring
    var vars = [],
        hash;

    var q = document.URL.split('?')[1];
    if (q != undefined) {
        q = q.split('&');
        for (var i = 0; i < q.length; i++) {
            hash = q[i].split('=');
            vars.push(hash[1]);
            vars[hash[0]] = hash[1];
        }
    }
})(jQuery);

(function ($) {
    $('.tooltipster').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        contentAsHTML: true,
        maxWidth: 716,
        trigger: 'click',
        interactive: true
    });
})(jQuery);

(function ($) {
    $("div div.rowconfig:nth-child(odd)").addClass("odd");
    $("div div.rowconfig:nth-child(even)").addClass("even");
})(jQuery);

$(document).ready(function ($) {
    $("#searchQuerySubmit").prop('disabled', true);
});

$('input#searchQuery').keyup(function ($) {
    if ($('#searchQuery').val().length >= 3) {
        $("#searchQuerySubmit").prop('disabled', false);
    } else {
        $("#searchQuerySubmit").prop('disabled', true);
    }
});

