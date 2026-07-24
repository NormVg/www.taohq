<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="site-shell">
    <SiteHeader class="desktop-only" />
    <MobileHeader class="mobile-only" />
    <slot />
    <SiteFooter class="desktop-only" :minimal="!isHomepage" />
    <MobileFooter class="mobile-only" :minimal="!isHomepage" />
  </div>
</template>

<style>
.desktop-only { display: block; }
.mobile-only { display: none; }

@media (max-width: 980px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: block !important; }
}
</style>
