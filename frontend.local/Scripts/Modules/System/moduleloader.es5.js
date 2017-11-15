/* moduleloader.js */

'use strict';

$(document).ready(function () {

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

    var module = vars['module'];

    if (module == null || module == "") {
        $('.main-content').load('/Frontend/Modules/home.html');
    } else if (module == "disclaimer") {
        $('.main-content').load('/Frontend/Modules/disclaimer.html');
    } else if (module == "aboutme") {
        $('.main-content').load('/Frontend/Modules/aboutme.html');
    } else if (module == "about") {
        $('.main-content').load('/Frontend/Modules/about.html');
    } else if (module == "blogoverview") {
        $('.main-content').load('/Frontend/Modules/blogoverview.html');
    } else if (module == "blogentry_1") {
        $('.main-content').load('/Frontend/Modules/blogentry_1.html');
    } else if (module == "blogentry_2") {
        $('.main-content').load('/Frontend/Modules/blogentry_2.html');
    } else if (module == "blogentry_3") {
        $('.main-content').load('/Frontend/Modules/blogentry_3.html');
    } else if (module == "aboutoverview") {
        $('.main-content').load('/Frontend/Modules/aboutoverview.html');
    } else {
        $('.main-content').load('/Frontend/Modules/home.html');
    }
});

