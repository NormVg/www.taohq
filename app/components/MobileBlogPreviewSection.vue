<script setup lang="ts">
import { computed, ref } from 'vue'
import { motion, useInView } from 'motion-v'
import { blogs } from '~/data/blogs'

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useInView(sectionRef, { once: true, amount: 0.1 })

const containerAnimate = computed(() => isVisible.value
  ? { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, y: 16 }
)

const itemAnimate = (i: number) => computed(() => isVisible.value
  ? { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, y: 12 }
)
</script>

<template>
  <section ref="sectionRef" class="mobile-blog-section">
    <div class="mobile-blog-container">
      <motion.div
        class="mobile-blog-header"
        :initial="{ opacity: 0, y: 16 }"
        :animate="containerAnimate.value"
      >
        <h2 class="mobile-blog-title">Journal</h2>
        <NuxtLink to="/blog" class="mobile-blog-link">View all</NuxtLink>
      </motion.div>

      <div class="mobile-blog-list">
        <motion.div
          v-for="(blog, index) in blogs"
          :key="blog.slug"
          class="mobile-blog-card"
          :initial="{ opacity: 0, y: 12 }"
          :animate="itemAnimate(index).value"
        >
          <NuxtLink :to="`/blog/${blog.slug}`" class="mobile-blog-card-link">
            <div class="mobile-blog-image-wrap">
              <img :src="blog.bannerImage" :alt="blog.title" class="mobile-blog-image" />
            </div>
            <div class="mobile-blog-content">
              <div class="mobile-blog-meta">
                <span>{{ new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) }}</span>
                <span class="dot">·</span>
                <span>{{ blog.readTime }}</span>
              </div>
              <h3 class="mobile-blog-card-title">{{ blog.title }}</h3>
              <p class="mobile-blog-card-excerpt">{{ blog.excerpt }}</p>
            </div>
          </NuxtLink>
        </motion.div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.mobile-blog-section {
  padding: 60px var(--page-gutter);
  background: var(--paper);
  color: var(--ink);
}

.mobile-blog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 16px;
}

.mobile-blog-title {
  font-size: clamp(24px, 8vw, 32px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0;
}

.mobile-blog-link {
  font-size: 14px;
  color: var(--muted);
  text-decoration: none;
}

.mobile-blog-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.mobile-blog-card {
  display: flex;
  flex-direction: column;
}

.mobile-blog-card-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
}

.mobile-blog-image-wrap {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #f4f4f5;
  margin-bottom: 16px;
}

.mobile-blog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mobile-blog-meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.mobile-blog-card-title {
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.mobile-blog-card-excerpt {
  font-size: 14px;
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
}
</style>
