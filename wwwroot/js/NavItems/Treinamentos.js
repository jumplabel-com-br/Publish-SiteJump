﻿setInterval(function () { widthMenor500px() }, 1000);

function widthMenor500px() {
    if ($(window).width() <= 500) {
        $('.mobile-col-10').removeClass('col-3 col-5 col-6').addClass('col-10');
        $('.mobile-col-12').removeClass('col-3 col-5').addClass('col-12');
        $('.remove-ml-3').removeClass('ml-3').attr({ "style": 'margin-left : 30px; margin-top: 20px' })
        $('.item-inbox-75px').removeClass('item-inbox-75px').addClass('item-inbox-25px')
        $('.item-inbox-25px img').attr({ 'height': '200' });
        $('.mobile-height-max').attr({ 'style': 'height : 1020px !important' });
        $('.item-inbox-100px').addClass('item-inbox-150px').removeClass('item-inbox-100px')
    }
}