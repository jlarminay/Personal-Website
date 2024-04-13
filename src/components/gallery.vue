<script setup lang="ts">
import { ref, PropType, onMounted, onUnmounted } from 'vue';

defineProps({
  images: {
    type: Array as PropType<string[]>,
    required: true,
  },
});
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

  const allImages = Array.from(container.querySelectorAll('article'));

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

// lightbox
const showLightbox = ref(false);
const lightboxImage = ref('');
</script>

<template>
  <div>
    <h3>Gallery.</h3>

    <div id="gallery" class="flex flex-wrap justify-between gap-[10px]">
      <article
        v-for="(project, i) in images"
        :key="i"
        class="before:hidden overflow-hidden h-[200px] group cursor-pointer"
        @click="
          showLightbox = true;
          lightboxImage = project;
        "
      >
        <img
          :src="project"
          class="object-cover h-full w-full group-hover:scale-105 transition group"
        />
      </article>
    </div>

    <div
      id="lightbox"
      class="fixed top-0 left-0 w-full h-full bg-black z-10 transition"
      :class="{
        'opacity-0 pointer-events-none': !showLightbox,
        'opacity-100 pointer-events-auto': showLightbox,
      }"
    >
      <div
        class="flex flex-col gap-4 justify-center items-center h-full w-full p-4 md:p-10 lg:p-20"
      >
        <img :src="lightboxImage" class="max-h-[80vh]" />
        <button class="btn" @click="showLightbox = false">Close.</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
