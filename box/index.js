import { infoCard } from "../info-card/index.js"

const item = {
    title: "Wyze Cam Outdoor",
    fact1: "Wireless livestream & recording",
    fact2: "6 month battery life",
    price: "$49.99"
}
infoCard(item)

const top = document.querySelector("#box-open").style.display = "none"
const cam = document.querySelector("#wyze-outdoor-cam").style.display = "none"
const base = document.querySelector("#base").style.display = "none"
const logo = document.querySelector("#wyze-logo").style.display = "none"

const replay = () => {
    window.location.pathname = '/index.html'
}

const btn = document.querySelector("#replay")
btn.addEventListener("click", replay)


const tl = gsap.timeline()
    tl.fromTo("#guy4, #chair-front", 2, {x: 1000}, {x: 0, ease: Linear.easeNone})
    tl.to("#chair-front", 2, {x: -1000, ease: Linear.easeNone})
    tl.to("#guy4", .15, {y:-20, }, "-=2")
    tl.to("#leg-left-3", .2, {rotate: 70, transformOrigin: "15% 10%"}, "-=2")
    tl.to("#leg-right-4", .2, {rotate: 70, transformOrigin: "15% 10%"}, "-=2")
    tl.to("#guy4", 0, {scaleX: -1, transformOrigin: "20% 50%"}, "-=2")
    tl.to("#arm-int-left", .2, {rotate: -20}, "-=2")
    tl.to("#arm-int-right", .2, {rotate: -50}, "-=2")
    tl.to("#wyze-outdoor-cam", {display: "block"}, "-=2")
    tl.to("#base", {display: "block"}, "-=2")
    tl.to("#box-open", {display: "block"},"-=2")

    tl.to("#scene-5", {attr:{viewBox: "100 230 200 120"}, duration: 1}, "-=1")
    tl.to("#card", {display: "block"})
    tl.fromTo("#card", .3, {x: 20, y: 180, opacity: 0}, {x: 150, opacity: 1})
    tl.to("#card", .3, {opacity: 0, delay: 4})
    tl.to("#scene-5", {attr:{viewBox: "0 0 838 596"}, duration: 1})

    tl.to("#guy4", .2, {y: -100, rotate: 10})
    tl.to("#leg-left-3", .2, {rotate: 30}, "-=.1")
    tl.to("#leg-right-4", .2, {rotate: 140, transformOrigin: "10% 50%"}, "-=.3")
    tl.to("#arm-int-left", .2, {rotate: -50}, "-=.2")
    tl.to("#arm-int-right", .2, {rotate: -120}, "-=.2")

    tl.to("#wyze-logo", {display: "block"})

    tl.to("#replay", .2, {display: "block", x: -5, y:5, delay: .8})


    