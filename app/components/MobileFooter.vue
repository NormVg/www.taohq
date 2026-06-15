<script setup lang="ts">
import { motion, useInView } from 'motion-v'
import { computed, ref } from 'vue'

const footerColumns = [
  {
    title: 'Projects',
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

const beliefWords = [
  { text: 'We', highlight: false },
  { text: 'believe', highlight: false },
  { text: 'software', highlight: false },
  { text: 'should', highlight: false },
  { text: 'feel', highlight: false },
  { text: 'understandable,', highlight: true },
  { text: 'durable,', highlight: false },
  { text: 'and', highlight: false },
  { text: 'calm.', highlight: false },
]

const footerRef = ref<HTMLElement | null>(null)
const isFooterVisible = useInView(footerRef, { once: false, amount: 0.1, margin: "0px 0px -10% 0px" })

const wordDelay = (i: number, highlight: boolean) => {
  if (highlight) return 0.1
  return 0.4 + i * 0.05
}

const beliefTransition = (i: number, highlight: boolean) => computed(() =>
  isFooterVisible.value
    ? { duration: 0.8, delay: wordDelay(i, highlight), ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.4, delay: 0, ease: [0.22, 1, 0.36, 1] }
)

const riserTransition = (n: number) => computed(() =>
  isFooterVisible.value
    ? { duration: 0.7, delay: 1.0 + (n - 1) * 0.08, ease: [0.22, 1, 0.36, 1] }
    : { duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }
)
</script>

<template>
  <footer id="contact" ref="footerRef" class="mobile-footer">
    <div class="footer-belief">
      <p aria-label="We believe software should feel understandable, durable, and calm.">
        <motion.span v-for="(word, i) in beliefWords" :key="i"
          style="display: inline-block; margin-right: 0.22em;"
          :initial="{ opacity: 0, y: 10, filter: 'blur(4px)' }"
          :animate="isFooterVisible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : { opacity: 0, y: 10, filter: 'blur(4px)' }"
          :transition="beliefTransition(i, word.highlight).value">{{ word.text }}</motion.span>
      </p>
    </div>

    <div class="footer-risers" aria-hidden="true">
      <motion.span v-for="n in 5" :key="n" :initial="{ scaleY: 0, transformOrigin: 'bottom' }"
        :animate="isFooterVisible ? { scaleY: 1 } : { scaleY: 0 }" :transition="riserTransition(n).value"
        style="transform-origin: bottom;" />
    </div>

    <div class="footer-main">
      <div class="footer-top">
        <div class="footer-brand">
          <p class="footer-wordmark">TheAlphaOnes</p>
          <p class="footer-desc">
            Independent software, systems, and digital products designed to feel calm under pressure.
          </p>
        </div>

        <div class="footer-link-groups">
          <div v-for="column in footerColumns" :key="column.title" class="footer-links">
            <h2>{{ column.title }}</h2>
            <a v-for="link in column.links" :key="link" href="#">{{ link }}</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>taohq.org</p>
          <p>TheAlphaOnes © 2024</p>
        </div>

        <ul class="social-links" aria-label="Social links">
          <li>
            <a aria-label="Discord" href="#">
              <svg width="18" height="14" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 1.492a19.84 19.84 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.32 18.32 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 1.492a.07.07 0 0 0-.032.027C.533 6.093-.32 10.555.099 14.961a.08.08 0 0 0 .031.055 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.442a.061.061 0 0 0-.031-.028zM8.02 12.278c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a aria-label="Twitter" href="#">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a aria-label="Email" href="#">
              <svg width="17" height="13" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 0H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 4-10 7L2 4V2l10 7 10-7v2z" fill="currentColor"/>
              </svg>
            </a>
          </li>
          <li>
            <a aria-label="GitHub" href="#">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" fill="currentColor"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.mobile-footer {
  margin-top: 80px;
}

.footer-belief {
  padding: 0 var(--page-gutter);
  margin-bottom: 32px;
}

.footer-belief p {
  font-size: clamp(24px, 6.5vw, 36px);
  line-height: 1.2;
  margin: 0;
  transform: translateY(-0.14em);
}

.footer-risers {
  display: grid;
  gap: 12px;
  margin-bottom: 24px;
  padding: 0 var(--page-gutter);
}

.footer-risers span {
  background: #000;
  display: block;
  margin: 0 auto;
  width: 100%;
}

.footer-risers span:nth-child(1) { height: 4px; }
.footer-risers span:nth-child(2) { height: 6px; }
.footer-risers span:nth-child(3) { height: 10px; }
.footer-risers span:nth-child(4) { height: 16px; }
.footer-risers span:nth-child(5) { height: 26px; }

.footer-main {
  background: #000;
  color: #fff;
  padding: 40px var(--page-gutter) 32px;
}

.footer-top {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer-wordmark {
  font-family: Italianno, cursive;
  font-size: 48px;
  line-height: 0.8;
  margin: 0;
}

.footer-desc {
  color: rgb(255 255 255 / 60%);
  font-size: 16px;
  line-height: 1.4;
  margin: 16px 0 0;
}

.footer-link-groups {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links h2 {
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 4px;
}

.footer-links a {
  color: rgb(255 255 255 / 56%);
  font-size: 15px;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid rgb(255 255 255 / 14%);
  margin-top: 40px;
  padding-top: 24px;
}

.footer-copyright {
  color: rgb(255 255 255 / 55%);
}

.footer-copyright p {
  font-size: 13px;
  margin: 0;
}

.footer-copyright p + p {
  margin-top: 8px;
}

.social-links {
  display: flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.social-links a {
  align-items: center;
  background: rgb(255 255 255 / 13%);
  border-radius: 50%;
  display: flex;
  height: 36px;
  justify-content: center;
  width: 36px;
  color: inherit;
}
</style>
