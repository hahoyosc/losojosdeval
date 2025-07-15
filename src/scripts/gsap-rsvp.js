import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".rsvp-img",
  { opacity: 0, y: -40 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".rsvp-img",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.fromTo(
  ".rsvp-form",
  { opacity: 0, y: 40 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".rsvp-form",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);
