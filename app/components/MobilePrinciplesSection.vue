<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const principles = [
  {
    title: 'Infrastructure',
    body: 'We design systems that prioritize utility over disruption. Our infrastructure is built to remain invisible, operating with a quiet reliability that allows users to focus on their work rather than the tools they use.',
  },
  {
    title: 'Scalable Craft',
    body: 'Technical thoughtfulness means anticipating failure states and designing robust architectures. We believe in building digital products that withstand scale without sacrificing precision or performance.',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = useInView(sectionRef, { once: false, amount: 0.1, margin: "0px 0px -10% 0px" })

const headingTransition = (i: number) => computed(() =>
  isVisible.value
    ? { duration: 0.8, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
const bodyTransition = (i: number) => computed(() =>
  isVisible.value
    ? { duration: 0.8, delay: 0.1 + i * 0.2, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
</script>

<template>
  <section id="about" class="mobile-principles-section" aria-labelledby="organization-title" ref="sectionRef">
    <div class="header-area">
      <p id="organization-title" class="section-kicker">Organization</p>
      <span class="section-divider" aria-hidden="true" />
    </div>

    <div class="principle-list">
      <article v-for="(principle, i) in principles" :key="principle.title" class="principle">
        <motion.h2
          :initial="{ opacity: 0, y: 10 }"
          :animate="isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }"
          :transition="headingTransition(i).value">
          {{ principle.title }}
        </motion.h2>
        <motion.p
          :initial="{ opacity: 0, filter: 'blur(4px)' }"
          :animate="isVisible ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(4px)' }"
          :transition="bodyTransition(i).value">
          {{ principle.body }}
        </motion.p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.mobile-principles-section {
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  padding: 0 var(--page-gutter);
}

.header-area {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.section-kicker {
  color: var(--muted);
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
}

.section-divider {
  background: rgb(0 0 0 / 22%);
  display: block;
  height: 1px;
  width: 100%;
}

.principle-list {
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 40px;
}

.principle h2 {
  font-size: clamp(28px, 7vw, 36px);
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 16px;
}

.principle p {
  font-size: clamp(16px, 4.5vw, 20px);
  line-height: 1.4;
  margin: 0;
}
</style>
