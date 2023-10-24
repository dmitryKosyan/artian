const tl = gsap.timeline();
tl.fromTo('.portfolio__title', {

    opacity: 0,
}, {
    opacity: 1,
    duration: 3
},
    0.4
)
tl.fromTo('.portfolio__text', {
    y: 100,
    opacity: 0,

}, {
    opacity: 1,
    y: 0,
    duration: 1
},
    0.4
)