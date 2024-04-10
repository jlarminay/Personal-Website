<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Personal Website.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          Not much to say about this. This is my personal website. I always try to update or
          re-create my portfolio every few years to try new design trends or ideas.
        </p>
        <p>
          The site is built using Vue, Node and Tailwind and deployed to FullHost automatically
          using GitHub actions.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/personal_website/personal_website-slide1.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped></style>
