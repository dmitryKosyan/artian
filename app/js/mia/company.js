const tl = gsap.timeline();
tl.fromTo('.company__info', {

    opacity: 0,
    x: -100
}, {
    opacity: 1,
    duration: 3,
    x: 0
},
    0.4
)

tl.fromTo('.company__title', {

    opacity: 0,
    y: -100
}, {
    opacity: 1,
    duration: 3,
    y: 0
},
    0.4
)
