const $notice = $('.js-cookies-notice');
if (Cookies.get('cookies-notice') === undefined) {
    $notice.prop('hidden', false);
}

$notice.find('.js-cookies-notice-btn').on('click', () => {
    Cookies.set('cookies-notice', true);
    $notice.css('opacity', '0');
    $notice.css('transformY', '-100%');
    $notice.remove();
});
