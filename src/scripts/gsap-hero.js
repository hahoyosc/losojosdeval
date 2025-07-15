import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".hero-header",
  { opacity: 0, y: -50 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-header",
      start: "top 100%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".hero-img",
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-img",
      start: "top 80%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".hero-text",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    delay: 0.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".hero-text",
      start: "top 100%",
      toggleActions: "play reverse play reverse",
    },
  }
);
