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
    // tl.to("#bg-houses", {x: -60, duration: 6, ease: Linear.easeNone}, "-=1.5")
    // tl.to("#foreground", {x: -650, duration: 6, ease: Linear.easeNone}, "-=6")

    tl.fromTo("#guy", 3, {x: -200}, {x: 290, ease: Linear.easeNone})
    tl.to("#guy-side", {display: "none", duration: 0})
    tl.to("#guy-back", {display: "block", duration: 0})
    tl.to("#scene-1", 3,{attr:{viewBox: "250 250 400 200"}})
    tl.to("#guy", 3, {scale:0.38 , y: -3, onComplete: stopWalking}, "-=3")

    // zoom in on product 1
    if (window.innerWidth < 501) {
        // console.log("<501")
        tl.to("#scene-1", 2,{attr:{viewBox: "470 305 30 10"}})
            .set("#card", {x: 0, y: 0, width: window.innerWidth})
        
    } else if (window.innerWidth < 800) {
        // console.log('<800')
        tl.to("#scene-1", 2, {attr:{viewBox: "470 300 50 30"}})
            .set("#card", {x: "80%", y: "100%"})

    } else if (window.innerWidth < 1000) {
        tl.to("#scene-1", 2, {attr:{viewBox: "470 300 50 30"}})
            .set("#card", {x: "120%", y: "100%"})
    } else {
        // console.log('>1200')
        tl.to("#scene-1", 2,{attr:{viewBox: "470 300 50 30"}})
            .set("#card", {x: "170%", y: "100%"})
    }  
    tl.to("#card", {display: "block"})
    tl.to("#card", .3, {opacity: 0, delay: 4})
    tl.to("#card", {display: "none", onComplete: swapItem})

    // zoom in on product 2
    if (window.innerWidth < 600) {
        // console.log("<501")
        tl.to("#scene-1", 2,{attr:{viewBox: "460 350 30 10"}})
            .set("#card", {x: 0, y: 0, width: window.innerWidth})
        
    } else if (window.innerWidth < 800) {
        // console.log('<800')
        tl.to("#scene-1", 2, {attr:{viewBox: "465 350 40 20"}})
            .set("#card", {x: "110%", y: "100%"})

    } else if (window.innerWidth < 1000) {
        tl.to("#scene-1", 2, {attr:{viewBox: "460 350 40 20"}})
            .set("#card", {x: "140%", y: "100%"})
    } else {
        // console.log('>1000')
        tl.to("#scene-1", 2,{attr:{viewBox: "460 350 40 20"}})
            .set("#card", {x: "200%", y: "100%"})
    }  
    tl.to("#card", {display: "block", opacity: 1})
    tl.to("#card", .3, {opacity: 0, delay: 4})

    tl.to("#scene-1", 2, {attr:{viewBox: "250 250 400 200"}})
    tl.to("#scene-1", .5, {opacity: 0, onComplete: goToScene2})