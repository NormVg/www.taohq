<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const principles = [
  {
    title: 'Calm Infrastructure',
    body: 'We design systems that prioritize utility over disruption. Our infrastructure is built to remain invisible, operating with a quiet reliability that allows users to focus on their work rather than the tools they use.',
  },
  {
    title: 'Scalable Craft',
    body: 'Technical thoughtfulness means anticipating failure states and designing robust architectures. We believe in building digital products that withstand scale without sacrificing precision or performance.',
  },
]

// Individual refs and visibility trackers per principle
const articleRef0 = ref<HTMLElement | null>(null)
const articleRef1 = ref<HTMLElement | null>(null)
const isVisible0 = useInView(articleRef0, { once: false, amount: 0.4, margin: "-15% 0px -15% 0px" })
const isVisible1 = useInView(articleRef1, { once: false, amount: 0.4, margin: "-15% 0px -15% 0px" })

const articleRefs = [articleRef0, articleRef1]
const isVisibleArr = [isVisible0, isVisible1]

const headingAnimate = (i: number) => computed(() =>
  isVisibleArr[i].value
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: -14 }
)
const bodyAnimate = (i: number) => computed(() =>
  isVisibleArr[i].value
    ? { opacity: 1, filter: 'blur(0px)' }
    : { opacity: 0, filter: 'blur(6px)' }
)

// Slow entrance, smooth exit without delay
const headingTransition = (i: number) => computed(() =>
  isVisibleArr[i].value
    ? { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
const bodyTransition = (i: number) => computed(() =>
  isVisibleArr[i].value
    ? { duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.8, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
</script>

<template>
  <section id="about" class="principles-section" aria-labelledby="organization-title">
    <p id="organization-title" class="section-kicker">Organization</p>
    <span class="section-divider" aria-hidden="true" />

    <div class="principle-list">
      <article v-for="(principle, i) in principles" :key="principle.title" :ref="(el) => { if (el) articleRefs[i].value = el as HTMLElement }" class="principle">
        <motion.h2
          :initial="{ opacity: 0, y: 14 }"
          :animate="headingAnimate(i).value"
          :transition="headingTransition(i).value">
          {{ principle.title }}
        </motion.h2>
        <motion.p
          :initial="{ opacity: 0, filter: 'blur(6px)' }"
          :animate="bodyAnimate(i).value"
          :transition="bodyTransition(i).value">
          {{ principle.body }}
        </motion.p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.principles-section {
  --org-step-xs: 16px;
  --org-step-sm: 26px;
  --org-step-md: 42px;
  --org-step-lg: 68px;
  --org-step-xl: 110px;
  align-items: start;
  display: grid;
  column-gap: clamp(22px, 2.2vw, 38px);
  grid-template-columns: minmax(180px, 0.44fr) 1px minmax(540px, 0.8fr);
  margin-top: clamp(var(--org-step-lg), 7.2vw, 126px);
  padding: 0 var(--page-gutter);
}

.section-kicker {
  color: var(--muted);
  font-size: clamp(18px, 1.45vw, 26px);
  line-height: 1.2;
  margin: 0;
}

.section-divider {
  align-self: stretch;
  background: rgb(0 0 0 / 22%);
  display: block;
  min-height: clamp(320px, 34vw, 520px);
  width: 1px;
}

.principle-list {
  align-self: end;
  justify-self: end;
  display: grid;
  gap: clamp(var(--org-step-md), 4.5vw, var(--org-step-lg));
  max-width: 640px;
  padding-top: clamp(54px, 4.25vw, 74px);
  padding-right: clamp(22px, 2.2vw, 38px);
}

.principle {
  max-width: 980px;
}

.principle h2 {
  font-size: clamp(34px, 2.55vw, 44px);
  font-weight: 500;
  line-height: 1.2;
  margin: 0 0 clamp(18px, 1.5vw, 26px);
}

.principle p {
  font-size: clamp(18px, 1.45vw, 26px);
  line-height: 1.16;
  margin: 0;
}

@media (max-width: 780px) {
  .principles-section {
    gap: 28px;
    grid-template-columns: 1fr;
    margin-top: clamp(60px, 10vw, 100px);
  }

  .section-kicker {
    font-size: clamp(16px, 4vw, 22px);
  }

  .section-divider {
    height: 1px;
    min-height: 0;
    width: 100%;
  }

  .principle-list {
    gap: clamp(36px, 8vw, 56px);
    padding-top: 0;
    padding-right: 0;
  }

  .principle h2 {
    font-size: clamp(26px, 6.5vw, 38px);
    margin-bottom: clamp(14px, 3.5vw, 20px);
  }

  .principle p {
    font-size: clamp(16px, 4.2vw, 22px);
    line-height: 1.4;
  }
}
</style>
