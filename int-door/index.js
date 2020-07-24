import { infoCard } from "../info-card/index.js"

const rLegBack = TweenMax.fromTo("#leg-right-back-3", .5, {rotate: 6}, {rotate: -6, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegBack.progress(0.5).pause();
rLegBack.play();

const lLegBack = TweenMax.fromTo("#leg-left-back-3", .5, {rotate: -6}, {rotate: 6, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegBack.progress(0.5).pause();
lLegBack.play();

const rLegFront = TweenMax.fromTo("#leg-right-front-3", .5, {rotate: 6}, {rotate: -6, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegFront.progress(0.5).pause();
rLegFront.play();

const lLegFront = TweenMax.fromTo("#leg-left-front-3", .5, {rotate: -6}, {rotate: 6, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegFront.progress(0.5).pause();
lLegFront.play();

const stopStep = () => {
    lLegFront.pause()
    rLegFront.pause()
}

const goToScene4 = () => {
    window.location.pathname = '/scene4.html'
}

const item = {
    title: "Wyze Lock",
    fact1: "Remote Access",
    fact2: "Auto lock / unlock",
    price: "$99.99"
}
infoCard(item)

const tl = gsap.timeline()
    tl.fromTo("#scene-3", 1, {opacity: 0}, {opacity: 1})      
    tl.to("#scene-3", {attr:{viewBox: "475 290 100 50"}, delay: 1, duration: 1})
    tl.to("#card", {display: "block"})
    tl.fromTo("#card", .3, {x: 20, y: 180, opacity: 0}, {x: 200, opacity: 1})
    tl.to("#card", .3, {opacity: 0, delay: 4})

    tl.to("#lock-turn", {rotate: 90, duration: 2, delay: 0.5, ease: Linear.easeNone, transformOrigin: "50% 50%"}, "-=1")
    tl.to("#lock-light", {fill:"#7FFF00", repeat: 3})

    tl.to("#scene-3", {attr:{viewBox: "0 0 838 596"}, delay: 1, duration: 1})
    
    tl.to("#door3", {display: "none"})
    tl.to("#door-open3", {display: "block"})
    tl.to("#guy-front-static", {display: "none"})
    tl.to("#guy3", {display: "block"})

    tl.to("#guy3", {x: -320, y: 30, duration: 2.5, onComplete: stopStep}, "-=.5")
    
    tl.to("#arm-front-face-right-3", {rotate: 5, duration: 0.05, transformOrigin: "100% 0%"})
    tl.to("#arm-front-face-left-3", {rotate: 5, duration: 0.05, transformOrigin: "100% 0%"}, "-=0.05")

    tl.to("#package-3", {x: -80})

    tl.to("#package-table", {display: "block"})
    tl.to("#guy-front3", {display: "none"})
    tl.to("#guy-back3", {display: "block"})
    tl.to("#guy-back3", {x:300, y:-30, duration: 2.5}, "-=.3")
    tl.to("#arm-back-face-right", {rotate: -30}, "-=0.5")
    tl.to("#guy3", {display: "none"})
    tl.to("#door-open3", {display: "none"}, "-=0.5")
    tl.to("#door3", {display: "block"})
    tl.to("#guy-front-static", {display: "block", x:-30, duration: 0}, "-=.5")
    tl.to("#guy-front-static", { x: -50, y: 100, scale: 0.8, duration: 2.2})
    tl.fromTo("#scene-3", 1, {opacity: 1}, {opacity: 0, onComplete: goToScene4})


    





