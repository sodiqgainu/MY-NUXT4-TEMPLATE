<template>
  <!-- Wrap anything you want -->
  <div ref="magnetEl" class="inline-block will-change-transform">
    <slot />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import gsap from "gsap";

// Props with defaults
const props = defineProps({
  strength: { type: Number, default: 40 },   // magnetic pull intensity
  duration: { type: Number, default: 0.3 },  // animation speed
  ease: { type: String, default: "power2.out" }, // gsap ease
});

const magnetEl = ref(null);

onMounted(() => {
  const el = magnetEl.value;

  el.addEventListener("mousemove", (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(el, {
      x: x / props.strength,
      y: y / props.strength,
      duration: props.duration,
      ease: props.ease,
    });
  });

  el.addEventListener("mouseleave", () => {
    gsap.to(el, {
      x: 0,
      y: 0,
      duration: props.duration,
      ease: props.ease,
    });
  });
});
</script>
