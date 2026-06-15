<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const introWords = "TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.".split(" ")

const introRef = ref<HTMLElement | null>(null)
const isIntroVisible = useInView(introRef, { once: false, amount: 0.3, margin: "-10% 0px 0px 0px" })

const wordAnimate = (i: number) => computed(() =>
  isIntroVisible.value
    ? { opacity: 1, y: 0, filter: 'blur(0px)' }
    : { opacity: 0, y: -10, filter: 'blur(4px)' }
)

const wordTransition = (i: number) => computed(() =>
  isIntroVisible.value
    ? { duration: 0.6, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
</script>

<template>
  <section id="top" class="mobile-hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title">
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.6, duration: 1 }">
        Building </motion.span>
      <motion.span :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }" class="highlight">thoughtful</motion.span>
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.6, duration: 1 }">
        <br>software, systems, and<br></motion.span>
      <motion.span :initial="{ opacity: 0, y: 10 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }" class="highlight">lifestyle</motion.span>
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 0.6, duration: 1 }">
        products.</motion.span>
    </h1>

    <div class="hero-actions">
      <a class="hero-link hero-link-primary" href="#products">Explore products</a>
      <a class="hero-link" href="#about">View organization</a>
    </div>

    <motion.div class="hero-media"
      :initial="{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }"
      :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
      :transition="{ delay: 0.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }">
      <img class="hero-image" src="/figma/hero-mask-image.png" alt="Black and white group working around computers">
    </motion.div>

    <p ref="introRef" class="intro-copy">
      <motion.span
        v-for="(word, i) in introWords"
        :key="i"
        style="display: inline-block; margin-right: 0.25em;"
        :initial="{ opacity: 0, y: 10, filter: 'blur(4px)' }"
        :animate="wordAnimate(i).value"
        :transition="wordTransition(i).value"
      >
        {{ word }}
      </motion.span>
    </p>
  </section>
</template>

<style scoped>
.mobile-hero-section {
  padding-top: 40px;
}

.mobile-hero-section h1 {
  font-size: clamp(32px, 8.5vw, 42px);
  font-weight: 400;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
  padding: 0 var(--page-gutter);
}

.highlight {
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 6px;
}

.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  padding: 0 var(--page-gutter);
}

.hero-link {
  align-items: center;
  border-bottom: 1px solid currentColor;
  color: var(--muted);
  display: inline-flex;
  font-size: 16px;
  line-height: 1.2;
  min-height: 40px;
  text-decoration: none;
  align-self: flex-start;
}

.hero-link-primary {
  color: var(--ink);
}

.hero-media {
  aspect-ratio: 4 / 3;
  border-radius: 4px;
  display: block;
  margin: 40px var(--page-gutter) 0;
  overflow: hidden;
}

.hero-image {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.intro-copy {
  font-size: clamp(18px, 5.5vw, 24px);
  line-height: 1.4;
  margin: 40px var(--page-gutter) 0;
}
</style>
