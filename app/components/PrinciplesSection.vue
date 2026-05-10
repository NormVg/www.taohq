<script setup lang="ts">
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
</script>

<template>
  <section id="about" class="principles-section" aria-labelledby="organization-title">
    <p id="organization-title" class="section-kicker">Organization</p>
    <span class="section-divider" aria-hidden="true" />
    <div class="principle-list">
      <article v-for="principle in principles" :key="principle.title" class="principle">
        <h2>{{ principle.title }}</h2>
        <p>{{ principle.body }}</p>
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
    gap: 32px;
    grid-template-columns: 1fr;
  }

  .section-divider {
    height: 2px;
    min-height: 0;
    width: 100%;
  }

  .principle-list {
    padding-top: 0;
  }
}
</style>
