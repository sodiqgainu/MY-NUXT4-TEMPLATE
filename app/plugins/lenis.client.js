
import { defineNuxtPlugin } from '#app'
import Lenis from 'lenis'                      // <-- Official lenis import
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    smooth: true,
    duration: 1.2,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  })

  // Keep ScrollTrigger in sync
  lenis.on('scroll', ScrollTrigger.update)

  // Use GSAP's ticker to drive Lenis
  gsap.ticker.add(time => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return {
    provide: {
      lenis,
    },
  }
})
