<template>
  <article class="p-5">
    <div class="items-center justify-between text-center md:flex md:text-left">
      <h1 class="mb-0">Arcade Machine.</h1>
      <div class="my-6 md:my-0">
        <a class="btn ml-5 hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn ml-5 hidden" href="" target="_blank">View project.</a>
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          In 2021 I decided to fufill a life long dream of owning an arcade
          machine. I started looking around and eventually found one for sale in
          Vancouver.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          This site is using Vue and Tailwind as a base. I'm using GitHub
          Actions to deploy the built website to Fullhost. I decided to go with
          a dark theme as default this time.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide4.webp"
        />
      </div>
    </div>
    <div class="mt-16">
      <h3>Gallery.</h3>
      <div class="flex items-start gap-2 md:gap-10">
        <img
          class="h-full w-full object-cover"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide5.webp"
        />
        <img
          class="h-full w-full object-cover"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide2.webp"
        />
        <img
          class="h-full w-full object-contain"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide7.webp"
        />
        <img
          class="h-full w-full object-contain"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide9.webp"
        />
        <img
          class="h-full w-full object-contain"
          src="../../assets/portfolio/arcade_machine/arcade_machine-slide10.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
