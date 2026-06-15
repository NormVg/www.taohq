<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    style="
      width: 1200px;
      height: 630px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      color: #ffffff;
      font-family: 'Inter', sans-serif;
      position: relative;
    "
  >
    <!-- Centered Logo -->
    <div style="display: flex; align-items: center; justify-content: center;">
      <img src="/logo.svg" width="600" height="137" style="opacity: 0.9;" />
    </div>

    <!-- Bottom domain -->
    <div
      style="
        position: absolute;
        bottom: 48px;
        font-size: 20px;
        font-weight: 400;
        color: rgba(255, 255, 255, 0.4);
      "
    >
      taohq.org
    </div>
  </div>
</template>
