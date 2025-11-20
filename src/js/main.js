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

    const purchaseButton = document.querySelector(".header-button");

    purchaseButton.addEventListener("click", () =>
      smoother.scrollTo("#purchase-section", true, "top")
    );

    //---------------------------------------------------------------------------------------------------//
    //CURSEUR

    var cursor = document.querySelector(".cursor");

    var onMouseMove = function () {
      cursor.style.top = event.y + "px";
      cursor.style.left = event.x + "px";
    };

    document.addEventListener("mousemove", onMouseMove);

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
        // onComplete: () => {
        //   ScrollTrigger.refresh();
        // },
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
      ease: "power2.out",
      duration: 3,
    });

    timelineSecondImg.to(
      ".second-bubble",
      {
        x: "100%",
        duration: 2,
      },
      "<"
    );

    timelineSecondImg.to(".second-scene", {
      opacity: 0,
      delay: 1,
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
      delay: 1,
      duration: 1,
    });

    timelineThird.to("body", {
      background: "#000000",
      delay: 2,
      duration: 3,
      // onComplete: () => {
      //   ScrollTrigger.refresh();
      // },
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
      duration: 1,
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

    //---------------------------------------------------------------------------------------------------//
    //FIFTH PART

    var timelineFifth = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-scene-container",
        // markers: true,
        start: "top top",
        end: "400%",
        pin: true,
        scrub: true,
      },
    });

    timelineFifth.to(".fifth-text", {
      opacity: 1,
      duration: 4,
    });
    timelineFifth.to(".fifth-text", {
      opacity: 0,
      duration: 4,
    });

    timelineFifth.to(".fifth-bubble-weird", {
      opacity: 1,
      delay: 4,
      duration: 4,
    });
    timelineFifth.to(".fifth-bubble-weird", {
      opacity: 0,
      duration: 2,
    });
    timelineFifth.to(".fifth-bubble-daughter", {
      opacity: 1,
      delay: 4,
      duration: 4,
    });
    timelineFifth.to(".fifth-bubble-daughter", {
      opacity: 0,
      duration: 4,
    });
    timelineFifth.to(".fifth-bubble-leave", {
      opacity: 1,
      delay: 4,
      duration: 4,
    });
    timelineFifth.to(".fifth-bubble-leave", {
      opacity: 0,
      duration: 4,
    });
    /*
    var timelineFifthBubbleD = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-bubble-daughter",
        markers: true,
        id: "daughter",
        start: "top top",
        end: "200%",
        pin: true,
        scrub: true,
      },
    });


    var timelineFifthBubbleL = gsap.timeline({
      scrollTrigger: {
        trigger: ".fifth-bubble-leave",
        markers: true,
        id: "leave",
        start: "top top",
        end: "200%",
        pin: true,
        scrub: true,
      },
    });

    */

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
        end: "400%",
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
      ease: "power2.out",
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

      const radius = rect.width * 0.2;

      sharpImg.style.maskImage = `radial-gradient(circle ${radius}px at ${x}px ${y}px, white 0%, transparent 100%)`;

      sharpImg.style.webkitMaskImage = sharpImg.style.maskImage;
    });

    var timelineEighth = gsap.timeline({
      scrollTrigger: {
        trigger: ".eighth-scene-container",
        // markers: true,
        start: "top top",
        end: "400%",
        pin: true,
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

    //---------------------------------------------------------------------------------------------------//
    // PURCHASE PART

    var timelinePurchase = gsap.timeline({
      scrollTrigger: {
        trigger: ".purchase-wrapper",
        // markers: true,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        scrub: true,
      },
    });

    timelinePurchase.to(".purchase-cta", {
      y: 1,
      ease: "power2.out",
      duration: 2,
    });

    const tiltElements = document.querySelectorAll(".purchase-album");

    VanillaTilt.init(tiltElements, {
      reverse: true,
      max: 10,
      speed: 800,
      perspective: 1000,
      glare: true,
    });
  });
});
