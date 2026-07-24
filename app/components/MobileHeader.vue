<script setup lang="ts">
import { ref, watch } from 'vue'
import { motion, AnimatePresence } from 'motion-v'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

const navItems = [
  { label: 'Products', href: '/#products' },
  { label: 'Organization', href: '/#about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

// Lock body scroll when menu is open
watch(isOpen, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : ''
  }
})

// Close menu on route change
watch(() => route.fullPath, () => {
  isOpen.value = false
})
</script>

<template>
  <header class="mobile-header" aria-label="Primary navigation">
    <div class="header-inner">
      <NuxtLink custom to="/" v-slot="{ href, navigate }">
        <motion.a
          class="wordmark"
          :href="href"
          @click="navigate"
          aria-label="TheAlphaOnes home"
          :initial="{ opacity: 0, filter: 'blur(4px)' }"
          :animate="{ opacity: 1, filter: 'blur(0px)' }"
          :transition="{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }"
        >
          TheAlphaOnes
        </motion.a>
      </NuxtLink>

      <button class="hamburger-btn" @click="isOpen = !isOpen" aria-label="Toggle navigation">
        <motion.div class="hamburger-line" :animate="isOpen ? { y: 6, rotate: 45 } : { y: 0, rotate: 0 }" />
        <motion.div class="hamburger-line" :animate="isOpen ? { opacity: 0 } : { opacity: 1 }" />
        <motion.div class="hamburger-line" :animate="isOpen ? { y: -6, rotate: -45 } : { y: 0, rotate: 0 }" />
      </button>
    </div>

    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="nav-overlay"
        :initial="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        :animate="{ opacity: 1, backdropFilter: 'blur(16px)' }"
        :exit="{ opacity: 0, backdropFilter: 'blur(0px)' }"
        :transition="{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }"
      >
        <nav class="nav-links">
          <NuxtLink custom v-for="(item, i) in navItems" :key="item.label" :to="item.href" v-slot="{ href, navigate }">
            <motion.a
              :href="href"
              @click="navigate(); isOpen = false"
              class="nav-link"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :exit="{ opacity: 0, y: 10 }"
              :transition="{ duration: 0.5, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }"
            >
              {{ item.label }}
            </motion.a>
          </NuxtLink>
        </nav>
      </motion.div>
    </AnimatePresence>
  </header>
</template>

<style scoped>
.mobile-header {
  position: relative;
  z-index: 100;
}

.header-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px var(--page-gutter) 0;
  position: relative;
  z-index: 101; /* Above overlay */
}

.wordmark {
  font-family: Italianno, cursive;
  font-size: 42px;
  font-weight: 400;
  line-height: 0.8;
  color: var(--ink);
  text-decoration: none;
}

.hamburger-btn {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
  padding: 8px;
  z-index: 101;
}

.hamburger-line {
  width: 24px;
  height: 2px;
  background: var(--ink);
  transform-origin: center;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.nav-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 32px;
  font-weight: 500;
  color: var(--ink);
  text-decoration: none;
  letter-spacing: -0.02em;
}
</style>
