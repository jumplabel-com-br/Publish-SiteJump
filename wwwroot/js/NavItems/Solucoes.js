 setInterval(function () { widthMenor500px() }, 1000);

    function widthMenor500px() {
        if ($(window).width() <= 500) {
            $('.mobile-col-10').removeClass('col-5').addClass('col-10')
            $('.mobile-col-10 div').removeClass('item-inbox-100px')
        }
    }