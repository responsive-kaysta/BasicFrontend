
// https://wp-mix.com/jquery-truncate-text/

'use strict';

function getElementEqualHeight(group) {
    var tallest = 0;
    group.each(function () {
        var thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}

function getTruncateString(group) {
    if (group('#page-wrapper').width() < 1280) {
        group('.target').each(function (index, value) {
            $(this).html($(this).html().substring(0, 24));
        });
    } else {
        group('.target').each(function (index, value) {
            $(this).html($(this).html().substring(0, 48));
        });
    }
}

function writeLogMessage(eventMessage) {
    var eventFired = eventMessage;
    console.log(eventMessage);
}

