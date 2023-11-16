<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">AI Dino Runner.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a
          class="btn"
          href="https://github.com/jlarminay/ai-dino-runner"
          target="_blank"
          >View GitHub.</a
        >
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          This was my attempt to build an AI to play the Google Dino Runner
          game. I eventually want to train an AI to play the game, but
          currently, it simply detects if there's an obstacle in front of it and
          jumps when needed. It's not very good, but it's a start.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/items/ai_dino_runner/ai_dino_runner-slide2.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          I build this using Python and Selenium. The code first launches the
          browser and start the game. A few times every second a screenshot is
          taken and analyzed to find obstacles. As stated, currently it only
          sees if an obstacle is in front of the dino to jump.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/items/ai_dino_runner/ai_dino_runner-slide3.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
