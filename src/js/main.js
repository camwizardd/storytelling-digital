import { gsap } from "gsap";
import VanillaTilt from "vanilla-tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollSmoother);
gsap.registerPlugin(ScrollTrigger);

//loading page
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //---------------------------------------------------------------------------------------------------//
    //LOADING PAGE

    document.querySelector(".loading-page").remove();

    //---------------------------------------------------------------------------------------------------//
    //SCROLL SMOOTH

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // inertie (= plus c’est haut, plus c’est doux)
      smoothTouch: 0.1, // éviter l'effet trop glissant sur mobile
      effects: true,
    });

    //---------------------------------------------------------------------------------------------------//
    //INTRO (HERO)

    var timelineIntro = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        // markers: true,
        start: "top top",
        end: "1000%",
        pin: true,
        scrub: true,
      },
    });

    timelineIntro.to(".hero-cave", {
      scale: 4.5,
      ease: "power2.out",
      duration: 2,
    });
    timelineIntro.to(".hero-cave", {
      display: "none",
      duration: 0,
    });
    timelineIntro.to(".hero-bg", {
      y: "50%",
      duration: 2,
    });
    timelineIntro.to(".hero-bg", {
      y: "50%",
      duration: 1,
    });
    timelineIntro.to(".hero-bg", {
      y: "100%",
      display: "none",
      duration: 1,
    });
    timelineIntro.to(
      ".hero-logo",
      {
        y: "-200%",
        display: "none",
        duration: 1,
      },
      "<"
    );

    //---------------------------------------------------------------------------------------------------//
    //SECOND PART (FAMILY 1 WALKING)

    var timelineSecond = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-scene-container",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        pin: true,
        scrub: true,
      },
    });

    timelineSecond.to(".second-text", {
      opacity: 1,
      duration: 2,
    });
    timelineSecond.to(".second-text", {
      opacity: 1,
      duration: 2,
    });
    timelineSecond.to(".second-text", {
      opacity: 0,
      duration: 1,
    });

    var timelineSecondImg = gsap.timeline({
      scrollTrigger: {
        trigger: ".second-scene-container",
        // markers: true,
        start: "bottom bottom",
        end: "300%",
        pin: true,
        scrub: true,
      },
    });

    timelineSecondImg.to(".second-family", {
      x: "50%",
      duration: 3,
    });

    timelineSecondImg.to(
      ".second-bubble",
      {
        x: "70%",
        duration: 2,
      },
      "<"
    );

    timelineSecondImg.to(".second-scene", {
      opacity: 0,
      delay: 2,
      duration: 1,
    });

    //---------------------------------------------------------------------------------------------------//
    //TRIHRD PART (FAMILY 2 WALKING)

    var timelineThird = gsap.timeline({
      scrollTrigger: {
        trigger: ".third-scene-container",
        // markers: true,
        start: "bottom bottom",
        end: "300%",
        pin: true,
        scrub: true,
      },
    });

    timelineThird.to(".third-parallax-family", {
      x: "-20%",
      duration: 3,
    });

    timelineThird.to(
      ".third-parallax-dad",
      {
        x: "10%",
        duration: 2,
      },
      "<"
    );

    timelineThird.to(".third-scene-container", {
      opacity: 0,
      delay: 2,
      duration: 1,
    });

    timelineThird.to("body", {
      background: "#000000",
      delay: 2,
      duration: 3,
    });

    //---------------------------------------------------------------------------------------------------//
    //FOURTH PART

    var timelineFourth = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourth-scene-container",
        // markers: true,
        start: "top 50%",
        end: "bottom 50%",
        pin: true,
        scrub: true,
      },
    });

    timelineFourth.to(".fourth-text", {
      opacity: 1,
      duration: 5,
    });
    timelineFourth.to(".fourth-text", {
      opacity: 1,
      duration: 2,
    });
    timelineFourth.to(".fourth-text", {
      opacity: 0,
      duration: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".fourth-scene-container",
          // markers: true,
          id: "parallax",
          start: "top bottom",
          end: "200%",
          scrub: true,
        },
      })
      .to(
        ".fourth-parallax1",
        {
          y: "-100",
          duration: 5,
        },
        "<"
      )
      .to(
        ".fourth-parallax2",
        {
          y: "1",
          duration: 5,
        },
        "<"
      )
      .to(
        ".fourth-parallax3",
        {
          y: "-400",
          duration: 5,
        },
        "<"
      )
      .to(
        ".fourth-parallax4",
        {
          y: "-300",
          duration: 5,
        },
        "<"
      );

    // VanillaTilt.init(document.querySelector(".fourth-parallax-item"), {
    //   reverse: true,
    //   max: 10,
    //   speed: 800,
    //   glare: false,
    //   perspective: 1000,
    // });

    //---------------------------------------------------------------------------------------------------//
    //FIFTH PART

    //---------------------------------------------------------------------------------------------------//

    //SIXTH PART (EMOTIONS PARALLAX)
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sixth-parallax-emotions",
          // markers: true,
          id: "parallax",
          start: "top bottom",
          scrub: true,
        },
      })
      .to(
        ".sixth-parallax1",
        {
          y: "-1200",
          duration: 5,
        },
        "<"
      )
      .to(
        ".sixth-parallax2",
        {
          y: "-600",
          duration: 5,
        },
        "<"
      )
      .to(
        ".sixth-parallax3",
        {
          y: "-100",
          duration: 5,
        },
        "<"
      );

    //---------------------------------------------------------------------------------------------------//
    //SEVENTH PART

    var timelineSeventh = gsap.timeline({
      scrollTrigger: {
        trigger: ".seventh-scene-img",
        // markers: true,
        start: "bottom bottom",
        end: "1000%",
        pin: true,
        scrub: true,
      },
    });

    timelineSeventh.to(".seventh-img", {
      opacity: 1,
      duration: 9,
    });
    timelineSeventh.to(".seventh-img", {
      x: "-100vw",
      delay: 9,
      duration: 20,
    });

    timelineSeventh.to("body", {
      background: "#ffffff",
      duration: 10,
    });

    //---------------------------------------------------------------------------------------------------//
    //EIGHTH PART

    const sharpImg = document.querySelector(".eighth-img-sharp");

    document.addEventListener("mousemove", (e) => {
      const rect = sharpImg.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const radius = rect.width * 0.2; // ~8% de la largeur (responsive)

      sharpImg.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 100%)`;

      sharpImg.style.webkitMaskImage = sharpImg.style.maskImage;
    });

    var timelineEighth = gsap.timeline({
      scrollTrigger: {
        trigger: ".eighth-scene-container",
        // markers: true,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    timelineEighth.to(".eighth-scene-container", {
      opacity: 1,
      duration: 6,
    });
    timelineEighth.to(".eighth-scene-container", {
      opacity: 0,
      duration: 2,
    });

    //---------------------------------------------------------------------------------------------------//
    //NINTH PART

    var timelineNinth = gsap.timeline({
      scrollTrigger: {
        trigger: ".ninth-scene-img",
        // markers: true,
        start: "top top",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    timelineNinth.to(".ninth-castle", {
      x: 85,
      duration: 5,
    });
    timelineNinth.to(
      ".ninth-girl",
      {
        x: -55,
        duration: 5,
      },
      "<"
    );
    timelineNinth.to(".ninth-scene-container", {
      opacity: 0,
      delay: 2,
      duration: 1,
    });
  });
});

//---------------------------------------------------------------------------------------------------//
// //TILT COVER

// const tiltElements = document.querySelectorAll(".image");

// VanillaTilt.init(tiltElements, {
//   reverse: true,
//   max: 10,
//   speed: 800,
//   perspective: 1000,
//   glare: false,
// });
