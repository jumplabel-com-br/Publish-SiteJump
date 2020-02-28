function ocultMods() {
    addEffectFadeUp();
    $('#data-enginner-big-data,#data-science-machine-learning,#data-visualization,#robot-process-automation-solutions').hide();
};

$('#h2-data-enginner-big-data').on('click', function () {
    ocultMods();
    $('#data-enginner-big-data').show();
});

$('#h2-data-science-machine-learning').on('click', function () {
    ocultMods();
    $('#data-science-machine-learning').show();
});

$('#h2-data-visualization').on('click', function () {
    ocultMods();
    $('#data-visualization').show();
});

$('#h2-robot-process-automation-solutions').on('click', function () {
    ocultMods();
    $('#robot-process-automation-solutions').show();
});

function addEffectFadeUp() {
    $('img').removeAttr('data-aos');
    $('img').attr({ 'data-aos': 'fade-up' });
}

function widthMenor700px() {
    if ($(window).width() < 768) {
        $('img').attr({ 'width': '80', 'height': '80' })
        $('.img-pena-tecnologias').attr({ 'width': '40', 'height': '40' })
        $('.ft-18').css({ 'font-size': '8px' })
        $('.hover-ef8822').css({ 'font-size': '13px' })

        $('.text-tipo-tecnologias').removeClass('col-3').addClass('col-12 text-center');
        $('.img-tipo-tecnologias').removeClass('col-3').addClass('col-6 text-center');
        $('.mobile-col-9').removeClass('col-8').addClass('col-9');
    }
}

setInterval(function () { widthMenor700px() }, 1000);

widthMenor700px()
