import { gsap } from "gsap";
// import VanillaTilt from "vanilla-tilt";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//loading page
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    //LOADING PAGE

    document.querySelector(".loading-page").remove();

    //INTRO

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

    // var timelineThirdImg = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".third-scene-container",
    //     markers: true,
    //     start: "top top",
    //     end: "50% bottom",
    //     pin: true,
    //     scrub: true,
    //   },
    // });

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

    timelineSeventh.to("img", {
      opacity: 1,
      duration: 9,
    });
    timelineSeventh.to("img", {
      x: "-1300px",
      delay: 9,
      duration: 20,
    });

    timelineSeventh.to("body", {
      background: "#ffffff",
      duration: 15,
    });
  });
});

// timelineSecond.to(".hero-cave", {
//   scale: 4.5,
//   ease: "power2.out",
//   duration: 2,
// });
// timelineSecond.to(".hero-cave", {
//   display: "none",
//   duration: 0,
// });
// timelineSecond.to(".hero-bg", {
//   y: "50%",
//   duration: 2,
// });
// timelineSecond.to(".hero-bg", {
//   y: "50%",
//   duration: 1,
// });
// timelineSecond.to(".hero-bg", {
//   y: "100%",
//   display: "none",
//   duration: 1,
// });
// timelineSecond.to(
//   ".hero-logo",
//   {
//     y: "-150%",
//     display: "none",
//     duration: 1,
//   },
//   "<"
// );

// timelineIntro.to(".cover", {
//   opacity: 1,
//   duration: 1,
// });

// //TILT COVER
// const tiltElements = document.querySelectorAll(".image");

// VanillaTilt.init(tiltElements, {
//   reverse: true,
//   max: 10,
//   speed: 800,
//   perspective: 1000,
//   glare: false,
// });
