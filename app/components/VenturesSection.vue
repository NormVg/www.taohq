<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, onMounted, onUnmounted, ref } from 'vue'

type Venture = {
  title: string
  body: string
  image: string
  imagePosition: string
  linkHref: string
  productHref: string
}

const ventures: Venture[] = [
  {
    title: 'Common Design',
    body: 'Shared design infrastructure for consistent product language, calmer defaults, and repeatable interaction patterns across ventures.',
    image: '/figma/stone-product.png',
    imagePosition: 'center 56%',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'Sober.Spend',
    body: 'A quieter financial tool that helps people read spending clearly and make deliberate choices without unnecessary interface pressure.',
    image: '/figma/hero-mask-image.png',
    imagePosition: 'center center',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'Fold.tao',
    body: 'A structured notes and workflow system designed around low-friction capture, review, and operational clarity over time.',
    image: '/figma/stone-product.png',
    imagePosition: 'center 62%',
    linkHref: '#contact',
    productHref: '#top',
  },
  {
    title: 'TheAlphaOnes',
    body: 'The umbrella operating layer behind tools, products, and experiments that need shared infrastructure without losing craft.',
    image: '/figma/hero-mask-image.png',
    imagePosition: 'center 18%',
    linkHref: '#contact',
    productHref: '#top',
  },
]

const sectionRef = ref<HTMLElement | null>(null)
const activeIndex = ref(0)
const isLocked = ref(false)
const direction = ref<'up' | 'down'>('down')
const imageOffsets = ref<number[]>(ventures.map(() => 0))
const activeVenture = computed(() => ventures[activeIndex.value] ?? ventures[0])

// useInView on the outer tall section — works correctly with sticky children
const isVisible = useInView(sectionRef, { once: true, amount: 0.15 })

// Each part gets its own entry animation driven by isVisible
const imgAnimate = computed(() => isVisible.value
  ? { opacity: 1, filter: 'blur(0px)', y: 0 }
  : { opacity: 0, filter: 'blur(10px)', y: 16 }
)
const listAnimate = (i: number) => computed(() => isVisible.value
  ? { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, x: -12 }
)
const detailAnimate = computed(() => isVisible.value
  ? { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] } }
  : { opacity: 0, filter: 'blur(8px)' }
)

/* ---------- Scroll-linked Native Sticky Navigation ---------- */
function handleScroll() {
  if (!sectionRef.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  
  // Total scrollable distance inside this section
  // It is the total height of the section minus the 100vh sticky viewport
  const maxScroll = rect.height - window.innerHeight

  // How far we have scrolled past the TOP of the section
  const scrolled = -rect.top

  // If we haven't reached the section, or we've passed it completely, do nothing.
  if (scrolled < 0 || scrolled > maxScroll + window.innerHeight) {
    return
  }

  // Calculate scroll progress from 0 to 1
  const progress = Math.max(0, Math.min(1, scrolled / maxScroll))

  // Map progress to the current active index
  let nextIndex = Math.floor(progress * ventures.length)
  // Clamp it just in case
  if (nextIndex >= ventures.length) nextIndex = ventures.length - 1

  if (nextIndex !== activeIndex.value) {
    const dirStr = nextIndex > activeIndex.value ? 'down' : 'up'
    direction.value = dirStr

    // Apply parallax pop to the incoming image
    imageOffsets.value = ventures.map((_, i) => {
      if (i === nextIndex) return nextIndex > activeIndex.value ? 24 : -24
      return 0
    })

    activeIndex.value = nextIndex

    // Reset offsets shortly after
    requestAnimationFrame(() => {
      setTimeout(() => {
        imageOffsets.value = ventures.map(() => 0)
      }, 60)
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  // Initial check in case they reload in the middle of the section
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section id="ventures" ref="sectionRef" class="ventures-section" aria-labelledby="ventures-title" :style="{ height: `${ventures.length * 100}vh` }">
    
    <div class="ventures-sticky-frame">
      <div class="ventures-viewport">
      <!-- Left: Image Frame — enters first -->
      <motion.div class="ventures-media-frame"
        :initial="{ opacity: 0, filter: 'blur(10px)', y: 16 }"
        :animate="imgAnimate"
        :transition="{ duration: 1.6, delay: 0, ease: [0.22, 1, 0.36, 1] }"
      >
        <motion.div v-for="(venture, index) in ventures" :key="venture.title" class="ventures-media-layer"
          :initial="false" :animate="{
            opacity: activeIndex === index ? 1 : 0,
            y: imageOffsets[index],
          }" :transition="{
            opacity: { duration: 0.52, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
          }">
          <img class="ventures-media-image" :src="venture.image" :alt="venture.title"
            :style="{ objectPosition: venture.imagePosition }" />
        </motion.div>
      </motion.div>

      <!-- Index list — staggered in after image -->
      <div class="ventures-index-list" aria-label="Ventures">
        <motion.button v-for="(venture, index) in ventures" :key="venture.title" class="ventures-index-item"
          :class="{ 'is-active': activeIndex === index }" type="button"
          :whileHover="{ x: 4 }"
          :whilePress="{ scale: 0.985, x: 2 }"
          :initial="{ opacity: 0, x: -12 }"
          :animate="listAnimate(index).value"
          @click="activeIndex = index">
          <span class="ventures-index-number">{{ index }}.</span>
          <span class="ventures-index-name">{{ venture.title }}</span>
        </motion.button>
      </div>

      <!-- Credit — static -->
      <p class="ventures-credit">made with ♥ by taohq</p>

      <!-- Detail / Info — arrives last -->
      <motion.div :key="activeVenture.title" class="ventures-detail"
        :initial="{ opacity: 0, filter: 'blur(8px)' }"
        :animate="isVisible ? { opacity: 1, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(8px)' }"
        :transition="{ duration: 0.8, delay: activeVenture === ventures[0] ? 1.4 : 0, ease: [0.22, 1, 0.36, 1] }">
        <p>{{ activeVenture.body }}</p>
        <div class="ventures-links">
          <a :href="activeVenture.linkHref">Link</a>
          <a :href="activeVenture.productHref">Product</a>
        </div>
      </motion.div>

      </div>

      <!-- Scroll indicator -->
      <div class="ventures-scroll-hint" :class="{ 'is-hidden': activeIndex === ventures.length - 1 }">
        <span class="ventures-scroll-dot" />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Section: full-viewport lock ── */
.ventures-section {
  position: relative;
}

.ventures-sticky-frame {
  position: sticky;
  top: 0;
  height: 100vh;
  padding: 0 var(--page-gutter);
  display: flex;
  flex-direction: column;
}

.ventures-viewport {
  flex: 1;
  display: grid;
  column-gap: clamp(16px, 2vw, 32px);
  grid-template-columns: minmax(0, 1fr) minmax(300px, 640px) clamp(180px, 15vw, 240px) minmax(0, 1fr);
  grid-template-rows: 1fr auto 1fr;
  height: 100%;
  margin: 0 auto;
  padding-top: clamp(40px, 6vh, 80px);
  padding-bottom: clamp(40px, 6vh, 80px);
  max-width: 1728px;
  position: relative;
  width: 100%;
}

.ventures-media-frame {
  grid-column: 2;
  grid-row: 2;
  aspect-ratio: 1042 / 618;
  background: #d9d9d9;
  overflow: hidden;
  position: relative;

  width: 100%;
}

.ventures-media-layer {
  inset: 0;
  pointer-events: none;
  position: absolute;
  will-change: opacity, transform;
}

.ventures-media-image {
  height: 112%;
  right: 0;
  object-fit: cover;
  position: absolute;
  top: -6%;
  width: 100%;
}

.ventures-credit {
  grid-column: 2;
  grid-row: 3;
  align-self: start;
  color: var(--muted);
  font-size: clamp(13px, 1.15vw, 20px);
  line-height: 1.2;
  margin: clamp(16px, 1.4vw, 28px) 0 0;
}

/* ── Index list ── */
.ventures-index-list {
  grid-column: 3;
  grid-row: 2;
  align-self: center;
  justify-self: start;
  display: grid;
  align-content: center;
  gap: clamp(6px, 0.6vw, 10px);
}

.ventures-index-item {
  align-items: baseline;
  background: transparent;
  border: 0;
  color: var(--muted);
  column-gap: 14px;
  cursor: pointer;
  display: grid;
  font: inherit;
  grid-template-columns: auto 1fr;
  padding: 0;
  text-align: left;
  transition: color 280ms ease;
}

.ventures-index-item.is-active {
  color: var(--ink);
}

.ventures-index-number,
.ventures-index-name {
  font-size: clamp(15px, 1.2vw, 22px);
  line-height: 1.2;
}

.ventures-index-item.is-active .ventures-index-number,
.ventures-index-item.is-active .ventures-index-name {
  font-weight: 700;
}

/* ── Detail panel ── */
.ventures-detail {
  grid-column: 3 / span 2;
  grid-row: 3;
  align-self: end;
  justify-self: start;
  margin-top: auto;
  max-width: 100%;
  width: 420px;
}

.ventures-detail p {
  font-size: clamp(15px, 1.25vw, 20px);
  line-height: 1.35;
  margin: 0;
}

/* ── Links ── */
.ventures-links {
  display: flex;
  gap: clamp(20px, 1.8vw, 32px);
  margin-top: clamp(22px, 2.2vw, 40px);
}

.ventures-links a {
  color: inherit;
  font-size: clamp(13px, 0.92vw, 16px);
  line-height: 1.2;
  position: relative;
  text-decoration: none;
  transition: color 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.ventures-links a::after {
  background: currentColor;
  bottom: -0.36em;
  content: '';
  height: 1px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 180ms ease;
  width: 100%;
}

.ventures-links a:hover,
.ventures-links a:focus-visible {
  transform: translateY(-1px);
}

.ventures-links a:hover::after,
.ventures-links a:focus-visible::after {
  transform: scaleX(1);
}

.ventures-links a:active {
  opacity: 0.68;
  transform: translateY(0);
}

/* ── Scroll hint ── */
.ventures-scroll-hint {
  bottom: clamp(24px, 3vh, 48px);
  left: 50%;
  opacity: 1;
  position: absolute;
  transform: translateX(-50%);
  transition: opacity 400ms ease;
}

.ventures-scroll-hint.is-hidden {
  opacity: 0;
}

.ventures-scroll-dot {
  animation: scroll-bounce 1.6s ease-in-out infinite;
  background: var(--ink);
  border-radius: 50%;
  display: block;
  height: 6px;
  opacity: 0.35;
  width: 6px;
}

@keyframes scroll-bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }
}

/* ── Responsive ── */
@media (max-width: 980px) {
  .ventures-section {
    height: 100vh;
  }

  .ventures-viewport {
    column-gap: 36px;
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr;
    padding-top: clamp(60px, 8vh, 80px);
    padding-bottom: clamp(30px, 4vh, 60px);
  }

  .ventures-media-frame {
    grid-column: 1;
    grid-row: 1;
    aspect-ratio: 1.2 / 0.7;
  }

  .ventures-index-list {
    grid-column: 1;
    grid-row: 2;
    margin-top: 28px;
  }

  .ventures-credit {
    grid-column: 1;
    grid-row: 3;
    margin-top: 16px;
  }

  .ventures-detail {
    grid-column: 1;
    grid-row: 4;
    max-width: 100%;
    align-self: start;
    margin-top: 28px;
  }
}

@media (max-width: 640px) {
  .ventures-viewport {
    padding-top: clamp(40px, 6vh, 60px);
  }

  .ventures-media-frame {
    aspect-ratio: 1.06 / 0.72;
  }

  .ventures-detail p {
    font-size: clamp(15px, 4.8vw, 22px);
  }

  .ventures-index-number,
  .ventures-index-name {
    font-size: clamp(16px, 5.6vw, 24px);
  }

  .ventures-links {
    flex-wrap: wrap;
    gap: 14px 24px;
  }
}
</style>
