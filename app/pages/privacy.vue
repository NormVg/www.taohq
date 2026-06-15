<script setup lang="ts">
useHead({
  title: 'Privacy Policy - TheAlphaOnes',
})
</script>

<template>
  <main class="legal-page">
    <div class="legal-container">
      <h1>Privacy Policy</h1>
      <p class="last-updated">Last Updated: June 15, 2026</p>
      
      <section>
        <h2>1. Introduction</h2>
        <p>At TheAlphaOnes, we believe software should be calm and respect your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our products and services.</p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <p>We practice data minimization and only collect what is strictly necessary to provide and improve our services. This includes:</p>
        <ul>
          <li><strong>Account Information:</strong> When you register, we collect basic details like your name and email address.</li>
          <li><strong>Usage Data:</strong> We collect anonymous, aggregated data on how you interact with our products to help us refine the user experience.</li>
          <li><strong>Communication Data:</strong> Information you provide when contacting support or providing feedback.</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <p>Your data is used exclusively to:</p>
        <ul>
          <li>Provide, maintain, and improve our calm infrastructure.</li>
          <li>Communicate with you regarding account updates, security notices, and support.</li>
          <li>Ensure the security and integrity of our systems.</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Sharing and Disclosure</h2>
        <p>We do not sell your personal data. We only share information with trusted third-party service providers who assist us in operating our infrastructure, and only under strict confidentiality agreements. We may also disclose data if required by law.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal information at any time. If you wish to exercise these rights, please contact our privacy team.</p>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please reach out to us at privacy@taohq.org.</p>
      </section>
    </div>
  </main>
</template>

<style scoped>
.legal-page {
  padding: calc(160px + var(--page-gutter)) var(--page-gutter) 120px;
  background: var(--paper);
  color: var(--ink);
  min-height: 100vh;
}

@media (max-width: 780px) {
  .legal-page {
    padding-top: calc(100px + var(--page-gutter));
  }
}

.legal-container {
  max-width: 680px;
  margin: 0 auto;
}

h1 {
  font-size: clamp(36px, 5vw, 48px);
  font-weight: 500;
  letter-spacing: -0.02em;
  margin: 0 0 16px;
}

.last-updated {
  color: var(--muted);
  font-size: 14px;
  margin-bottom: 64px;
}

section {
  margin-bottom: 48px;
}

h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 16px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  color: rgb(0 0 0 / 80%);
  margin: 0 0 16px;
}

ul {
  font-size: 16px;
  line-height: 1.6;
  color: rgb(0 0 0 / 80%);
  padding-left: 20px;
  margin: 0 0 16px;
}

li {
  margin-bottom: 8px;
}
</style>
