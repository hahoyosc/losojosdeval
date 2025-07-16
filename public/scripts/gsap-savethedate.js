import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".save-text",
  { opacity: 0, x: -40 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".save-text",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".save-img",
  { opacity: 0, x: 40 },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".save-img",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);
