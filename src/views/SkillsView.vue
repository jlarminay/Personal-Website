<script setup lang="ts">
import { ref } from 'vue'

let icons = ref([
  'vuejs',
  'python',
  'godot',
  'raspberrypi',
  'digitalocean',
  'docker',
  'nginx',
  'nodejs',
  'php',
  'postgresql',
  'cordova',
])
</script>

<template>
  <section>
    <div class="image">
      <img src="@/assets/josh-point.png" class="w-full" />
    </div>
    <div class="text">
      <h1>Some of my skills.</h1>
      <h2>My favorite languages and tools.</h2>
      <div class="logo-holder">
        <img
          v-for="(icon, index) in icons"
          :key="index"
          class="logo"
          :src="'assets/logos/' + icon + '.svg'"
          :alt="icon"
          :title="icon"
        />
      </div>

      <h2>What I'm up to?</h2>
      <ul>
        <li>
          Learning mobile development with
          <a href="https://cordova.apache.org/" target="_blank">Cordova</a> and
          <a href="https://flutter.dev/" target="_blank">Flutter</a>.
        </li>
        <li>
          I want to make more games with
          <a href="https://godotengine.org/" target="_blank">Godot</a>.
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply flex justify-center;

  .image {
    @apply p-10 w-[350px];
  }

  .text {
    @apply p-5 w-[650px];

    .logo-holder {
      @apply mb-7 flex justify-start flex-wrap;

      .logo {
        @apply w-[75px] m-3;
      }
    }
  }
}

ul {
  @apply list-disc ml-6;

  li {
    @apply mb-2;
  }
}
</style>
