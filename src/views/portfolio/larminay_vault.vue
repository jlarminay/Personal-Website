<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Larminay Vault.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="https://github.com/jlarminay/Larminay-Vault" target="_blank">
          View GitHub.
        </a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          I've always been fascinated with media archival such as
          <a href="https://en.wikipedia.org/wiki/Dawson_City:_Frozen_Time" target="_blank"
            >Dawson City: Frozen Time</a
          >,
          <a href="https://en.wikipedia.org/wiki/Finding_Vivian_Maier" target="_blank"
            >Finding Vivian Maier</a
          >
          and
          <a href="https://en.wikipedia.org/wiki/They_Shall_Not_Grow_Old" target="_blank"
            >They Shall Not Grow Old</a
          >
          as some recent examples. When I discovered my Grandma had a collection of old 16mm film
          and VHS tapes, I decided to try my hand at archiving them digitally.
        </p>
        <p>
          After I started the process, I needed a way to share my video with family. I was
          originally planning on distributing USBs to my local family, but that had some challenges
          itself. I decided upon creating a Youtube-like clone to allow everyone to view the videos
          from anywhere worldwide. One benefit was this allowed my family in France to view the
          videos as well.
        </p>
      </div>
      <!-- image -->
      <div class="md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/larminay_vault/slide3.webp"
        />
      </div>
    </div>

    <div class="mt-16 items-start gap-10 md:flex">
      <!-- text -->
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          The main goal of this project was to make a self-hosted YouTube clone that would allow me
          to easily upload and manage videos.
        </p>
        <p>
          Some of the tools I used to build this project are: Nuxt3, PostgreSQL, Prisma, FFMPEG,
          tRPC, Next-Auth.
        </p>
      </div>
      <!-- image -->
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/larminay_vault/slide8.webp"
        />
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/larminay_vault/slide1.webp',
          '/images/portfolio/larminay_vault/slide5.webp',
          '/images/portfolio/larminay_vault/slide2.webp',
          '/images/portfolio/larminay_vault/slide7.webp',
          '/images/portfolio/larminay_vault/slide4.webp',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
