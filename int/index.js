import { infoCard } from "../info-card/index.js"

const item = {
    title: "Wyze Cam Pan",
    fact1: "360° coverage in under 3 seconds",
    fact2: "1080p Full HD",
    price: "$29.99"
}
infoCard(item)

const rArm = TweenMax.fromTo("#arm-int-right", .18, {rotate: 0, x:-2}, {rotate: -3, x:3, ease:Linear.easeNone, repeat:-1, yoyo: true, transformOrigin: "100% 0%"});
rArm.progress(0.5).pause();
rArm.play();

const lArm = TweenMax.fromTo("#arm-int-left", .2, {rotate: 0}, {rotate: 3, ease:Linear.easeNone, repeat:-1, yoyo: true, transformOrigin: "100% 0%"});
lArm.progress(0.5).pause();
lArm.play();

const stopTyping = () => {
    rArm.pause()
    lArm.pause()
}

const goToScene3 = () => {
    window.location.pathname = '/scene3.html'
}

const tl = gsap.timeline()
tl.set("#chair-front", {display: "block"})
    tl.to("#scene-2", 1, {opacity: 1})

     // zoom in on product
    if (window.innerWidth < 501) {
        // console.log("<501")
        tl.to("#scene-2", 1, {attr:{viewBox: "510 140 50 50"}})
            .set("#card", {x: 0, y: 0, width: window.innerWidth})
        
    } else if (window.innerWidth < 1000) {
        tl.to("#scene-2", 1, {attr:{viewBox: "483 155 100 50"}})
            .set("#card", {x: "10%", y: "10%"})

    } else {
        // console.log('>1200')
        tl.to("#scene-2", 1, {attr:{viewBox: "483 155 100 50"}})
            .set("#card", {x: "40%", y: "40%"})
    }    

    tl.to("#card", {display: "block"})
    tl.to("#card", .3, {opacity: 0, delay: 4})

    tl.to("#scene-2", {attr:{viewBox: "200 200 400 300"}, duration: 2})
    if (window.innerWidth <501) {
        // console.log("<501")
        tl.to("#scene-2", {attr:{viewBox: "260 300 100 40"}, duration: 2, onComplete: stopTyping})
    } else {
        tl.to("#scene-2", {attr:{viewBox: "260 275 150 100"}, duration: 2, onComplete: stopTyping})
    }

    // // Filling out application
    tl.to("#cursor", {x:-50, y:-13, duration: 1.5})
    tl.to("#loader", {display: "block"})
    tl.to("#analyzing-resume", {display: "block"})
    tl.to("#loader", {rotate: 360, transformOrigin: "50% 50%", repeat: -1, duration: 1, ease: Linear.easeNone}, "-=1")
    tl.to("#loader", {display: "none"})
    tl.to("#complete", {display: "block", scale: 2, transformOrigin: "50% 50%"})
    tl.to("#analyzing-resume", {display: "none"})
    tl.to("#Success", {display: "block"})
    tl.to("#attach-resume", {display: "none"})
    tl.to("#resume-name", {display: "block"})
    tl.to("#adam-mathieson", {display: "block"})
    tl.to("#email", {display: "block"}, "-=0.5")
    tl.to("#phone", {display: "block"}, "-=0.5")
    
    // Alert msg
    tl.to("#guy-back, #wyze-logo", {display: "block"})
    tl.to("#msg-box", {stroke: "none"})
    tl.to("#alert-msg", {display: "block", delay: .3})
    tl.fromTo("#alert-msg", {opacity: 0, x: 5}, {opacity: 1, x:0})
    tl.to("#cursor", {x: 5, y: -43, duration: 1, delay: 1})
    tl.to("#msg-box", {stroke: "#4DFF16"})

    // Cam feed
    tl.to("#cam-feed", {display: "block"})
    tl.to("#alert-msg", {opacity: 0, x: 5, delay: .05})
    tl.fromTo("#cursor", {x: 5, y: -43}, {x: -2, y: -15, duration: .6, delay: 1})
    tl.to("#locked", {display: "none"})
    tl.to("#Locked", {display: "none"})
    tl.to("#Unlocked", {display: "block"})
    tl.to("#scene-2", .5, {opacity: 0, onComplete: goToScene3})
    




    
