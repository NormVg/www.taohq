<script setup lang="ts">
import { motion } from 'motion-v'

const introWords = "TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.".split(" ")
</script>

<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title">
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 1.8, duration: 1.2 }">
        Building </motion.span>
      <motion.span :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.0, duration: 1.2, ease: [0.22, 1, 0.36, 1] }" class="highlight">thoughtful</motion.span>
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 1.8, duration: 1.2 }">
        <br>software, systems, and<br></motion.span>
      <motion.span :initial="{ opacity: 0, y: 14 }" :animate="{ opacity: 1, y: 0 }"
        :transition="{ delay: 1.4, duration: 1.2, ease: [0.22, 1, 0.36, 1] }" class="highlight">lifestyle</motion.span>
      <motion.span :initial="{ opacity: 0 }" :animate="{ opacity: 1 }" :transition="{ delay: 1.8, duration: 1.2 }">
        products.</motion.span>
    </h1>

    <div class="hero-actions" aria-label="Hero actions">
      <a class="hero-link hero-link-primary" href="#ventures">Explore ventures</a>
      <a class="hero-link" href="#about">View organization</a>
    </div>

    <motion.div class="hero-media" aria-label="Group working around computers"
      :initial="{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }"
      :animate="{ opacity: 1, scale: 1, filter: 'blur(0px)' }"
      :transition="{ delay: 0.2, duration: 1.8, ease: [0.22, 1, 0.36, 1] }">
      <img class="hero-image" src="/figma/hero-mask-image.png" alt="Black and white group working around computers">
    </motion.div>

    <p class="intro-copy" aria-label="TheAlphaOnes is an independent umbrella organisation behind developer tools, software products, and experimental systems.">
      <motion.span 
        v-for="(word, i) in introWords" 
        :key="i"
        style="display: inline-block; margin-right: 0.28em;"
        :initial="{ opacity: 0, y: 12, filter: 'blur(4px)' }" 
        :whileInView="{ opacity: 1, y: 0, filter: 'blur(0px)' }"
        :viewport="{ once: true, amount: 0.9 }" 
        :transition="{ duration: 0.8, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }"
      >
        {{ word }}
      </motion.span>
    </p>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: clamp(47px, 4.42vw, 76px);
}

.hero-section h1 {
  font-size: clamp(47px, 7.12vw, 123px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.034;
  margin: 0;
}

.highlight {
  display: inline-block;
  text-decoration: underline;
  text-decoration-thickness: clamp(1px, 0.2vw, 3px);
  text-underline-offset: clamp(4px, 0.6vw, 8px);
}

.hero-actions {
  display: flex;
  gap: clamp(18px, 1.64vw, 28px);
  margin-top: clamp(29px, 2.76vw, 48px);
  padding: 0 var(--page-gutter);
}

.hero-link {
  align-items: center;
  border-bottom: 1px solid currentColor;
  color: var(--muted);
  display: inline-flex;
  font-size: clamp(14px, 1.04vw, 18px);
  line-height: 1.2;
  min-height: 34px;
  text-decoration: none;
  transition: color 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.hero-link-primary {
  color: var(--ink);
}

.hero-link:hover,
.hero-link:focus-visible {
  color: var(--ink);
  transform: translateY(-2px);
}

.hero-link:active {
  opacity: 0.68;
  transform: translateY(0);
}

.hero-media {
  aspect-ratio: 1733 / 735;
  border-radius: 5px;
  display: block;
  margin-top: clamp(47px, 4.42vw, 76px);
  overflow: hidden;
}

.hero-image {
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.intro-copy {
  font-size: clamp(18px, 2.05vw, 36px);
  line-height: 1.15;
  margin: clamp(42px, 3.85vw, 66px) var(--page-gutter) 0;
  max-width: 700px;
}

@media (max-width: 780px) {
  .hero-section h1 {
    font-size: clamp(42px, 12vw, 76px);
  }
}

@media (max-width: 520px) {
  .hero-section {
    padding-top: 47px;
  }

  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
