<script setup lang="ts">
import { motion } from 'motion-v'

const emit = defineEmits(['complete'])

const overlayTransition = {
  duration: 1.0, 
  ease: [0.76, 0, 0.24, 1], 
  delay: 1.4
}

const textTransition = {
  duration: 2.0, 
  times: [0, 0.4, 0.7, 1], 
  ease: 'easeInOut'
}
</script>

<template>
  <motion.div
    class="splash-screen"
    :initial="{ y: '0%' }"
    :animate="{ y: '-100%' }"
    :transition="overlayTransition"
    @animationcomplete="emit('complete')"
  >
    <motion.div
      class="splash-text"
      :initial="{ opacity: 0, filter: 'blur(12px)', scale: 0.95 }"
      :animate="{ opacity: [0, 1, 1, 0], filter: ['blur(12px)', 'blur(0px)', 'blur(0px)', 'blur(6px)'], scale: [0.95, 1, 1, 1] }"
      :transition="textTransition"
    >
      TheAlphaOnes
    </motion.div>
  </motion.div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--ink, #000);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  will-change: transform;
}

.splash-text {
  color: var(--paper, #fff);
  font-family: 'Italianno', cursive;
  font-size: clamp(64px, 12vw, 120px);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  will-change: filter, transform, opacity;
}
</style>
