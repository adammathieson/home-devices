
const guyBack = document.querySelector("#guy-back").style.display = "none"

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

// const tlWalk = gsap.timeline({repeat: -1, duration: .5, yoyo: true})

// tlWalk.set("#guy-back", {transformOrigin: "50%, 0%"})

// tlWalk.fromTo("#leg-right", {rotate: 10}, {rotate: -10, ease: Linear.easeNone})
// tlWalk.fromTo("#leg-left", {rotate: -10}, {rotate: 10, ease: "none"}, '-=1')

// tlWalk.pause()

const tl = gsap.timeline()
    tl.fromTo("#scene-1", 1, {opacity: 0}, {opacity: 1})
    tl.to("#bg-houses", {x: -60, duration: 6, ease: Linear.easeNone}, "-=1.5")
    tl.to("#foreground", {x: -650, duration: 6, ease: Linear.easeNone}, "-=6")
    tl.to("#guy", {x: 500, duration: 3, ease: Linear.easeNone})
    tl.to("#guy-side", {display: "none", duration: 0})
    tl.to("#guy-back", {display: "block", duration: 0})
    tl.to("#scene-1", 3,{attr:{viewBox: "400 200 400 148"}})
    tl.to("#guy", 3, {scale:0.43, y: -16, onComplete: stopWalking}, "-=3")
    tl.to("#scene-1", 2, {attr:{viewBox: "585 240 100 70"}})
    tl.to("#scene-1", 2, {attr:{viewBox: "570 290 100 70"}, delay: 3})
    tl.to("#scene-1", 2, {attr:{viewBox: "570 290 100 70"}, delay: 2})
    tl.to("#scene-1", 2, {attr:{viewBox: "400 200 400 148"}})
    tl.fromTo("#scene-1", 1, {opacity: 1}, {opacity: 0, onComplete: goToScene2})



// tl.to("#scene-container", {translateX: "-995", duration: 7, ease: 'none'})
    // tl.to("#guy-side", {display: "none"},"-=0.5")
    // tl.to("#guy-back", {display: "block"})
    // tl.to("#guy-back", 3, {scale: 0.43, y:22, x:5, onComplete: stopWalking})
    // tl.to("#scene-1", {attr:{viewBox: "100 250 207 448"}, duration: 3}, "-=3.2")

    // attr:{viewBox: "0 250 414 400"}