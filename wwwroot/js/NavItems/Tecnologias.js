﻿$('#h2-data-enginner-big-data').css({ 'color': '#ef8822' })

function addEffectFadeUp() {
    $('.img-col-6-mobile').removeClass('aos-init aos-animate');
    $('.img-col-6-mobile').attr({ 'data-aos': 'fade-up' })
    setTimeout(function () { $('.img-col-6-mobile').addClass('aos-init aos-animate'); }, 100)
}

function ocultMods() {
    $('#data-enginner-big-data,#data-science-machine-learning,#data-visualization,#data-protection').hide();
};

$('#h2-data-enginner-big-data').on('click', function () {
    ocultMods();
    $('#data-enginner-big-data').show();
    $(this).css({ 'color': '#ef8822' });
    $('#h2-data-science-machine-learning,#h2-data-visualization,#h2-data-protection').css({ 'color': '#000' });
    addEffectFadeUp();
});

$('#h2-data-science-machine-learning').on('click', function () {
    ocultMods();
    $('#data-science-machine-learning').show();
    $(this).css({ 'color': '#ef8822' });
    $('#h2-data-enginner-big-data,#h2-data-visualization,#h2-data-protection').css({ 'color': '#000' });
    addEffectFadeUp();
});

$('#h2-data-visualization').on('click', function () {
    ocultMods();
    $('#data-visualization').show();
    $(this).css({ 'color': '#ef8822' });
    $('#h2-data-enginner-big-data,#h2-data-science-machine-learning,#h2-data-protection').css({ 'color': '#000' });
    addEffectFadeUp();
});

$('#h2-data-protection').on('click', function () {
    ocultMods();
    $('#data-protection').show()
    $(this).css({ 'color': '#ef8822' });
    $('#h2-data-enginner-big-data,#h2-data-science-machine-learning,#h2-data-visualization').css({ 'color': '#000' });
    addEffectFadeUp();
});

function widthMenor700px() {
    if ($(window).width() < 768) {
        //$('img').attr({ 'width': '148', 'height': '149' })
        $('img:eq(1)').attr({ 'width': '58', 'height': '89' })

        $('img:eq(0)').attr({ 'width': '150', 'height': '80' })

        $('.img-pena-tecnologias').attr({ 'width': '40', 'height': '40' })
        $('.ft-18').css({ 'font-size': '8px' })
        $('.hover-ef8822').css({ 'font-size': '13px' })

        $('.text-tipo-tecnologias').removeClass('col-3').addClass('col-12 text-center');
        $('.img-tipo-tecnologias').removeClass('col-3').addClass('col-6 text-center');
        $('.mobile-col-9').removeClass('col-8').addClass('col-9');
        $('.text-col-12-mobile').removeClass('ml-5');
    }
}

setInterval(function () { widthMenor700px() }, 1000);

widthMenor700px()
