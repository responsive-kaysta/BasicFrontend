/* equalheight.js */

(function ($) {

    // Making elements equal height
    var equalheight = function (container) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        $(container).find('.equal').each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    };

    // Check for window width before resizing
    function equalHeightChecker() {
        if (window.innerWidth > 767 && !heightIsSet) {
            $('.equalizer')
                .each(function () {
                    equalheight(this);
                    heightIsSet = true;
                });
        }
        else if (window.innerWidth < 768 && heightIsSet) {
            $('.equalizer')
                .each(function () {
                    $(this).find('.equal').each(function () {
                        this.style.height = 'auto';
                    });
                    heightIsSet = false;
                });
        }
    }

    // Initialize equal height script
    var heightIsSet;

    // On load
    $(window).ready(function () {
        equalHeightChecker();
    });

    // and on resize
    $(window).resize(function () {
        equalHeightChecker();
    });


})(jQuery);