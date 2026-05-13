<script setup lang="ts">
useSeoMeta({
  title: 'TheAlphaOnes — Thoughtful Software, Systems & Lifestyle Products',
  description: 'An independent umbrella organisation behind developer tools, software products, and experimental systems. Building thoughtful software, systems, and lifestyle products.',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

defineOgImage('OgImageDefault', {
  title: 'Building thoughtful software, systems, and lifestyle products.',
  description: 'An independent umbrella organisation behind developer tools, software products, and experimental systems.',
})

useSchemaOrg([
  defineOrganization({
    name: 'TheAlphaOnes',
    url: 'https://www.taohq.org',
    logo: 'https://www.taohq.org/favicon.ico',
    sameAs: [
      'https://github.com/thealphaones',
      'https://twitter.com/thealphaones',
    ],
  }),
  defineWebSite({
    name: 'TheAlphaOnes',
    description: 'An independent umbrella organisation behind developer tools, software products, and experimental systems.',
  }),
])
</script>

<template>
  <NuxtRouteAnnouncer />

  <main class="site-shell">
    <SiteHeader />
    <HeroSection />
    <PrinciplesSection />
    <VenturesSection />
    <SiteFooter />
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Italianno&display=swap');

:root {
  --page-gutter: clamp(16px, 2.55vw, 44px);
  --ink: #000;
  --muted: rgb(0 0 0 / 55%);
  --paper: #fff;
  --phi: 1.618;
}

* {
  box-sizing: border-box;
}

html {
  background: var(--paper);
  color: var(--ink);
  font-family: Inter, Arial, sans-serif;
  font-synthesis: none;
  scroll-behavior: smooth;
  text-rendering: geometricPrecision;
}

body {
  margin: 0;
}

a {
  color: inherit;
}

a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 6px;
}

::selection {
  background: #000;
  color: #fff;
}

.site-shell {
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: clip;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
