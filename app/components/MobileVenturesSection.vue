<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const ventures = [
  {
    title: 'Common Design',
    body: 'Shared design infrastructure for consistent product language, calmer defaults, and repeatable interaction patterns across products.',
    image: '/figma/stone-product.png',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'Sober.Spend',
    body: 'A quieter financial tool that helps people read spending clearly and make deliberate choices without unnecessary interface pressure.',
    image: '/figma/hero-mask-image.png',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'Fold.tao',
    body: 'A structured notes and workflow system designed around low-friction capture, review, and operational clarity over time.',
    image: '/figma/stone-product.png',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'TheAlphaOnes',
    body: 'The umbrella operating layer behind tools, products, and experiments that need shared infrastructure without losing craft.',
    image: '/figma/hero-mask-image.png',
    linkHref: '#contact',
    productHref: '#top',
  },
]

const cardRef0 = ref<HTMLElement | null>(null)
const cardRef1 = ref<HTMLElement | null>(null)
const cardRef2 = ref<HTMLElement | null>(null)
const cardRef3 = ref<HTMLElement | null>(null)

const isVisible0 = useInView(cardRef0, { once: false, amount: 0.1, margin: "-15% 0px -15% 0px" })
const isVisible1 = useInView(cardRef1, { once: false, amount: 0.1, margin: "-15% 0px -15% 0px" })
const isVisible2 = useInView(cardRef2, { once: false, amount: 0.1, margin: "-15% 0px -15% 0px" })
const isVisible3 = useInView(cardRef3, { once: false, amount: 0.1, margin: "-15% 0px -15% 0px" })

const cardRefs = [cardRef0, cardRef1, cardRef2, cardRef3]
const isVisibleArr = [isVisible0, isVisible1, isVisible2, isVisible3]

const mediaAnimate = (i: number) => computed(() => isVisibleArr[i].value ? { opacity: 1, scale: 1, filter: 'blur(0px)' } : { opacity: 0, scale: 0.95, filter: 'blur(4px)' })
const headerAnimate = (i: number) => computed(() => isVisibleArr[i].value ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 })
const bodyAnimate = (i: number) => computed(() => isVisibleArr[i].value ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(4px)' })
const linksAnimate = (i: number) => computed(() => isVisibleArr[i].value ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 })

const mediaTransition = (i: number) => computed(() => isVisibleArr[i].value ? { duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] } : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] })
const headerTransition = (i: number) => computed(() => isVisibleArr[i].value ? { duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] } : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] })
const bodyTransition = (i: number) => computed(() => isVisibleArr[i].value ? { duration: 1.0, delay: 0.3, ease: [0.22, 1, 0.36, 1] } : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] })
const linksTransition = (i: number) => computed(() => isVisibleArr[i].value ? { duration: 1.0, delay: 0.4, ease: [0.22, 1, 0.36, 1] } : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] })
</script>

<template>
  <section id="products" class="mobile-ventures-section" aria-labelledby="products-title">
    <div class="ventures-list">
      <article v-for="(venture, index) in ventures" :key="venture.title" class="venture-card" :ref="cardRefs[index]">
        <motion.div class="venture-media"
          :initial="{ opacity: 0, scale: 0.95, filter: 'blur(4px)' }"
          :animate="mediaAnimate(index).value"
          :transition="mediaTransition(index).value">
          <img :src="venture.image" :alt="venture.title" class="venture-image" />
        </motion.div>
        
        <div class="venture-content">
          <motion.div class="venture-header"
            :initial="{ opacity: 0, y: 14 }"
            :animate="headerAnimate(index).value"
            :transition="headerTransition(index).value">
            <span class="venture-index">{{ index }}.</span>
            <h3 class="venture-title">{{ venture.title }}</h3>
          </motion.div>
          
          <motion.p class="venture-body"
            :initial="{ opacity: 0, filter: 'blur(4px)' }"
            :animate="bodyAnimate(index).value"
            :transition="bodyTransition(index).value">
            {{ venture.body }}
          </motion.p>
          
          <motion.div class="venture-links"
            :initial="{ opacity: 0, y: 10 }"
            :animate="linksAnimate(index).value"
            :transition="linksTransition(index).value">
            <a :href="venture.linkHref">Link</a>
            <a :href="venture.productHref">Product</a>
          </motion.div>
        </div>
      </article>
    </div>
    <p class="ventures-credit">made with ♥ by taohq</p>
  </section>
</template>

<style scoped>
.mobile-ventures-section {
  padding: 64px var(--page-gutter);
}

.ventures-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.venture-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.venture-media {
  aspect-ratio: 4 / 3;
  background: #d9d9d9;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

.venture-image {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.venture-content {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.venture-header {
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.venture-index,
.venture-title {
  font-size: clamp(20px, 5.5vw, 24px);
  font-weight: 700;
  line-height: 1.2;
  margin: 0;
}

.venture-index {
  color: var(--muted);
}

.venture-body {
  font-size: clamp(15px, 4.2vw, 18px);
  line-height: 1.4;
  margin: 0;
  color: var(--ink);
}

.venture-links {
  display: flex;
  gap: 24px;
  margin-top: 8px;
}

.venture-links a {
  color: inherit;
  font-size: 14px;
  line-height: 1.2;
  position: relative;
  text-decoration: none;
  font-weight: 500;
}

.venture-links a::after {
  background: currentColor;
  bottom: -4px;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  width: 100%;
}

.ventures-credit {
  color: var(--muted);
  font-size: 13px;
  margin-top: 48px;
  text-align: center;
}
</style>
