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
      background: #000;
      color: #fff;
      padding: 72px 80px;
      font-family: 'Inter', sans-serif;
      position: relative;
      overflow: hidden;
    "
  >
    <!-- Background texture bars (mirrors footer riser aesthetic) -->
    <div
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        opacity: 0.12;
      "
    >
      <div style="height: 8px; background: #fff; width: 100%" />
      <div style="height: 13px; background: #fff; width: 100%" />
      <div style="height: 21px; background: #fff; width: 100%" />
      <div style="height: 34px; background: #fff; width: 100%" />
      <div style="height: 55px; background: #fff; width: 100%" />
    </div>

    <!-- Top: wordmark -->
    <div
      style="
        font-family: 'Italianno', cursive;
        font-size: 64px;
        font-weight: 400;
        line-height: 1;
        color: #fff;
      "
    >
      TheAlphaOnes
    </div>

    <!-- Middle: title -->
    <div style="flex: 1; display: flex; align-items: center;">
      <div
        style="
          font-size: 72px;
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.02em;
          max-width: 900px;
          color: #fff;
        "
      >
        {{ title || 'Building thoughtful software, systems, and lifestyle products.' }}
      </div>
    </div>

    <!-- Bottom: description + domain -->
    <div style="display: flex; justify-content: space-between; align-items: flex-end;">
      <div
        style="
          font-size: 24px;
          line-height: 1.4;
          color: rgba(255,255,255,0.55);
          max-width: 700px;
        "
      >
        {{ description || 'An independent umbrella organisation behind developer tools, software products, and experimental systems.' }}
      </div>
      <div
        style="
          font-size: 20px;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
          margin-left: 40px;
        "
      >
        taohq.org
      </div>
    </div>
  </div>
</template>
