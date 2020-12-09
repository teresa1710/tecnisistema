$(document).ready(function(){
    var Areas = $('#areas').offset().top;
    var Contacto = $('#contacto').offset().top;

    $('#btn-areas').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 1000
        }, 500);
    });

    $('#btn-contacto').on('click', function(f){
        f.preventDefault();
        $('html, body').animate({
            scrollTop: 1800
        }, 500);
    });    
})