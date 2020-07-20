
const rLeg = TweenMax.fromTo("#leg-right", .7, {rotate: 10}, {rotate: -10, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLeg.progress(0.5).pause();
rLeg.play();

const lLeg = TweenMax.fromTo("#leg-left", .7, {rotate: -10}, {rotate: 10, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLeg.progress(0.5).pause();
lLeg.play();

const rLegBack = TweenMax.fromTo("#leg-right-back", .7, {rotate: 7}, {rotate: -7, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegBack.progress(0.5).pause();
rLegBack.play();

const lLegBack = TweenMax.fromTo("#leg-left-back", .7, {rotate: -7}, {rotate: 7, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegBack.progress(0.5).pause();
lLegBack.play();

const stopWalking = () => {
    lLegBack.pause()
    rLegBack.pause()
}

// const tlWalk = gsap.timeline({repeat: -1, duration: .5, yoyo: true})

// tlWalk.set("#guy-back", {transformOrigin: "50%, 0%"})

// tlWalk.fromTo("#leg-right", {rotate: 10}, {rotate: -10, ease: Linear.easeNone})
// tlWalk.fromTo("#leg-left", {rotate: -10}, {rotate: 10, ease: "none"}, '-=1')

// tlWalk.pause()

const tl = gsap.timeline()
    tl.to("#scene-container", {translateX: "-995", duration: 7, ease: 'none'})
    tl.to("#guy-side", {display: "none"},"-=0.5")
    tl.to("#guy-back", {display: "block"})
    tl.to("#guy-back", 3, {scale: 0.43, y:22, x:5, onComplete: stopWalking})
    tl.to("#scene-1", {attr:{viewBox: "150 250 207 448"}, duration: 3}, "-=3.2")

    // attr:{viewBox: "0 250 414 400"}