<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  author?: string
  date?: string
}>()
</script>

<template>
  <div
    style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: #000000;
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      padding: 80px 100px;
    "
  >
    <!-- Top left logo -->
    <div style="display: flex;">
      <img src="/logo.svg" width="240" height="55" style="opacity: 0.9;" />
    </div>

    <!-- Main Content -->
    <div style="display: flex; flex-direction: column; gap: 32px; padding-bottom: 20px;">
      <!-- Metadata -->
      <div style="display: flex; align-items: center; gap: 16px; font-size: 28px; color: rgba(255, 255, 255, 0.4); text-transform: uppercase; letter-spacing: 0.08em;">
        <span v-if="date">{{ date }}</span>
        <span v-if="date && author" style="color: rgba(255, 255, 255, 0.2);">·</span>
        <span v-if="author">BY {{ author }}</span>
      </div>
      
      <!-- Title -->
      <div style="font-size: 96px; font-weight: 700; line-height: 1.05; letter-spacing: -0.03em; max-width: 1000px; text-wrap: balance;">
        {{ title }}
      </div>
    </div>
  </div>
</template>
