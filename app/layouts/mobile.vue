<template>
  <div class="site-shell mobile-shell">
    <MobileHeader />
    <slot />
    <MobileFooter />
  </div>
</template>

<style scoped>
.mobile-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
