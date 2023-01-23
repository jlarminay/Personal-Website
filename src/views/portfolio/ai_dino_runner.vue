<template>
  <article class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="mb-0">AI Dino Runner.</h1>
      <div>
        <a
          class="btn ml-5"
          href="https://github.com/jlarminay/ai-dino-runner"
          target="_blank"
          >View GitHub.</a
        >
        <a class="btn ml-5 hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 flex items-start gap-10">
      <div class="w-3/5">
        <h3>About.</h3>
        <p>
          This was my attempt to build an AI to play the Google Dino Runner
          game. I eventually want to train an AI to play the game, but
          currently, it simply detects if there's an obstacle in front of it and
          jumps when needed. It's not very good, but it's a start.
        </p>
      </div>
      <div class="aspect-video w-2/5">
        <img
          class="h-full w-full object-contain"
          src="../../assets/portfolio/ai_dino_runner/ai_dino_runner-slide2.webp"
        />
      </div>
    </div>
    <div class="mt-16 flex items-start gap-10">
      <div class="aspect-video w-2/5">
        <img
          class="h-full w-full object-contain"
          src="../../assets/portfolio/ai_dino_runner/ai_dino_runner-slide3.webp"
        />
      </div>
      <div class="w-3/5">
        <h3>Development.</h3>
        <p>
          I build this using Python and Selenium. I start by launching the
          browser and grabbing some screenshots. Then I look for all obstacles
          and figure out their distance from the Dino. From there I can
          determine when to jump.
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
