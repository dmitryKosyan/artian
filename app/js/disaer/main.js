$(function () {
    $('.header__btn-menu').on('click', function () {
        $('.menu').toggleClass('.menu__open')

    });
    // $('.slider__top').slick({
    //     arrows: false,
    //     dots: ,
    //     autoplay: true
    // });

    $('.contact__image-box').slick({
        arrows: false,
        dots: true,
        // autoplay: true,
        slidesToShow: 10,
        slidesToScroll: 10
    });
    $('.blogs__slider').slick({
        arrows: true,
        dots: false,

        slidesToShow: 1,
        slidesToScroll: 1
    });

})

