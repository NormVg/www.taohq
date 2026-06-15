<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { blogs } from '~/data/blogs'
import { MarkdownRender } from 'markstream-vue'
// Optional: import markstream css if available, or write custom styles below
// import 'markstream-vue/style.css'

const route = useRoute()
const slug = route.params.slug as string

const article = computed(() => {
  return blogs.find((b) => b.slug === slug)
})

useSeoMeta({
  title: article.value?.title || 'Journal',
  description: article.value?.excerpt
})

defineOgImage('Article', {
  title: article.value?.title,
  author: article.value?.author,
  date: article.value?.date ? new Date(article.value.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : undefined
})
</script>

<template>
  <main class="article-page" v-if="article">
    <!-- Hero Section -->
    <header class="article-hero">
      <div class="article-hero-container">
        <div class="article-meta">
          <span>{{ new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}</span>
          <span class="dot">·</span>
          <span>{{ article.readTime }}</span>
          <span class="dot">·</span>
          <span>By {{ article.author }}</span>
        </div>
        <h1 class="article-title">{{ article.title }}</h1>
        <p v-if="article.subtitle" class="article-subtitle">{{ article.subtitle }}</p>
      </div>
      <div class="article-banner">
        <img :src="article.bannerImage" :alt="article.title" class="article-banner-image" />
      </div>
    </header>

    <!-- Article Body using Markstream -->
    <article class="article-content">
      <div class="article-content-container">
        <!-- Render the markdown -->
        <MarkdownRender :content="article.content" class="markstream-renderer" />
      </div>
    </article>
  </main>

  <main class="article-page" v-else>
    <div class="article-hero-container">
      <h1>Article not found</h1>
      <NuxtLink to="/blog">Back to Journal</NuxtLink>
    </div>
  </main>
</template>

<style scoped>
.article-page {
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  padding-bottom: clamp(80px, 15vh, 160px);
}

.article-hero {
  padding-top: clamp(100px, 15vh, 160px);
}

.article-hero-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
}

.article-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 14px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.article-title {
  font-size: clamp(36px, 5vw, 64px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 24px 0;
}

.article-subtitle {
  font-size: clamp(20px, 2.5vw, 28px);
  font-weight: 400;
  color: var(--muted);
  line-height: 1.4;
  margin: 0 0 48px 0;
}

.article-banner {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto clamp(60px, 10vh, 100px);
  padding: 0 var(--page-gutter);
}

.article-banner-image {
  width: 100%;
  height: auto;
  aspect-ratio: 21 / 9;
  object-fit: cover;
  background: #f4f4f5;
  border-radius: 8px;
}

.article-content-container {
  max-width: 720px;
  margin: 0 auto;
  padding: 0 var(--page-gutter);
}

/* Custom styling for Markstream to fit the app theme */
:deep(.markstream-renderer) {
  font-size: clamp(16px, 1.25vw, 20px);
  line-height: 1.6;
  color: var(--ink);
}

:deep(.markstream-renderer h1),
:deep(.markstream-renderer h2),
:deep(.markstream-renderer h3),
:deep(.markstream-renderer h4) {
  font-weight: 600;
  letter-spacing: -0.02em;
  margin-top: 2em;
  margin-bottom: 1em;
  line-height: 1.2;
}

:deep(.markstream-renderer h1) {
  font-size: 2.5em;
}

:deep(.markstream-renderer h2) {
  font-size: 2em;
}

:deep(.markstream-renderer p) {
  margin-bottom: 1.5em;
}

:deep(.markstream-renderer a) {
  color: inherit;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
}

:deep(.markstream-renderer ul),
:deep(.markstream-renderer ol) {
  margin-bottom: 1.5em;
  padding-left: 1.5em;
}

:deep(.markstream-renderer li) {
  margin-bottom: 0.5em;
}

:deep(.markstream-renderer pre) {
  background: #111;
  color: #fff;
  padding: 1.5em;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1.5em;
  font-size: 0.9em;
  line-height: 1.5;
}

:deep(.markstream-renderer code) {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

:deep(.markstream-renderer p > code) {
  background: rgba(0, 0, 0, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-size: 0.9em;
}
</style>
