<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Cell Simulator.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a
          class="btn"
          href="https://github.com/jlarminay/cell-simulator"
          target="_blank"
          >View GitHub.</a
        >
        <a
          class="btn"
          href="https://projects.joshlarminay.com/cell-simulator/"
          target="_blank"
          >View project.</a
        >
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          Honestly, there isn't much to this project. My goal was to create a
          simulation similar to
          <a
            href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life"
            target="_blank"
            >Conway's Game of Life</a
          >. I wanted the cells to have stats that determined if they can take
          over another cell. While the cell stats feature technically exists,
          the balancing is terrible, so I set everything to one by default.
        </p>
        <p>
          As the project stands right now, the cells randomly pick a direction
          to move into. While there isn't any detailed AI or anything, this is
          still a fun project to look at and try to predict who will win.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/portfolio/cell_simulator/cell_simulator-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          This project is very simplistic for code. Primarily built using JS,
          each tick, each cell randomly picks a direction to move into and that
          cell is updated to the correct colour.
        </p>
        <p>
          After the initial project was finished, I decided to create a small
          editor that allows me to create maps with set spawn points and
          impassible walls. It also allowed me to edit each team's stats.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/portfolio/cell_simulator/cell_simulator-slide2.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
