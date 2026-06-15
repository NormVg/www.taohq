<template>
  <div>
    <template v-if="$device.isDesktop">
      <HeroSection />
      <PrinciplesSection />
      <VenturesSection />
      <BlogPreviewSection />
    </template>
    <template v-else>
      <MobileHeroSection />
      <MobilePrinciplesSection />
      <MobileVenturesSection />
      <MobileBlogPreviewSection />
    </template>
  </div>
</template>

<script setup lang="ts">
// Index page orchestrating the content based on device
</script>
