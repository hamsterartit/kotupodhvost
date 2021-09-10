/* global $ */

$(document).ready(function () {
    let watchedElements = [];
    let doc = document.documentElement;
    let currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    $('.in-view-watcher').each(function(i, v) {
        watchedElements.push($(v));
    });
    $.fn.extend({
        inViewWatcher: function() {
            watchedElements.push(this);
            return this;
        },
    });
    function checkWatchedElements() {
        currentYScroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        let clientHeight = $(window).height();
        let newWatchedElementsList = [];
        $.each(watchedElements, function(_, obj) {
            if (typeof obj === 'undefined') {
                return;
            }
            let topOfElement = obj.offset().top;
            let bottomOfElement = obj.offset().top + obj.height();

            if (
                (topOfElement > currentYScroll && topOfElement < currentYScroll + clientHeight) ||
                (bottomOfElement > currentYScroll && bottomOfElement < currentYScroll + clientHeight)
            ) {
                obj.addClass('is-in-view');
                obj.trigger('in-view');
            } else {
                newWatchedElementsList.push(obj);
            }
        });
        watchedElements = newWatchedElementsList;
    }
    $(window).on('scroll', checkWatchedElements);
    $(window).on('load', checkWatchedElements);
    checkWatchedElements();

    $(".in-view-watcher").each((i, item) => {
        console.log(i);
        $(item).css("animation-delay", 0.3 * (i + 1) + "s");
    });


    $('.js-nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.js-nav-body').toggleClass('active');
        $('body').toggleClass('locked');
    });
});