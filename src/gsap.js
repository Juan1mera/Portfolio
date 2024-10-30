gsap.from("#presentation", {
    duration: 3,
    opacity: 0,
    ease: "power3.out"
});

gsap.from("#nav", {
    duration: 2,
    yPercent: -100,
    opacity: 0,
    ease: "power3.out"
});
gsap.from("#content", {
    duration: 2,
    xPercent: -100,
    opacity: 0,
    ease: "power3.out"
});
