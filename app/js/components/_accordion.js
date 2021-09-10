$('.js-open-accordion').on('click', function () {
    if ($(this).parents().hasClass('_active')) {
        $(this).parents('.js-accordion-set').removeClass('_active');
        $(this).siblings('.js-accordion-content').slideUp(200);
    } else {
        $('.js-open-accordion').parents().removeClass('_active');
        $('.js-accordion-set').removeClass('_active');
        $(this).parents('.js-accordion-set').addClass('_active');
        $('.js-accordion-content').slideUp(200);
        $(this).siblings('.js-accordion-content').slideDown(200);
    }
});
