setInterval(function () { widthMenor500px() }, 1000);

function widthMenor500px() {
    if ($(window).width() <= 500) {
        $('.replace-col-1-to-col-3').removeClass('col-1');
        $('.replace-col-4-to-col-2').removeClass('col-4');

        $('.replace-col-1-to-col-3').addClass('col-3');
        $('.replace-col-4-to-col-2').addClass('col-2');

        $('.remove-ml-3').removeClass('ml-3')
    }
}