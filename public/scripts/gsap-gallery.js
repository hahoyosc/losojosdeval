import { gsap } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/index.js";
import { ScrollTrigger } from "https://cdn.jsdelivr.net/npm/gsap@3.12.5/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".gallery-img-1",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-img-1",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".gallery-img-2",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-img-2",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".gallery-img-3",
  { opacity: 0, x: 50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-img-3",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".gallery-text",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gallery-text",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);
