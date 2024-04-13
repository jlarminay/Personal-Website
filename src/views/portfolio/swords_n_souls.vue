<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Swords n Souls.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn" href="https://github.com/jlarminay/Swords-n-Souls" target="_blank">
          View GitHub.
        </a>
        <a class="btn" href="https://jlarminay.itch.io/swords-n-souls" target="_blank">
          View project.
        </a>
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div class="md:w-3/5">
        <h3>Details.</h3>
        <p>
          This project was made for the
          <a href="https://itch.io/jam/mini-jam-70-heaven" target="_blank">Mini Jam 70</a>. The
          theme was 'heaven' and the limitation was 'player must be an inanimate object'. This was
          my first time created a game, so I didn't really know what to expect.
        </p>
        <p>
          I decided to use the Godot engine as I have been prototyping with it for a little bit and
          it seemed like an easy engine to start using.
        </p>
      </div>

      <!-- image -->
      <div class="md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/swords_n_souls/slide1.webp"
        />
      </div>
    </div>

    <div class="mt-16 flex gap-10 justify-end">
      <!-- text -->
      <div class="md:w-4/5">
        <p>
          I ended up placing 5th overall and had a great time! I'm looking forward to participating
          in more game jams in the future. After the project was finished, I wrote a
          <a
            href="https://jlarminay.itch.io/swords-n-souls/devlog/208114/behind-the-scenes"
            target="_blank"
          >
            Behind the Scenes
          </a>
          and a
          <a
            href="https://jlarminay.itch.io/swords-n-souls/devlog/210289/post-mortem"
            target="_blank"
          >
            Postmortem
          </a>
          which can be read on the game page.
        </p>
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/swords_n_souls/slide2.webp',
          '/images/portfolio/swords_n_souls/slide3.webp',
          '/images/portfolio/swords_n_souls/slide4.webp',
          '/images/portfolio/swords_n_souls/slide5.webp',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
