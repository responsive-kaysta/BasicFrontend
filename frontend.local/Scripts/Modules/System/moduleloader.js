/* moduleloader.js */

$(document).ready(function () {

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

});
