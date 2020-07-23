const guy = document.querySelector("#guy3")
guy.style.display = "none"

const doorOpen = document.querySelector("#door-open3")
doorOpen.style.display = "none"

const rLegBack = TweenMax.fromTo("#leg-right-back_2", .7, {rotate: 7}, {rotate: -7, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegBack.progress(0.5).pause();
// rLegBack.play();

const lLegBack = TweenMax.fromTo("#leg-left-back_2", .7, {rotate: -7}, {rotate: 7, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegBack.progress(0.5).pause();
// lLegBack.play();

const rLegFront = TweenMax.fromTo("#leg-right-front-3", .7, {rotate: 7}, {rotate: -7, ease:Linear.easeNone, repeat:-1, yoyo: true});
rLegBack.progress(0.5).pause();
rLegFront.play();

const lLegFront = TweenMax.fromTo("#leg-left-front-3", .7, {rotate: -7}, {rotate: 7, ease:Linear.easeNone, repeat:-1, yoyo: true});
lLegFront.progress(0.5).pause();
lLegFront.play();

const tl = gsap.timeline()
    tl.to("#scene-3", {attr:{viewBox: "475 290 100 50"}, delay: 0, duration: 1})

    tl.to("#lock-turn", {rotate: 90, duration: 3, delay: 0.5, transformOrigin: "50% 50%"})
    tl.to("#lock-light", {fill:"#7FFF00", repeat: 3})

    tl.to("#scene-3", {attr:{viewBox: "0 0 838 596"}, delay: 1, duration: 1})
    
    tl.to("#door3", {display: "none"})
    tl.to("#door-open3", {display: "block"})
    tl.to("#guy-back3", {display: "none"})
    tl.to("#guy-front-static", {display: "none"})
    tl.to("#guy3", {display: "block"})




