/* tooltipster.js */

'use strict';

(function ($) {

    $('.tooltipster').tooltipster({
        animation: 'fade',
        delay: 200,
        theme: 'tooltipster-punk',
        contentAsHTML: true,
        maxWidth: 560,
        trigger: 'click',
        interactive: true
    });

    $('ul.tooltip_ul li:even').addClass('even');

    $('ul.tooltip_ul li:odd').addClass('odd');
})(jQuery);

