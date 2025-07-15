import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".karaoke-text",
  { opacity: 0, x: -40 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".karaoke-text",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".karaoke-img",
  { opacity: 0, x: 40 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".karaoke-img",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);
