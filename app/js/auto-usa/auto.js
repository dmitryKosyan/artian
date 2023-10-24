$('.carousel__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true
});
const tl = gsap.timeline();
tl.fromTo('.header__images', {


    x: 900,
    y: -200
}, {

    duration: 1,
    x: 0,
    y: 0
},
    0.4
)
gsap.registerPlugin(ScrollTrigger);
gsap.from('.services__content-text', {
    scrollTrigger: {
        trigger: '.services',
        start: '+10% center',
        end: '+=350px',
        scrub: 2,
    },
    y: 300,
})
gsap.from('.benefit__images', {
    scrollTrigger: {
        trigger: '.benefit',
        start: '+20% center',
        end: '+=350px',
        scrub: 2,
    },
    y: 300,
})