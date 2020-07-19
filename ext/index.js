
const tlWalk = gsap.timeline({repeat: -1, yoyo: true})

tlWalk.set("#guy-back", {transformOrigin: "50%, 0%"})

tlWalk.fromTo("#leg-right", {rotate: 10}, {rotate: -10, ease: "none"})
tlWalk.fromTo("#leg-left", {rotate: 10}, {rotate: -10, ease: "none", alternate: "reverse"})

// tlWalk.pause()

const tlBg = gsap.timeline()
tlBg.to("#scene-container", {translateX: "-1040", duration: 7, ease: 'none'})
