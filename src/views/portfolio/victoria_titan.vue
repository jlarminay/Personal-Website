<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Victoria Titan.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          This project is a website for a local video game tournament that took place in 2018. While
          this is a rather simple single-page website, it was one of the first ones I did for an
          actual client.
        </p>
        <p>
          This is a pure HTML/CSS/JS website with very little extra flares. It needed to be small,
          mobile friendly and done quickly, so given the circumstances and that it was my first real
          site, I'm very happy with the final product.
        </p>
      </div>
      <!-- image -->
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/victoria_titan/slide1.webp"
        />
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/victoria_titan/slide3.webp',
          '/images/portfolio/victoria_titan/slide4.webp',
          '/images/portfolio/victoria_titan/slide2.webp',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
