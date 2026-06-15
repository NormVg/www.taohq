<script setup lang="ts">
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <div
    style="
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #000000;
      color: #ffffff;
      padding: 80px;
    "
  >
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center;">
      <h1
        style="
          font-size: 80px;
          font-weight: bold;
          margin-bottom: 24px;
          text-align: center;
          font-family: sans-serif;
        "
      >
        {{ title || 'TheAlphaOnes' }}
      </h1>
      <p
        style="
          font-size: 36px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          max-width: 900px;
          line-height: 1.4;
          font-family: sans-serif;
        "
      >
        {{ description || 'Independent software, systems, and digital products designed to feel calm under pressure.' }}
      </p>
    </div>
  </div>
</template>
