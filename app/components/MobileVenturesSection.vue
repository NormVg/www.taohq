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
</script>

<template>
  <section id="products" class="mobile-ventures-section" aria-labelledby="products-title">
    <div class="ventures-list">
      <article v-for="(venture, index) in ventures" :key="venture.title" class="venture-card">
        <div class="venture-media">
          <img :src="venture.image" :alt="venture.title" class="venture-image" />
        </div>
        
        <div class="venture-content">
          <div class="venture-header">
            <span class="venture-index">{{ index }}.</span>
            <h3 class="venture-title">{{ venture.title }}</h3>
          </div>
          
          <p class="venture-body">{{ venture.body }}</p>
          
          <div class="venture-links">
            <a :href="venture.linkHref">Link</a>
            <a :href="venture.productHref">Product</a>
          </div>
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
