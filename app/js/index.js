


//modal window of contacts
const modalContacts = document.querySelector('.header__modal');
const contacts = document.querySelector('.header-menu_items.modal');

contacts.addEventListener('mouseenter', () => {
    modalContacts.style.display = 'block';
    modalContacts.addEventListener('mouseleave', () => {
        modalContacts.style.display = 'none';
    })
})

// hover efect of cards
const parent = document.querySelectorAll('.services-wrapp_card');
parent.forEach(el => {
    el.addEventListener('mouseenter', () => {
        el.style.background = '#ffffff';
        el.firstElementChild.style.color = '#000000';
    })
    el.addEventListener('mouseleave', () => {
        el.style.background = '';
        el.firstElementChild.style.color = '';
    });
});
//services button card-modal

const servicesButton = document.querySelectorAll('.services__wrapp-block');
servicesButton.forEach(el => {
    const modalBlock = el.lastElementChild
    const modalBtn = el.querySelectorAll('.services-button')
    modalBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            modalBlock.style.display = 'block'
        })
    })
})

//services button close-modal
const serviceButtonClose = document.querySelectorAll('.services__button-close')
serviceButtonClose.forEach(el => {
    el.addEventListener('click', () => {
        const servicesModalBlock = document.querySelectorAll('.services__modal-block')
        servicesModalBlock.forEach(elem => {
            elem.addEventListener('click', () => {
                elem.style.display = 'none'
            })
        })
    })
})
// calculater
const check = document.querySelectorAll('.cost-input_slider')
let textPrice = document.querySelector('.cost__modal-price');
const rezetPrice = document.querySelector('.cost__modal-price');
let price = 0;
check.forEach(el => {

    el.addEventListener('change', () => {
        let cost = el.querySelector('.check-box');

        if (cost.checked) {
            price += +cost.value
            textPrice.innerHTML = price + ' руб.'
        }
        if (!cost.checked) {
            price -= +cost.value
            textPrice.innerHTML = price + ' руб.'
        }

        if (price === 0) {
            textPrice.innerHTML = 'выберите опцию'

        }

    })
})
//modal window showing cost
const howMatchButton = document.querySelector('.cost__button')
const costModal = document.querySelector('.cost__modal')

howMatchButton.addEventListener('click', (event) => {

    costModal.style.display = "block"
    event.stopPropagation();

    window.addEventListener('click', (event) => {
        if (event.target !== costModal) {
            costModal.style.display = 'none'
        }
    })
})
//reset input
const landingPage = document.getElementById('check')
const siteVizitka = document.getElementById('check2')
const pageOne = document.getElementById('check8')
const pageTwo = document.getElementById('check9')

landingPage.addEventListener('change', () => {
    landingPage.checked ? pageOne.disabled = true : pageOne.disabled = false
    landingPage.checked ? pageTwo.disabled = true : pageTwo.disabled = false

})

siteVizitka.addEventListener('change', () => {
    siteVizitka.checked ? pageOne.disabled = true : pageOne.disabled = false
    siteVizitka.checked ? pageTwo.disabled = true : pageTwo.disabled = false

})

//button up to start
$(document).ready(function () {
    $(window).scroll(function () { if ($(this).scrollTop() > 500) { $('#scroller').fadeIn(); } else { $('#scroller').fadeOut(); } });
    $('#scroller').click(function () { $('body,html').animate({ scrollTop: 0 }, 1000); return false; });
});


//animation header
const tl = gsap.timeline();
tl.fromTo('.header-menu_link li', {
    y: -50,
    opacity: 0,
}, {
    y: 0,
    opacity: 1,
    stagger: 0.15
},
    0.5
).from('.web-title_one', {
    x: -500,
    opacity: 0,
    duration: 2
}).from('.web-title_two', {

    opacity: 0,
    duration: 2
})





gsap.registerPlugin(ScrollTrigger);
// gsap.from('.services-title', {
//     scrollTrigger: {
//         trigger: '.web',
//         start: 'top top',
//         scrub: 1,
//     },
//     css: {
//         fontSize: '80px',
//     },
//     delay: 2,
//     duration: 0.5,
// })
//animation services block
gsap.from('.services-inner_card ', {
    scrollTrigger: {
        trigger: '.services',
        start: '-20% center',
        end: '+=250px',
        scrub: 2,
    },
    y: 300,
})
//animation how we work block
// gsap.from('.work-title', {
//     scrollTrigger: {
//         trigger: '.services-inner',
//         start: 'top top',
//         //scrub: 0.5,
//     },
//     css: {
//         fontSize: '80px',
//     },
//     duration: 1,
// })

//animation cost block

gsap.from('.cost-title', {
    scrollTrigger: {
        trigger: '.work-img_inner',
        start: '+20% center',
        scrub: 0.5,
    },
    css: {
        fontSize: '80px',
    },
    duration: 1,
})
gsap.from('.img__inner', {
    scrollTrigger: {
        trigger: '.cost',
        start: '-5% center',
        end: '+=100px',
        scrub: 2
    },
    xPercent: -50,
    delay: 0.1,
    ease: 'none',
    scale: 0.4
})
gsap.from('.cost-text', {
    scrollTrigger: {
        trigger: '.cost',
        start: '+10% center',
        end: '+=50px',
        scrub: 2,
    },
    y: 100,
    opacity: 0
})
//animation partfolio block
// gsap.from('.works-inner ', {
//     scrollTrigger: {
//         trigger: '.works',
//         start: '+10% center',
//         end: '+=100px',
//         scrub: 2,
//     },
//     y: 300,
//     duration: 0.5
// })


//animation orders block
gsap.from('.order__box-img', {
    scrollTrigger: {
        trigger: '.order',
        start: '-5% center',
        end: '+=100px',
        scrub: 2
    },
    xPercent: -50,
    delay: 0.1,
    ease: 'none',
    scale: 0.4
})

//animate artian
gsap.registerPlugin(Flip);

let layouts = ["final", "plain", "columns", "grid"],
    container = document.querySelector(".containers"),
    curLayout = 0; // index of the current layout

function nextState() {
    const state = Flip.getState(".letter, .for", { props: "color,backgroundColor", simple: true }); // capture current state

    container.classList.remove(layouts[curLayout]); // remove old class
    curLayout = (curLayout + 1) % layouts.length;   // increment (loop back to the start if at the end)
    container.classList.add(layouts[curLayout]);    // add the new class

    Flip.from(state, { // animate from the previous state
        absolute: true,
        stagger: 0.07,
        duration: 0.7,
        ease: "power2.inOut",
        spin: curLayout === 0, // only spin when going to the "final" layout
        simple: true,
        onEnter: (elements, animation) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
        onLeave: elements => gsap.to(elements, { opacity: 0 })
    });

    gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
}

gsap.delayedCall(1, nextState);




//function animation() {

//}

//animation();

const words = gsap.utils.toArray(".words-li");
const images = gsap.utils.toArray(".pic-position");
const imagesAmount = images.length;
let activeIndex = 0;
gsap.set(images[activeIndex], { zIndex: imagesAmount });

words.forEach((item, i) => {
    const charts = gsap.timeline({ paused: true });
    charts
        .to(item.querySelectorAll(".single-chart1"), {
            yPercent: -100,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.in"
        })
        .from(
            item.querySelectorAll(".single-chart2"),

            { yPercent: 100, duration: 0.4, stagger: 0.04, ease: "power1.in" },
            "<0.001"
        );
    item.addEventListener("mouseenter", () => {
        gsap.set(images[activeIndex], { zIndex: 1 });
        gsap.set(images[i], { zIndex: imagesAmount });
        charts.play();
        activeIndex = i;
    });
    item.addEventListener("mouseleave", () => {
        charts.reverse();
    });
});














let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('galary__frame')
frames = Array.from($frames)
zVols = []

window.onscroll = function () {

    let top = document.documentElement.scrollTop
    delta = lastPos - top
    lastPos = top
    frames.forEach((n, i) => {
        zVols.push((i * zSpacing) + zSpacing)
        zVols[i] += delta * -5
        let frame = frames[i]
        let transform = `translateZ(${zVols[i]}px)`
        frame.setAttribute('style', `transform:${transform}`)
    })
}
// let items = gsap.utils.toArray(".work-items"),
//     pageWrapper = document.querySelector(".work-inner");

// items.forEach((container, i) => {
//     let localItems = container.querySelectorAll(".work-item"),
//         distance = () => {
//             let lastItemBounds = localItems[localItems.length - 1].getBoundingClientRect(),
//                 containerBounds = container.getBoundingClientRect();
//             return Math.max(0, lastItemBounds.right - containerBounds.right);
//         };
//     gsap.to(container, {
//         x: () => -distance(), // make sure it dynamically calculates things so that it adjusts to resizes
//         ease: "none",
//         scrollTrigger: {
//             trigger: container,
//             start: "center center",
//             pinnedContainer: pageWrapper,
//             end: () => "+=" + distance(),
//             pin: pageWrapper,
//             scrub: true,
//             invalidateOnRefresh: true // will recalculate any function-based tween values on resize/refresh (making it responsive)
//         }
//     })
// });