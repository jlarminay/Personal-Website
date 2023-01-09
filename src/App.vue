<script setup lang="ts">
import Menu from '@/components/singles/Menu.vue'
import Footer from '@/components/singles/Footer.vue'
</script>

<template>
  <Menu />
  <main>
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </main>
  <Footer />
</template>

<style scoped lang="postcss">
main {
  @apply p-5 grow;
}
</style>
