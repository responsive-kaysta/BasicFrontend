/* moduleloader.js */

$(document).ready(function () {

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

    var module = vars['module'];

    if (module == null || module == "") {
        $('.main-content').load('/Frontend/Modules/home.html');
    }

    else if (module == "disclaimer") {
        $('.main-content').load('/Frontend/Modules/disclaimer.html');
    }

    else if (module == "aboutme") {
        $('.main-content').load('/Frontend/Modules/aboutme.html');
    }

    else if (module == "about") {
        $('.main-content').load('/Frontend/Modules/about.html');
    }

    else if (module == "blogoverview") {
        $('.main-content').load('/Frontend/Modules/aboutview.html');
    }

    else if (module == "blogentry") {
        $('.main-content').load('/Frontend/Modules/blogentry.html');
    }

    else {
        $('.main-content').load('/Frontend/Modules/home.html');
    }

});