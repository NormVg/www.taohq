<script setup lang="ts">
const { isDesktop } = useDevice()
</script>

<template>
  <NuxtLayout :name="isDesktop ? 'default' : 'mobile'">
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
</template>
