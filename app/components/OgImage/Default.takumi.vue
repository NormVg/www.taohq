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
      justify-content: space-between;
      background-color: #000000;
      color: #ffffff;
      padding: 80px;
      font-family: 'Inter', sans-serif;
    "
  >
    <!-- Top: wordmark -->
    <div
      style="
        font-size: 32px;
        font-weight: 600;
        letter-spacing: -0.02em;
        color: rgba(255, 255, 255, 0.8);
      "
    >
      TheAlphaOnes
    </div>

    <!-- Middle: Content -->
    <div style="display: flex; flex-direction: column;">
      <div
        style="
          font-size: 88px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.03em;
          color: #ffffff;
          margin-bottom: 32px;
          max-width: 1000px;
        "
      >
        {{ title || 'TheAlphaOnes' }}
      </div>
      <div
        style="
          font-size: 36px;
          line-height: 1.4;
          color: rgba(255, 255, 255, 0.6);
          max-width: 900px;
          font-weight: 400;
        "
      >
        {{ description || 'Independent software, systems, and digital products designed to feel calm under pressure.' }}
      </div>
    </div>

    <!-- Bottom: domain -->
    <div style="display: flex; justify-content: flex-end;">
      <div
        style="
          font-size: 28px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: -0.01em;
        "
      >
        taohq.org
      </div>
    </div>
  </div>
</template>
