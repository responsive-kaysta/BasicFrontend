/* colourscheme.js */

$(document).ready(function () {
    
    $("#colourscheme").change(function () {
        var colour = $("#colourscheme :selected").attr('value');
        window.location = "?colour=" + colour;
    });

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

    var colour = vars['colour'];

    if (colour == null || colour == "") {
        $("#header").addClass("dark");
        $("#footer").addClass("dark");
    }
    else {
        $("#header").addClass(colour);
        $("#footer").addClass(colour);
    }

});
