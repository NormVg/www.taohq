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
      background-color: #09090b;
      background-image: linear-gradient(135deg, #09090b 0%, #18181b 100%);
      color: #ffffff;
      padding: 60px;
      font-family: 'Inter', sans-serif;
    "
  >
    <!-- Main Content Container -->
    <div
      style="
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        height: 100%;
        padding: 72px;
        background-color: rgba(255, 255, 255, 0.03);
        border-top: 2px solid rgba(255, 255, 255, 0.1);
        border-left: 1px solid rgba(255, 255, 255, 0.05);
        border-right: 1px solid rgba(255, 255, 255, 0.05);
        border-bottom: 1px solid rgba(255, 255, 255, 0.02);
        border-radius: 48px;
        box-shadow: 0 32px 64px rgba(0, 0, 0, 0.5);
      "
    >
      <!-- Title -->
      <h1
        style="
          font-size: 96px;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin: 0 0 32px 0;
          color: #ffffff;
          line-height: 1.1;
        "
      >
        {{ title || 'TheAlphaOnes' }}
      </h1>
      
      <!-- Description -->
      <p
        style="
          font-size: 40px;
          font-weight: 400;
          color: #a1a1aa;
          max-width: 850px;
          line-height: 1.5;
          letter-spacing: -0.01em;
          margin: 0;
        "
      >
        {{ description || 'Independent software, systems, and digital products designed to feel calm under pressure.' }}
      </p>

      <!-- Bottom Branding inside the card -->
      <div
        style="
          display: flex;
          align-items: center;
          margin-top: auto;
        "
      >
        <div style="font-size: 32px; font-weight: 700; letter-spacing: -0.02em; color: #ffffff;">
          TheAlphaOnes
        </div>
        <div style="width: 8px; height: 8px; border-radius: 4px; background-color: #52525b; margin: 0 24px;"></div>
        <div style="font-size: 32px; font-weight: 400; color: #a1a1aa;">
          taohq.org
        </div>
      </div>
    </div>
  </div>
</template>
