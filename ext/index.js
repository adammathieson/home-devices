import { infoCard } from "../info-card/index.js"

const item = {
    title: "Wyze Cam V2",
    fact1: "Night Vision, 2-way Audio",
    fact2: "1080p Full HD, 8x Digital Zoom",
    price: "$19.99"
}
const item2 = {
    title: "Wyze Lock Keypad",
    fact1: "Wire Free, One-touch Lock",
    fact2: "Time-based Guest Codes",
    price: "$19.99"
}
let tempCard = item
infoCard(tempCard)

const swapItem = () => {
    infoCard(item2)
}

const rLeg = TweenMax.fromTo("#leg-right", .5, {rotate: 6}, {rotate: -6, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLeg.progress(0.5).pause();
rLeg.play();

const lLeg = TweenMax.fromTo("#leg-left", .5, {rotate: -6}, {rotate: 6, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLeg.progress(0.5).pause();
lLeg.play();

const rLegBack = TweenMax.fromTo("#leg-right-back", .5, {rotate: 6}, {rotate: -6, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegBack.progress(0.5).pause();
rLegBack.play();

const lLegBack = TweenMax.fromTo("#leg-left-back", .5, {rotate: -6}, {rotate: 6, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegBack.progress(0.5).pause();
lLegBack.play();

const stopWalking = () => {
    lLegBack.pause()
    rLegBack.pause()
}

const goToScene2 = () => {
    window.location.pathname = "scene2.html"
}

const tl = gsap.timeline()
    tl.to("#scene-1", 1, {opacity: 1})
    tl.to("#bg-houses", {x: -60, duration: 6, ease: Linear.easeNone}, "-=1.5")
    tl.to("#foreground", {x: -650, duration: 6, ease: Linear.easeNone}, "-=6")
    
    tl.to("#guy", {x: 500, duration: 3, ease: Linear.easeNone})
    tl.to("#guy-side", {display: "none", duration: 0})
    tl.to("#guy-back", {display: "block", duration: 0})
    tl.to("#scene-1", 3,{attr:{viewBox: "400 200 400 148"}})
    tl.to("#guy", 3, {scale:0.43, y: -16, onComplete: stopWalking}, "-=3")

    tl.to("#scene-1", 2, {attr:{viewBox: "585 260 80 40"}})
    tl.to("#card", {display: "block"})
    tl.fromTo("#card", .3, {x: 100, y: 300, opacity: 0}, {x: 370, opacity: 1})
    tl.to("#card", .3, {opacity: 0, delay: 4})
    tl.to("#card", {display: "none", onComplete: swapItem})

    tl.to("#scene-1", 2, {attr:{viewBox: "600 310 80 40"}}, "-=.5")
    tl.to("#card", {display: "block"})
    tl.fromTo("#card", .3, {x: 800, y: 240, opacity: 0}, {x: 630, opacity: 1})
    tl.to("#card", .3, {opacity: 0, delay: 4})

    tl.to("#scene-1", 2, {attr:{viewBox: "400 200 400 148"}})
    tl.to("#scene-1", .5, {opacity: 0, onComplete: goToScene2})