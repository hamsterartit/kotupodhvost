/* global $ */
$(document).ready(function () {
    $('.js-nav-btn').click(function () {
        $(this).toggleClass('active');
        $('.js-nav-body').toggleClass('active');
        $('body').toggleClass('locked');
    });
});