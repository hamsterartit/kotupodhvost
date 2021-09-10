function stickyHeader() {
    const scroll = $(window).scrollTop();
    const header = $('.header');
    if (scroll >= header.offsetHeight) {
        header.addClass('header--fixed');
    } else {
        header.removeClass('header--fixed');
    }
}

stickyHeader();
$(window).scroll(function() {
    stickyHeader();
});
