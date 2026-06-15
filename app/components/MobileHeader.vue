<script setup lang="ts">
import { motion } from 'motion-v'

const navItems = [
  { label: 'Projects', href: '#projects' },
  { label: 'Organization', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="mobile-header" aria-label="Primary navigation">
    <motion.a
      class="wordmark"
      href="#top"
      aria-label="TheAlphaOnes home"
      :initial="{ opacity: 0, filter: 'blur(4px)' }"
      :animate="{ opacity: 1, filter: 'blur(0px)' }"
      :transition="{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
    >
      TheAlphaOnes
    </motion.a>

    <nav class="nav-links">
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
      >
        {{ item.label }}
      </a>
    </nav>
  </header>
</template>

<style scoped>
.mobile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px var(--page-gutter) 0;
  gap: 16px;
}

.wordmark {
  font-family: Italianno, cursive;
  font-size: 42px;
  font-weight: 400;
  line-height: 0.8;
  opacity: 1;
  text-decoration: none;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.nav-links a {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.2;
  text-decoration: none;
  transition: color 180ms ease;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--ink);
}
</style>
