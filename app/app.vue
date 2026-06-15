<script setup lang="ts">
import { ref } from 'vue'
import SplashScreen from '~/components/SplashScreen.vue'

useSchemaOrg([
  defineOrganization({
    name: 'TheAlphaOnes',
    url: 'https://taohq.org',
    logo: '/favicon.ico'
  }),
  defineWebSite({
    name: 'TheAlphaOnes'
  })
])

defineOgImage('NuxtSeo', {
  theme: '#000000',
  colorMode: 'dark',
})

const { isDesktop } = useDevice()
const isSplashActive = ref(true)
</script>

<template>
  <div>
    <SplashScreen v-if="isSplashActive" @complete="isSplashActive = false" />
    <NuxtLayout :name="isDesktop ? 'default' : 'mobile'">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
