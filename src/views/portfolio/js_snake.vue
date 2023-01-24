<template>
  <article class="p-5">
    <div class="items-center justify-between text-center md:flex md:text-left">
      <h1 class="mb-0">JS Snake.</h1>
      <div class="my-6 md:my-0">
        <a
          class="btn ml-5"
          href="https://github.com/jlarminay/js-snake-game"
          target="_blank"
          >View GitHub.</a
        >
        <a
          class="btn ml-5"
          href="https://projects.joshlarminay.com/js-snake/"
          target="_blank"
          >View project.</a
        >
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          My company was invited to a youth-focused event as an exhibitor, and
          we wanted a cool project to get youth excited about computer science.
          We decided upon showing Battle Snake, but as that required strong
          internet, we needed an offline version. As an experiment, I decided to
          recreate a small version of it in JS.
        </p>
        <p>
          Unfortunately, it wouldn't have been possible for the attendants to
          code their own snakes, but at least it showed the concept.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/js_snake/js_snake-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          The project was based off BattleSnake, so the idea was for the snake
          to have a time limit to get food, or they will die. I implemented a
          simple A* pathfinding library to allow the snake to find the closest
          food when they got hungry enough. I'm displaying the board by creating
          a table and colouring cells to the correct item. I should have done it
          with canvas items, but it was a proof of concept and I didn't know
          canvas that well at the time.
        </p>
        <p>
          Initially I was planning on just having the computer play itself, but
          I decided to add the ability for a human player.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/js_snake/js_snake-slide2.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
