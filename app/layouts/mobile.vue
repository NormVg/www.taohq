<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHomepage = computed(() => route.path === '/')
</script>

<template>
  <div class="site-shell mobile-shell">
    <MobileHeader />
    <slot />
    <MobileFooter :minimal="!isHomepage" />
  </div>
</template>

<style scoped>
.mobile-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
