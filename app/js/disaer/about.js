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
)
gsap.registerPlugin(ScrollTrigger);
gsap.to('.about__title', {
    scrollTrigger: {
        trigger: '.about',
        start: '-20% top',
        scrub: 1,
    },
    yPercent: 200,
    duration: 3,
    scale: 1
})
gsap.from('.about__text', {
    scrollTrigger: {
        trigger: '.about__content',
        start: '-10% top',
        end: '+=4px',
        scrub: 2,
    },
    y: 200,
    opacity: 0,
    duration: 0.5
})
gsap.from('.insperation__text', {
    scrollTrigger: {
        trigger: '.insperation',
        start: '-10% top',
        end: '+=4px',
        scrub: 2,
    },
    y: 100,
    opacity: 0,
    duration: 0.5
})
gsap.to('.colection__title', {
    scrollTrigger: {
        trigger: '.colection',
        start: '-70% top',
        scrub: 1,
    },
    yPercent: -200,
    duration: 3,
    scale: 1
})
gsap.to('.colection__text', {
    scrollTrigger: {
        trigger: '.colection',
        start: '-40% top',
        scrub: 1,
    },
    yPercent: -200,
    duration: 3,
    scale: 1
})