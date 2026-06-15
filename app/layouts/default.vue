<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="site-shell">
    <SiteHeader />
    <slot />
    <SiteFooter :minimal="!isHomepage" />
  </div>
</template>
