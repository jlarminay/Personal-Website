<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Lu'ma Native Housing Society.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>

    <div class="mt-16 items-start gap-10 md:flex">
      <div>
        <h3>About.</h3>
        <p>This is where a description will go.</p>
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/_placeholders/384x216.svg',
          '/images/portfolio/_placeholders/800x400.svg',
          '/images/portfolio/_placeholders/400x600.svg',
          '/images/portfolio/_placeholders/600x400.svg',
          '/images/portfolio/_placeholders/600x700.svg',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
