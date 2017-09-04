/* searchbox.js */

$(document).ready(function () {

    $("#searchQuerySubmit").prop('disabled', true);

});

$('input#searchQuery').keyup(function () {

    if (($('#searchQuery').val().length >= 3)) {
        $("#searchQuerySubmit").prop('disabled', false);
    }
    else {
        $("#searchQuerySubmit").prop('disabled', true);
    }

});