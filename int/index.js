//temp
// const tempView = TweenMax.to("#scene-2", {attr:{viewBox: "250 300 110 70"}, duration: 0})

const msg = document.querySelector("#alert-msg")
msg.style.display = "none"

const camFeed = document.querySelector("#cam-feed")
camFeed.style.display = "none"

//Resume 
const resumeName = document.querySelector("#resume-name").style.display = "none"
const loader = document.querySelector("#loader").style.display = "none"
const complete = document.querySelector("#complete").style.display = "none"
const analyzingResume = document.querySelector("#analyzing-resume").style.display = "none"
const success = document.querySelector("#Success").style.display = "none"
const name = document.querySelector("#adam-mathieson").style.display = "none"
const email = document.querySelector("#email").style.display = "none"
const phone = document.querySelector("#phone").style.display = "none"

//Cam feed
const unlocked = document.querySelector("#Unlocked").style.display = "none"
const rectangle = document.querySelector("#Rectangle-354").style.display = "none"


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
tl.fromTo("#scene-2", 1, {opacity: 0}, {opacity: 1})
    tl.to("#scene-2", {attr:{viewBox: "483 155 100 50"}, delay: 2, duration: 2})
    tl.to("#scene-2", {attr:{viewBox: "0 0 838 596"}, delay: 2, duration: 2})
    tl.to("#scene-2", {attr:{viewBox: "260 275 150 100"}, duration: 2, onComplete: stopTyping})

    // Filling out application
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
    tl.to("#msg-box", {stroke: "none"})
    tl.to("#alert-msg", {display: "block", delay: .3})
    tl.fromTo("#alert-msg", {opacity: 0, x: 5}, {opacity: 1, x:0})
    tl.to("#cursor", {x: 5, y: -43, duration: 1})
    tl.to("#msg-box", {stroke: "#4DFF16"})

    // Cam feed
    tl.to("#cam-feed", {display: "block"})
    tl.to("#alert-msg", {display: "none", delay: .05})
    tl.fromTo("#cursor", {x: 5, y: -43}, {x: -2, y: -15, duration: .6})
    tl.to("#locked", {display: "none"})
    tl.to("#Locked", {display: "none"})
    tl.to("#Unlocked", {display: "block"})
    tl.fromTo("#scene-2", 1, {opacity: 1}, {opacity: 0, onComplete: goToScene3})
    




    
