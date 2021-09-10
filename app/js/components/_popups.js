$('.js-open-popup-btn').click(function(e) {
    e.preventDefault();
    const $btn = $(e.currentTarget);
    const $popupId = $btn.attr('data-popup-btn');
    $("[data-popup='" + $popupId + "']").removeClass('hidden');
    $('body').addClass('locked');
});
$('.js-close-popup').click(function(e) {
    const $btn = $(e.currentTarget);
    $btn.parents('.popup').addClass('hidden');
    $('body').removeClass('locked');
});
