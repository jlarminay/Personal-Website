<template>
  <article class="p-5">
    <div class="flex items-center justify-between">
      <h1 class="mb-0">Personal Website.</h1>
      <div>
        <a class="btn ml-5 hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn ml-5 hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 flex items-start gap-10">
      <div class="w-3/5">
        <h3>About.</h3>
        <p>
          Not much to say about this. This is my personal website. I always try
          to update or re-create my portoflio every few years to saty up to
          date.
        </p>
      </div>
      <div class="aspect-video w-2/5">
        <img
          class="h-full w-full object-contain"
          src="@/assets/portfolio/personal_website/personal_website-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 flex items-start gap-10">
      <div class="aspect-video w-2/5">
        <img
          class="h-full w-full object-contain"
          src="@/assets/portfolio/personal_website/personal_website-slide2.webp"
        />
      </div>
      <div class="w-3/5">
        <h3>Development.</h3>
        <p>
          This site is using Vue and Tailwind as a base. I'm using GitHub
          Actions to deploy the built website to Fullhost. I decided to go with
          a dark theme as default this time.
        </p>
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
