import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".carousel-img").forEach((img, i) => {
  gsap.fromTo(
    img,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: img,
        start: "top 90%",
        toggleActions: "play reverse play reverse",
      },
    }
  );
});

gsap.fromTo(
  ".carousel-text",
  { opacity: 0, y: 30 },
  {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".carousel-text",
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  }
);

gsap.to(".carousel-track", {
  x: "-50%",
  duration: 30,
  ease: "linear",
  repeat: -1,
});
