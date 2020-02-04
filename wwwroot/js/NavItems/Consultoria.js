setInterval(function () { widthMenor500px() }, 1000);

function widthMenor500px() {
    if ($(window).width() <= 500) {
        $('.col-4,.col-3').addClass('col-12')
        $('.col-12').removeClass('col-4 col-3')
    }
}