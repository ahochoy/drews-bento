import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const vh = (coef) => window.innerHeight * (coef/100)

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  smooth: true,
  lerp: 0
});

lenis.on('scroll', () => { ScrollTrigger.update })

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function() {
    gsap.to('.ah-logomark', {
      width: "20vmin",
      left: "5vmin",
      top: "5vmin",
      scrollTrigger: {
        scrub: true,
      }
    })
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.ah-main',
        scrub: 1,
        start: 'top top',
        end: "500%",
        pin: true,
        invalidateOnRefresh: true,
      }
    })
    tl.to('.ah-resume', {
      opacity: 0,
      scale: .9
    }).to('.ah-bento', {
      transform: 'translateX(-252vh)'
    },"<")
  }
})


