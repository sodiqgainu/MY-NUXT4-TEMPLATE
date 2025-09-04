import MouseFollower from "mouse-follower"
import gsap from "gsap"
import "mouse-follower/src/scss/index.scss"

export default defineNuxtPlugin(() => {
  MouseFollower.registerGSAP(gsap)

  const cursor = new MouseFollower({
    speed: 0.4,
    skewing: 10,
  })

  return {
    provide: {
      cursor, // makes it available as $cursor in your app
    },
  }
})
