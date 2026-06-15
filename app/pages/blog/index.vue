<script setup lang="ts">
import { blogs } from '~/data/blogs'
import { computed } from 'vue'

const isDesktop = computed(() => {
  // Use Nuxt Device module if available, fallback to true for SSR
  const { $device } = useNuxtApp()
  return $device ? $device.isDesktop : true
})
</script>

<template>
  <main class="blog-index-page">
    <div class="blog-index-container">
      <header class="blog-index-header">
        <h1 class="blog-index-title">Journal</h1>
        <p class="blog-index-subtitle">Writing on design, architecture, and building calm systems.</p>
      </header>

      <div class="blog-grid" :class="{ 'is-mobile': !isDesktop }">
        <NuxtLink
          v-for="blog in blogs"
          :key="blog.slug"
          :to="`/blog/${blog.slug}`"
          class="blog-card"
        >
          <div class="blog-card-image-wrap">
            <img :src="blog.bannerImage" :alt="blog.title" class="blog-card-image" />
          </div>
          <div class="blog-card-content">
            <div class="blog-card-meta">
              <span>{{ new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
              <span class="dot">·</span>
              <span>{{ blog.readTime }}</span>
            </div>
            <h2 class="blog-card-title">{{ blog.title }}</h2>
            <p class="blog-card-excerpt">{{ blog.excerpt }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<style scoped>
.blog-index-page {
  padding: clamp(100px, 15vh, 160px) var(--page-gutter) clamp(60px, 10vh, 120px);
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
}

.blog-index-container {
  max-width: 1200px;
  margin: 0 auto;
}

.blog-index-header {
  margin-bottom: clamp(60px, 10vh, 100px);
}

.blog-index-title {
  font-size: clamp(48px, 6vw, 88px);
  font-weight: 500;
  letter-spacing: -0.03em;
  margin: 0 0 16px 0;
  line-height: 1;
}

.blog-index-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  color: var(--muted);
  margin: 0;
  max-width: 600px;
  line-height: 1.4;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: clamp(32px, 5vw, 64px);
}

.blog-grid.is-mobile {
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.blog-card {
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  group: true; /* for hover states */
}

.blog-card-image-wrap {
  aspect-ratio: 16 / 10;
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

.blog-grid.is-mobile .blog-card:hover .blog-card-image {
  transform: none; /* Disable hover scale on mobile */
}

.blog-card-content {
  display: flex;
  flex-direction: column;
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
  font-size: clamp(22px, 1.8vw, 28px);
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

.blog-card-excerpt {
  font-size: clamp(15px, 1.2vw, 18px);
  line-height: 1.5;
  color: var(--muted);
  margin: 0;
}
</style>
