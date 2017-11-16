/* colourswitch.js */

"use strict";

var cookie;
var colour;

$(document).ready(function () {

    cookie = readCookie("colourscheme");

    $("#colourswitch").change(function () {
        colour = $("#colourswitch :selected").attr('value');
        createCookie("colourscheme", colour, "1");
        window.location = "/";
    });

    if (cookie == null || cookie == "") {
        colour = "dark";
        createCookie("colourscheme", colour, "1");
    } else {
        colour = cookie;
        createCookie("colourscheme", colour, "1");
    }

    $("#header").addClass(colour);
    $("#footer").addClass(colour);
});

