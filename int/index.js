
const msg = document.querySelector("#alert-msg")
msg.style.display = "none"

const camFeed = document.querySelector("#cam-feed")
camFeed.style.display = "none"
//  const msg = TweenMax.to("#alert-msg", {display: "none"})

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

const tl = gsap.timeline()
    tl.to("#scene-2", {attr:{viewBox: "483 155 100 50"}, delay: 1, duration: 1})
