<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Guess The Movie.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn" href="https://github.com/jlarminay/Guess-The-Movie" target="_blank">
          View GitHub.
        </a>
        <a class="btn" href="https://projects.joshlarminay.com/movies/home" target="_blank">
          View project.
        </a>
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div>
        <h3>About.</h3>
        <p>
          This was a very simple recreation of
          <a href="https://framed.wtf/" target="_blank">Framed</a>.
        </p>
        <p>
          I built this using Vue 3 and most of the photos were gotten myself or from
          <a href="https://film-grab.com/" target="_blank">Film-Grab</a>.
        </p>
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/guess_the_movie/slide3.webp',
          '/images/portfolio/guess_the_movie/slide2.webp',
          '/images/portfolio/guess_the_movie/slide1.webp',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
