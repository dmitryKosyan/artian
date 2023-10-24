
const tl = gsap.timeline();
tl.fromTo('.menu__list li', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    stagger: 0.15
},
    0.5
).fromTo('.slider__text', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1
})
gsap.registerPlugin(ScrollTrigger);
gsap.to('.slider__title', {
    scrollTrigger: {
        trigger: '.slider',
        start: '-20% top',
        scrub: 1,
    },
    yPercent: -80,
    duration: 3,
    scale: 0.4
})
gsap.registerPlugin(ScrollTrigger);
gsap.to('.slider__text', {
    scrollTrigger: {
        trigger: '.slider',
        start: '-20% top',
        scrub: 1,
    },
    yPercent: -700,
    duration: 3,
    scale: 0.1
})
gsap.from('.colection__image-box', {
    scrollTrigger: {
        trigger: '.colection',
        start: ' +60% top',
        and: 'center',
        scrub: 3,

    },
    y: 200,
    duration: 4
})
gsap.from('.colection__title', {
    scrollTrigger: {
        trigger: '.colection',
        start: '-150% center',
        and: ' +50% center',
        scrub: 3,

    },
    y: -50,
    scale: 0,
    duration: 4
})
gsap.from('.decor__title', {
    scrollTrigger: {
        trigger: '.decor',
        start: '-750% top',
        and: ' center',
        scrub: 1,
    },
    xPercent: -200,
    duration: 4,

})
gsap.from('.works__path-text', {
    scrollTrigger: {
        trigger: '.works__path',
        start: '-50% top',
        end: '+=4px',
        scrub: 2,
    },
    y: 100,
    opacity: 0
})