<script setup lang="ts">
useHead({
  title: 'Terms and Conditions - TheAlphaOnes',
})
</script>

<template>
  <main class="legal-page">
    <div class="legal-container">
      <h1>Terms and Conditions</h1>
      <p class="last-updated">Last Updated: June 15, 2026</p>
      
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing or using the products, services, and infrastructure provided by TheAlphaOnes, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
      </section>

      <section>
        <h2>2. Use of Services</h2>
        <p>Our products are designed to provide calm, reliable infrastructure. You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the services.</p>
      </section>

      <section>
        <h2>3. Intellectual Property</h2>
        <p>All content, design, code, and intellectual property associated with TheAlphaOnes are owned by or licensed to us. You may not reproduce, distribute, or create derivative works without our explicit written permission.</p>
      </section>

      <section>
        <h2>4. Disclaimer of Warranties</h2>
        <p>Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the services will be uninterrupted or error-free.</p>
      </section>

      <section>
        <h2>5. Limitation of Liability</h2>
        <p>In no event shall TheAlphaOnes be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services.</p>
      </section>

      <section>
        <h2>6. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of our services following any changes constitutes your acceptance of the new Terms and Conditions.</p>
      </section>

      <section>
        <h2>7. Contact</h2>
        <p>If you have any questions about these Terms, please contact us at legal@taohq.org.</p>
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
</style>
