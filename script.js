

function loco(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()




const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-custom");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});


// ============= GSAP ANIMATION ==================

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  gsap.from(".hero-img", {
    scale : 1.2,
    opacity: 0.4,
    duration : 2,
  })
  gsap.from('.section-cta', {
    scrollTrigger: {
      trigger : '.section-cta',
      scroller : `.scroll`,
    },
    opacity: 0,
  })
  gsap.from('.up', {
    scrollTrigger: {
      trigger : '.up',
      scroller : `.scroll`,
    },
    opacity: 0,
    y: 100,
    duration: 1.5,
  })
  gsap.from('.portfolio-card', {
    scrollTrigger: {
      trigger : '.portfolio-card',
      scroller : `.scroll`,
    },
    opacity: 0,
    y: 150,
    duration: 1,
    stagger: 0.2,
  })
  gsap.from('.contact-form, .contact-info', {
    opacity: 0,
    scale: 1.05,
    y: 50,
    duration: 1.3,
  })
  gsap.from('.plan-card, .about-skill-card', {
    scrollTrigger: {
      trigger : '.plan-card, .about-skill-card',
      scroller : `.scroll`,
    },
    opacity: 0,
    scale: 1.1,
    duration: 1.5,
  })

});

gsap.from(".whatsapp", {
  x: 200,
  delay: 3,
  ease: 'bounce',
  duration: 2,
})
  


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
  spaceBetween: 20,
  sliderPerGroup: 3,
  // loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:3000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    }
  },
});




 

