<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const footerColumns = [
  {
    title: 'Ventures',
    links: ['Products', 'Developer Tools', 'Experiments', 'Research'],
  },
  {
    title: 'Company',
    links: ['About', 'Organization', 'Contact', 'Updates'],
  },
  {
    title: 'Connect',
    links: ['Discord', 'Twitter', 'Email', 'GitHub'],
  },
]

const socialLinks = [
  { label: 'Discord', icon: '/figma/discord.svg' },
  { label: 'Twitter', icon: '/figma/twitter.svg' },
  { label: 'Email', icon: '/figma/email.svg' },
  { label: 'GitHub', icon: '/figma/github.svg' },
]

// Split the belief sentence into tagged word objects
// Words marked highlight: true get an underline and reveal first
const beliefWords = [
  { text: 'We', highlight: false },
  { text: 'believe', highlight: false },
  { text: 'software', highlight: false },
  { text: 'should', highlight: false },
  { text: 'feel', highlight: false },
  { text: 'understandable,', highlight: true },  // reveals first
  { text: 'durable,', highlight: false },
  { text: 'and', highlight: false },
  { text: 'calm.', highlight: false },
]

const footerRef = ref<HTMLElement | null>(null)
const isFooterVisible = useInView(footerRef, { once: true, amount: 0.1 })

// Stagger delays: highlighted word first (delay 0), rest after (delay 0.6+)
const wordDelay = (i: number, highlight: boolean) => {
  if (highlight) return 0.1
  // words before the highlight index
  if (i < 5) return 0.7 + i * 0.05
  // words after the highlight
  return 0.8 + i * 0.05
}
</script>

<template>
  <footer id="contact" ref="footerRef" class="site-footer">
    <!-- Act 1: Belief statement — word by word with underlined keyword first -->
    <div class="footer-belief">
      <p
        aria-label="We believe software should feel understandable, durable, and calm."
      >
        <motion.span
          v-for="(word, i) in beliefWords"
          :key="i"
          :class="{ 'belief-highlight': word.highlight }"
          style="display: inline-block; margin-right: 0.22em;"
          :initial="{ opacity: 0, y: word.highlight ? 18 : 10, filter: word.highlight ? 'blur(4px)' : 'blur(0px)' }"
          :animate="isFooterVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}"
          :transition="{ duration: word.highlight ? 1.2 : 0.9, delay: wordDelay(i, word.highlight), ease: [0.22, 1, 0.36, 1] }"
        >{{ word.text }}</motion.span>
      </p>
    </div>

    <!-- Act 2: Riser bars grow bottom-up sequentially -->
    <div class="footer-risers" aria-hidden="true">
      <motion.span
        v-for="n in 5"
        :key="n"
        :initial="{ scaleY: 0, transformOrigin: 'bottom' }"
        :animate="isFooterVisible ? { scaleY: 1 } : {}"
        :transition="{ duration: 0.7, delay: 1.4 + (n - 1) * 0.08, ease: [0.22, 1, 0.36, 1] }"
        style="transform-origin: bottom;"
      />
    </div>

    <!-- Act 3: Main footer content -->
    <div class="footer-main">
      <div class="footer-top">
        <div class="footer-brand">
          <!-- Wordmark blurs in -->
          <motion.p
            class="footer-wordmark"
            :initial="{ opacity: 0, filter: 'blur(6px)' }"
            :animate="isFooterVisible ? { opacity: 1, filter: 'blur(0px)' } : {}"
            :transition="{ duration: 1.2, delay: 1.8, ease: [0.22, 1, 0.36, 1] }"
          >TheAlphaOnes</motion.p>
          <!-- Brand copy static — already anchors the layout -->
          <p>
            Independent software, systems, and digital products designed to feel calm under
            pressure.
          </p>
        </div>

        <!-- Link columns slide up staggered -->
        <div class="footer-link-groups">
          <motion.div
            v-for="(column, ci) in footerColumns"
            :key="column.title"
            class="footer-links"
            :initial="{ opacity: 0, y: 20 }"
            :animate="isFooterVisible ? { opacity: 1, y: 0 } : {}"
            :transition="{ duration: 1, delay: 2.0 + ci * 0.15, ease: [0.22, 1, 0.36, 1] }"
          >
            <h2>{{ column.title }}</h2>
            <a v-for="link in column.links" :key="link" href="#">{{ link }}</a>
          </motion.div>
        </div>
      </div>

      <!-- Bottom bar: static -->
      <div class="footer-bottom">
        <div>
          <p>taohq.org</p>
          <p>TheAlphaOnes © 2024</p>
        </div>

        <ul class="social-links" aria-label="Social links">
          <li v-for="social in socialLinks" :key="social.label">
            <a :aria-label="social.label" href="#">
              <img :src="social.icon" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  margin-top: clamp(100px, 12vw, 200px);
  position: relative;
}

.footer-belief {
  padding: 0 var(--page-gutter);
}

.footer-belief p {
  font-size: clamp(36px, 5.62vw, 97.08px);
  line-height: 0.88;
  margin: 0 auto;
  max-width: 1728px;
  text-align: center;
  transform: translateY(-0.14em); /* Raised so underline clears the first bar */
}

.belief-highlight {
  /* Underline removed — animation timing still driven by this class */
}

.footer-risers {
  display: grid;
  gap: clamp(16px, 1.85vw, 32px);
  margin-bottom: clamp(26px, 3vw, 52px);
}

.footer-risers span {
  background: #000;
  display: block;
  margin: 0 auto;
  width: 100%;
}

.footer-risers span:nth-child(1) {
  border-radius: 0;
  height: clamp(5px, 0.49vw, 8px);
}

.footer-risers span:nth-child(2) {
  border-radius: 0;
  height: clamp(8px, 0.79vw, 13px);
}

.footer-risers span:nth-child(3) {
  border-radius: 0;
  height: clamp(13px, 1.27vw, 21px);
}

.footer-risers span:nth-child(4) {
  border-radius: 0;
  height: clamp(21px, 2.06vw, 34px);
}

.footer-risers span:nth-child(5) {
  border-radius: 0;
  height: clamp(34px, 3.33vw, 55px);
}

.footer-main {
  background: #000;
  border-radius: 0;
  color: #fff;
  padding: clamp(36px, 4.05vw, 70px) var(--page-gutter) clamp(30px, 3.2vw, 55px);
}

.footer-top,
.footer-bottom {
  align-items: start;
  display: grid;
  gap: clamp(44px, 6.3vw, 109px);
  grid-template-columns: minmax(440px, 1.618fr) minmax(460px, 1fr);
}

.footer-brand {
  max-width: 820px;
}

.footer-wordmark {
  font-family: Italianno, cursive;
  font-size: clamp(48px, 4.25vw, 73px);
  font-weight: 400;
  line-height: 0.72;
  margin: 0;
  text-decoration: none;
  white-space: nowrap;
}

.footer-brand > p:not(.footer-wordmark) {
  color: rgb(255 255 255 / 60%);
  font-size: clamp(16px, 1.46vw, 25px);
  line-height: 1.18;
  margin: clamp(30px, 2.63vw, 45px) 0 0;
  max-width: 610px;
}

.footer-link-groups {
  display: grid;
  gap: clamp(28px, 3.9vw, 68px);
  grid-template-columns: repeat(3, minmax(118px, 1fr));
}

.footer-links {
  display: grid;
  gap: clamp(10px, 0.94vw, 16px);
}

.footer-links h2,
.footer-links a {
  font-size: clamp(14px, 1.04vw, 18px);
  line-height: 1.2;
  margin: 0;
  text-decoration: none;
}

.footer-links h2 {
  font-weight: 500;
  margin-bottom: clamp(6px, 0.58vw, 10px);
}

.footer-links a {
  color: rgb(255 255 255 / 56%);
  transition: color 160ms ease, transform 160ms ease;
}

.footer-links a:hover,
.footer-links a:focus-visible {
  color: #fff;
  transform: translateX(3px);
}

.footer-links a:active {
  transform: translateX(1px);
}

.footer-bottom {
  align-items: end;
  border-top: 1px solid rgb(255 255 255 / 14%);
  color: rgb(255 255 255 / 55%);
  margin-top: clamp(44px, 4.05vw, 70px);
  padding-top: clamp(27px, 2.5vw, 43px);
}

.footer-bottom p {
  font-size: clamp(13px, 1vw, 17.23px);
  line-height: 1.2;
  margin: 0;
}

.footer-bottom p + p {
  margin-top: 9px;
}

.social-links {
  display: flex;
  gap: clamp(10px, 0.94vw, 16px);
  justify-content: end;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-links a {
  align-items: center;
  background: rgb(255 255 255 / 13%);
  border-radius: 50%;
  display: flex;
  height: clamp(32px, 2.08vw, 36px);
  justify-content: center;
  transition: background 160ms ease, transform 160ms ease;
  width: clamp(32px, 2.08vw, 36px);
}

.social-links a:hover,
.social-links a:focus-visible {
  background: rgb(255 255 255 / 23%);
  transform: translateY(-2px);
}

.social-links a:active {
  transform: translateY(0);
}

.social-links img {
  max-height: 62%;
  max-width: 62%;
}

@media (max-width: 780px) {
  .footer-top,
  .footer-bottom {
    grid-template-columns: 1fr;
  }

  .footer-link-groups {
    gap: 28px;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 48px;
  }

  .footer-bottom {
    align-items: start;
  }

  .social-links {
    justify-content: start;
  }
}

@media (max-width: 520px) {
  .footer-link-groups {
    grid-template-columns: 1fr;
  }

  .social-links a {
    height: 34px;
    width: 34px;
  }
}
</style>
