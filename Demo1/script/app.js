const logo = document.querySelector(".center-area h1");
const text = document.querySelector(".center-area p");
//console.log(logo);

const tl = gsap.timeline();
tl
    .from(logo, {y: -100, opacity: 0, duration: 2})
    .from(text, {y:-50, opacity: 0, duration: 2, ease: Elastic.easeOut.config(1, 0.2)}, "-=1");