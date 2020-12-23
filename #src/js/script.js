$(document).ready(function () {

    // Активный пункт меню слайдера
    const navLink = $('.slider__wrapper-nav a').on('click', function() {
        navLink.not(this).removeClass('slider__link--active');
        $(this).addClass('slider__link--active');
    });

    // Слайдер первого экрана
    $('.slider__carousel').owlCarousel({
        loop:true,
        margin:0,
        navText: [],
        mouseDrag:false,
        URLhashListener:true,
        autoplayHoverPause:true,
        // startPosition: 'URLHash',
        items:1,
        responsive:{
            0:{
                dots: true,
                mouseDrag:true
            },
            769:{
                dots:false
            }
        }
    });

});