const masks = {
        tel: '+{7} (000) 000-00-00',
        cvv: '000',
        cardNum: '0000 0000 0000 0000',
};

$('.js-cvv-field').each((i, el) => {
    new IMask(el, {
        mask: masks.cvv
    });
});
$('.js-cart-num-field').each((i, el) => {
    new IMask(el, {
        mask: masks.cardNum
    });
});
$('.js-phone-field').each((i, el) => {
    new IMask(el, {
        mask: masks.tel
    });
});
$('.js-money-field').each((i, el) => {
    new IMask(el, {
        mask: '$num',
        blocks: {
            num: {
                mask: Number,
                thousandsSeparator: ' ',
                radix: '.',
            },
        },
    });
});
