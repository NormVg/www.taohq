<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'
import { blogs } from '~/data/blogs'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useInView(sectionRef, { once: true, amount: 0.15 })

const containerAnimate = computed(() => isVisible.value
  ? { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, y: 24, filter: 'blur(8px)' }
)

const itemAnimate = (i: number) => computed(() => isVisible.value
  ? { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, y: 16 }
)
</script>

<template>
  <section ref="sectionRef" class="blog-preview-section">
    <div class="blog-preview-container">
      <motion.div
        class="blog-preview-header"
        :initial="{ opacity: 0, y: 24, filter: 'blur(8px)' }"
        :animate="containerAnimate.value"
      >
        <h2 class="blog-preview-title">Journal</h2>
        <NuxtLink to="/blog" class="blog-preview-link">View all writing</NuxtLink>
      </motion.div>

      <div class="blog-preview-grid">
        <motion.div
          v-for="(blog, index) in blogs"
          :key="blog.slug"
          class="blog-card"
          :initial="{ opacity: 0, y: 16 }"
          :animate="itemAnimate(index).value"
          :whileHover="{ y: -4, transition: { duration: 0.4 } }"
        >
          <NuxtLink :to="`/blog/${blog.slug}`" class="blog-card-link">
            <div class="blog-card-image-wrap">
              <img :src="blog.bannerImage" :alt="blog.title" class="blog-card-image" />
            </div>
            <div class="blog-card-content">
              <div class="blog-card-meta">
                <span>{{ new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</span>
                <span class="dot">·</span>
                <span>{{ blog.readTime }}</span>
              </div>
              <h3 class="blog-card-title">{{ blog.title }}</h3>
              <p class="blog-card-excerpt">{{ blog.excerpt }}</p>
            </div>
          </NuxtLink>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog-preview-section {
  padding: clamp(60px, 10vh, 120px) var(--page-gutter);
  background: var(--paper);
  color: var(--ink);
}

.blog-preview-container {
  max-width: 1728px;
  margin: 0 auto;
}

.blog-preview-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: clamp(40px, 6vh, 64px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 24px;
}

.blog-preview-title {
  font-size: clamp(32px, 4vw, 56px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
}

.blog-preview-link {
  font-size: clamp(14px, 1.2vw, 18px);
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.blog-preview-link:hover {
  color: var(--ink);
}

.blog-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: clamp(24px, 4vw, 48px);
}

.blog-card {
  position: relative;
  display: flex;
  flex-direction: column;
}

.blog-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.blog-card-image-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f4f4f5;
  margin-bottom: 24px;
}

.blog-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.blog-card:hover .blog-card-image {
  transform: scale(1.05);
}

.blog-card-content {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--muted);
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.blog-card-title {
  font-size: clamp(20px, 1.5vw, 24px);
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.blog-card-excerpt {
  font-size: clamp(15px, 1.1vw, 17px);
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
}
</style>
