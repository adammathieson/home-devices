
const guy = document.querySelector("#guy3")
guy.style.display = "none"

const doorOpen = document.querySelector("#door-open3")
doorOpen.style.display = "none"

const packageTable = document.querySelector("#package-table")
packageTable.style.display = "none"

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

const tl = gsap.timeline()
    tl.to("#scene-3", {attr:{viewBox: "475 290 100 50"}, delay: 2, duration: 1})

    tl.to("#lock-turn", {rotate: 90, duration: 2.5, delay: 0.5, ease: Linear.easeNone, transformOrigin: "50% 50%"})
    tl.to("#lock-light", {fill:"#7FFF00", repeat: 3})

    tl.to("#scene-3", {attr:{viewBox: "0 0 838 596"}, delay: 1, duration: 1})
    
    tl.to("#door3", {display: "none"})
    tl.to("#door-open3", {display: "block"})
    tl.to("#guy-back3", {display: "none"})
    tl.to("#guy-front-static", {display: "none"}, "-=.5")
    tl.to("#guy3", {display: "block"})
    
    tl.to("#guy3", {x: -320, y: 30, duration: 2.5, onComplete: stopStep})
    
    tl.to("#arm-front-face-right-3", {rotate: 5, duration: 0.05, transformOrigin: "100% 0%"})
    tl.to("#arm-front-face-left-3", {rotate: 5, duration: 0.05, transformOrigin: "100% 0%"}, "-=0.05")

    tl.to("#package-3", {x: -80})

    tl.to("#package-table", {display: "block"})
    tl.to("#guy-front3", {display: "none"})
    tl.to("#guy-back3", {display: "block", x:300, y:-30, duration: 2.5})
    // tl.to("#guy-back3", {x:300, y:-30, duration: 2.5})
    tl.to("#arm-back-face-right", {rotate: -30}, "-=0.5")
    tl.to("#guy3", {display: "none"})
    tl.to("#door-open3", {display: "none"}, "-=0.5")
    tl.to("#door3", {display: "block"})
    tl.to("#guy-front-static", {display: "block", x:-30, duration: 0}, "-=.5")
    tl.to("#guy-front-static", { x: -50, y: 100, scale: 0.8, duration: 2.2})


    





