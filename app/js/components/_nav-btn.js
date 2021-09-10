$('.js-nav-btn').click(function() {
    $(this).toggleClass('_active');
    $('.js-nav-body').toggleClass('_active');
    $('body').toggleClass('locked');
});
