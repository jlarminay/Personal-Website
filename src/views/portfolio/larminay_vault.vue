<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Larminay Vault.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          I've always been fascinated with media archival such as
          <a
            href="https://en.wikipedia.org/wiki/Dawson_City:_Frozen_Time"
            target="_blank"
            >Dawson City: Frozen Time</a
          >,
          <a
            href="https://en.wikipedia.org/wiki/Finding_Vivian_Maier"
            target="_blank"
            >Finding Vivian Maier</a
          >
          and
          <a
            href="https://en.wikipedia.org/wiki/They_Shall_Not_Grow_Old"
            target="_blank"
            >They Shall Not Grow Old</a
          >
          as some recent examples. When I discovered my Grandma had a collection
          of old 16mm film and VHS tapes, I decided to try my hand at archiving
          them digitally.
        </p>
        <p>
          After I started the process, I needed a way to share my video with
          family. I was originally planning on distributing USBs to my local
          family, but that had some challenges itself. I decided upon creating a
          Youtube-like clone to allow everyone to view the videos from anywhere
          worldwide. One benefit was this allowed my family in France to view
          the videos as well.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/portfolio/larminay_vault/larminay_vault-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          This project was built using a basic LAMP stack (Linux, Apache, MySQL,
          PHP). I started this before I had a lot of knowledge of frameworks so
          it was built using vanilla PHP and Bootstrap. The site has user
          authentication and allow/disallow lists for specific videos allowing
          me to control who can see what.
        </p>
        <p>
          I really want to revisit this project in the future using proper
          frameworks and web practices. The main addition I want is better
          mobile support and the ability for users to upload their own videos.
          The next thing would be to allow the app to save images and documents.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/portfolio/larminay_vault/larminay_vault-slide2.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
