<script setup lang="ts">
const navItems = [
  { label: 'Ventures', href: '#ventures' },
  { label: 'Organization', href: '#about' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="site-header" aria-label="Primary navigation">
    <nav class="nav-links">
      <a v-for="item in navItems" :key="item.label" :href="item.href">{{ item.label }}</a>
    </nav>
    <a class="wordmark" href="#top" aria-label="TheAlphaOnes home">TheAlphaOnes</a>
  </header>
</template>

<style scoped>
.site-header {
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  padding: clamp(27px, 2.55vw, 44px) var(--page-gutter) 0;
}

.nav-links {
  display: flex;
  gap: clamp(29px, 2.76vw, 48px);
}

.nav-links a {
  color: var(--muted);
  font-size: clamp(12px, 1.04vw, 18px);
  line-height: 1.2;
  position: relative;
  text-decoration: none;
  transition: color 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.nav-links a::after {
  background: currentColor;
  bottom: -0.42em;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms ease;
  width: 100%;
}

.nav-links a:hover,
.nav-links a:focus-visible {
  color: var(--ink);
}

.nav-links a:hover::after,
.nav-links a:focus-visible::after {
  transform: scaleX(1);
}

.nav-links a:active,
.wordmark:active {
  transform: translateY(1px);
}

.wordmark {
  font-family: Italianno, cursive;
  font-size: clamp(47px, 4.42vw, 76px);
  font-weight: 400;
  line-height: 0.72;
  margin-top: clamp(7px, 0.62vw, 11px);
  opacity: 1;
  text-decoration: none;
  transition: opacity 180ms ease, transform 180ms ease;
  white-space: nowrap;
}

.wordmark:hover,
.wordmark:focus-visible {
  opacity: 0.68;
}

@media (max-width: 780px) {
  .site-header {
    gap: 28px;
    padding-top: 24px;
  }

  .nav-links {
    flex-wrap: wrap;
    gap: 12px 22px;
  }

  .wordmark {
    font-size: 44px;
  }
}

@media (max-width: 520px) {
  .site-header {
    align-items: stretch;
    flex-direction: column-reverse;
  }

  .wordmark {
    align-self: flex-end;
  }
}
</style>
