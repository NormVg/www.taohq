<template>
  <div>
    <template v-if="$device.isDesktop">
      <HeroSection />
      <PrinciplesSection />
      <VenturesSection />
    </template>
    <template v-else>
      <MobileHeroSection />
      <MobilePrinciplesSection />
      <MobileVenturesSection />
    </template>
  </div>
</template>

<script setup lang="ts">
// Index page orchestrating the content based on device
</script>
