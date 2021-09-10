$('.js-give-rate-btn')
    .on('mouseover', function () {
        const rateVal = parseInt($(this).data('value'), 10);
        $(this).parent().children('.js-give-rate-btn').each(function (e) {
            if (e < rateVal) {
                $(this).addClass('_hover');
            } else {
                $(this).removeClass('_hover');
            }
        });
    })
    .on('mouseout', function () {
        $(this).parent().children('.js-give-rate-btn')
            .each(function (e) {
                $(this).removeClass('_hover');
            });
    });
$('.js-give-rate-btn').on('click', function () {
    const rateVal = parseInt($(this).data('value'), 10);
    const rateItems = $(this).parent().children('.js-give-rate-btn');
    for (let i = 0; i < rateItems.length; i++) {
        $(stars[i]).removeClass('_active');
    }
    for (let i = 0; i < rateVal; i++) {
        $(stars[i]).addClass('_active');
    }
});
