
const goToScene5 = () => {
    window.location.pathname = '/scene5.html'
}

const tl = gsap.timeline()
    tl.to("#scene-4", 1, {opacity: 1})
    tl.to("#arm-int-right", 0.15, {y:-5, repeat: 2, delay: 1})
    tl.to("#window-job-app", 0, {display: "none"})
    tl.to("#guy4", 0, {scaleX: -1, transformOrigin: "75% 50%", delay: .5})
    tl.to("#chair-front", 0, {scaleX: -1, transformOrigin: "50% 50%"})
    tl.to("#arm-int-right", .2, {rotate: 90, transformOrigin: "100% 0%"})
    tl.to("#arm-int-left", .2, {rotate: 70, transformOrigin: "100% 0%"}, "-=.2")
    tl.to("#leg-left-3", .2, {rotate: 20, transformOrigin: "100% 0%"}, "-=.2")
    tl.to("#body-int-upper", .2, {rotate: 15, transformOrigin: "50% 100%"}, "-=.2")
    tl.to("#guy4, #chair-front", 3, {x: -1000}, "-=.15")
    tl.to("#scene-4", .5, {opacity: 0, onComplete: goToScene5}, "-=2" )