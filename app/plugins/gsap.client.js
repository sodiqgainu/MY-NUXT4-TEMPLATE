import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// register GSAP plugins once
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default defineNuxtPlugin((nuxtApp) => {
  // make available as global properties
  nuxtApp.vueApp.config.globalProperties.$gsap = gsap
  nuxtApp.vueApp.config.globalProperties.$ScrollTrigger = ScrollTrigger

  // optional – make available globally via window (no imports needed anywhere)
  if (process.client) {
    window.gsap = gsap
    window.ScrollTrigger = ScrollTrigger
  }
})
