<script setup>
import Menu from '@/components/singles/Menu.vue'
import Footer from '@/components/singles/Footer.vue'
</script>

<template>
  <Menu />
  <main class="grow p-0 md:p-5">
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view> -->
    <router-view />
  </main>
  <Footer />
</template>

<style scoped lang="postcss"></style>
