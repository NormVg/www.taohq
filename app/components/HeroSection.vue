<template>
  <section id="top" class="hero-section" aria-labelledby="hero-title">
    <h1 id="hero-title">
      Building thoughtful<br>
      software, systems, and<br>
      digital products.
    </h1>
    <div class="hero-actions" aria-label="Hero actions">
      <a class="hero-link hero-link-primary" href="#ventures">Explore ventures</a>
      <a class="hero-link" href="#about">View organization</a>
    </div>
    <a class="hero-media" href="#about" aria-label="Jump to about TheAlphaOnes">
      <img
        class="hero-image"
        src="/figma/hero-mask-image.png"
        alt="Black and white group working around computers"
      >
    </a>
    <p class="intro-copy">
      TheAlphaOnes is an independent umbrella organisation behind developer tools, software
      products, and experimental systems.
    </p>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: clamp(47px, 4.42vw, 76px);
}

.hero-section h1 {
  font-size: clamp(47px, 7.12vw, 123px);
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.034;
  margin: 0;
}

.hero-actions {
  display: flex;
  gap: clamp(18px, 1.64vw, 28px);
  margin-top: clamp(29px, 2.76vw, 48px);
  padding: 0 var(--page-gutter);
}

.hero-link {
  align-items: center;
  border-bottom: 1px solid currentColor;
  color: var(--muted);
  display: inline-flex;
  font-size: clamp(14px, 1.04vw, 18px);
  line-height: 1.2;
  min-height: 34px;
  text-decoration: none;
  transition: color 180ms ease, opacity 180ms ease, transform 180ms ease;
}

.hero-link-primary {
  color: var(--ink);
}

.hero-link:hover,
.hero-link:focus-visible {
  color: var(--ink);
  transform: translateY(-2px);
}

.hero-link:active {
  opacity: 0.68;
  transform: translateY(0);
}

.hero-media {
  aspect-ratio: 1733 / 735;
  border-radius: 5px;
  display: block;
  margin-top: clamp(47px, 4.42vw, 76px);
  overflow: hidden;
  text-decoration: none;
}

.hero-image {
  display: block;
  height: 100%;
  object-fit: cover;
  transition: filter 220ms ease, transform 420ms ease;
  width: 100%;
}

.hero-media:hover .hero-image,
.hero-media:focus-visible .hero-image {
  filter: contrast(1.08);
  transform: scale(1.018);
}

.hero-media:active .hero-image {
  transform: scale(1.006);
}

.intro-copy {
  font-size: clamp(18px, 2.05vw, 36px);
  line-height: 1.15;
  margin: clamp(42px, 3.85vw, 66px) var(--page-gutter) 0;
  max-width: 700px;
}

@media (max-width: 780px) {
  .hero-section h1 {
    font-size: clamp(42px, 12vw, 76px);
  }
}

@media (max-width: 520px) {
  .hero-section {
    padding-top: 47px;
  }

  .hero-actions {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
