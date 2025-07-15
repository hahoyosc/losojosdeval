import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".gifts-title",
  { opacity: 0, y: -50 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".gifts-title",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".anim-img-1",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".anim-img-1",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".anim-img-2",
  { opacity: 0, x: 50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".anim-img-2",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".anim-img-3",
  { opacity: 0, x: -50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".anim-img-3",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".anim-img-4",
  { opacity: 0, x: 50 },
  {
    opacity: 1,
    x: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".anim-img-4",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);
