const tl = gsap.timeline();
tl.fromTo('.header__title', {

    opacity: 0,
    x: -400
}, {
    opacity: 1,
    duration: 3,
    x: 0
},
    0.4
)

gsap.registerPlugin(ScrollTrigger);
gsap.from('.header__bottom-text', {
    scrollTrigger: {
        trigger: '.header',
        start: '+40% center',
        end: '+=350px',
        scrub: 2,
    },
    y: 300,
})

gsap.from('.header__bottom-phone', {
    scrollTrigger: {
        trigger: '.header',
        start: '+40% center',
        end: '+=350px',
        scrub: 2,
    },
    y: 300,
})
gsap.from('.header__btn', {
    scrollTrigger: {
        trigger: '.header',
        start: '+40% center',
        end: '+=350px',
        scrub: 2,
    },
    y: 300,
})
gsap.from('.projects__text', {
    scrollTrigger: {
        trigger: '.header',
        start: 'top',
        end: 'bottom',
        scrub: 2,
    },
    y: 300,
})
gsap.from('.projects__card', {
    scrollTrigger: {
        trigger: '.header__bottom-block',
        start: ' top',
        and: ' bottom',
        scrub: 2,

    },
    stagger: 3,
    scale: 0,
    delay: 2,

})
gsap.from('.about__text', {
    scrollTrigger: {
        trigger: '.about',
        start: '-60% top',
        end: '+=4px',
        scrub: 2,
    },
    y: 100,
    opacity: 0
})
gsap.from('.about__item-text', {
    scrollTrigger: {
        trigger: '.about',
        start: '-30% top',
        end: '+=4px',
        scrub: 2,
    },
    y: 100,
    opacity: 0
})
gsap.from('.partners__item', {
    scrollTrigger: {
        trigger: '.about__item-text',
        start: '-300% top',
        and: '+=10px',
        scrub: 1,

    },
    stagger: 1,
    scale: 0,


})