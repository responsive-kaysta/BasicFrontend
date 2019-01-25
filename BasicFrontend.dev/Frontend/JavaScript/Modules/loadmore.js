/* loadmore.js */

$(document).ready(function () {

    $("li.tooltipster").slice(0, 20).show();

    $("#loadMore").on('click', function (e) {

        e.preventDefault();

        $("li:hidden").slice(0, 20).slideDown();

        if ($("li:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }

    });

});