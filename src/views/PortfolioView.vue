<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import AllProjects from '@/assets/portfolioProjects.ts';

const timerInterval = ref<any>(null);

onMounted(() => {
  // on screen update, detect image rows
  detectImageRows();
  window.addEventListener(
    'resize',
    function (_event) {
      detectImageRows();
    },
    true,
  );
  // every 500ms, detect image rows
  timerInterval.value = setInterval(() => {
    detectImageRows();
  }, 500);
});
onUnmounted(() => {
  clearInterval(timerInterval.value);
});

function detectImageRows() {
  const container = document.getElementById('gallery');
  if (!container) return [];

  const allImages = Array.from(container.querySelectorAll('a'));

  let previousX = 0;
  let allRows = [];
  let currentRow = [] as any[];

  // reset position of all images
  allImages.forEach((item) => {
    item.style.width = 'auto';
  });

  // get all images and sort them into rows
  allImages.forEach((item) => {
    // get current image top position
    const x = item.offsetTop;

    // check if current image is on a new row
    if (x !== previousX) {
      // check if not first row
      if (previousX !== 0) {
        allRows.push(currentRow);
      }
      // reset current row
      previousX = x;
      currentRow = [];
    }
    // push image to current row
    currentRow.push(item);
  });
  // push final row
  allRows.push(currentRow);

  // calculate each row width items
  allRows.forEach((row) => {
    let totalWidth = 0;
    let gap = 10;

    // find total row width
    row.forEach((item) => {
      // add item width
      totalWidth += item.offsetWidth;
    });
    // add gap width
    totalWidth += gap * (row.length - 1);

    // set each item width
    row.forEach((item) => {
      // set width to be correct percentage
      let newWidth = (item.offsetWidth / totalWidth) * 100;
      item.style.width = newWidth === 0 ? 'auto' : `${newWidth}%`;
    });
  });
}
detectImageRows();
</script>

<template>
  <section class="p-5">
    <h1>Cool projects I've done.</h1>
    <p>
      Here are some projects I've worked on in the past. Some are ongoing, some I did at work and
      some and simply because I liked the idea of it.
    </p>
    <p>
      More projects can be found on my
      <a href="https://github.com/jlarminay" target="_blank">GitHub</a> or
      <a href="https://jlarminay.itch.io/" target="_blank">itch.io</a>.
    </p>

    <div id="gallery" class="flex flex-wrap justify-between gap-[10px]">
      <router-link
        v-for="(project, i) in AllProjects"
        :key="i"
        :to="{ name: 'Portfolio/' + project.id }"
        class="before:hidden overflow-hidden h-[200px] group"
      >
        <img
          :src="'/images/portfolio/' + project.poster"
          class="object-cover h-full w-full group-hover:scale-105 transition group"
        />

        <div
          class="truncate pointer-events-none w-full absolute bottom-0 m-0 px-3 py-2 text-xl text-white transition-all group-hover:pb-4 bg-black bg-opacity-50 group-hover:bg-opacity-80"
        >
          {{ project.name }}
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped></style>
