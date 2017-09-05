/* moduleloader.js */

$(document).ready(function () {

    var path = "";

    path = $(location).attr('path'); 

    if (path == null || path == "" || path == "index.html") {
        $('.main-content').load('/Frontend/Modules/jumbotron.html');
    }

    /*
    var module = "";
    $("#moduleloader").change(function () {
        // alert($("#colourscheme :selected").attr('value'))
        module = $("#moduleloader :selected").attr('value');

        if (module == null || module == "") {
            $('#modules').load('/Frontend/Modules/headings.html');
        }
        else if (module == "headings") {
            $('#modules').load('/Frontend/Modules/headings.html');
        }
        else if (module == "texts") {
            $('#modules').load('/Frontend/Modules/texts.html');
        }
    });
    */

});
