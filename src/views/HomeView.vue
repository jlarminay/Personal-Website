<script setup lang="ts">
import { ref, onMounted } from 'vue'

let title = ref('Full-Stack Developer')
let titleCounter = ref(0)
let allTitles = ref([
  'Full-stack Developer.',
  'Gamer.',
  'Software Developer.',
  'Cat Father.',
  'Mobile Developer.',
  'Gamer again.',
  'Movie Nerd.',
])

onMounted(() => {
  updateTitle()
})

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min)

async function updateTitle() {
  // time before starting removal
  await sleep(random(2800, 3200))

  // remove current title
  while (title.value.length > 0) {
    title.value = title.value.substring(0, title.value.length - 1)
    await sleep(random(50, 100))
  }

  // get new title
  titleCounter.value++
  if (titleCounter.value > allTitles.value.length - 1) titleCounter.value = 0
  let tempTitle = allTitles.value[titleCounter.value]

  // wait before writing
  await sleep(random(1000, 1200))

  // add new title
  let i = 0
  while (title.value.length < tempTitle.length) {
    title.value = title.value.concat(tempTitle[i])
    i++
    await sleep(random(100, 150))
  }

  updateTitle()
}
</script>

<template>
  <section>
    <div>
      <div class="image">
        <img src="@/assets/josh-chin.png" class="profile" />
        <img src="@/assets/gradient.png" class="background" />
      </div>
    </div>
    <div class="text">
      <div class="intro">
        <h1 class="m-0">Hey I'm Josh.</h1>
        <span>👋</span>
      </div>
      <div class="title">
        <h2 class="m-0">{{ title }}</h2>
        <div class="cursor"></div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss">
@keyframes background-spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes cursor-flash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hand-wave {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

section {
  @apply flex justify-center items-center;

  .image {
    @apply p-10 relative w-[420px] flex justify-center;
    -webkit-mask-image: url(@/assets/blob.svg);
    mask-image: url(@/assets/blob.svg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;

    .profile {
      @apply relative w-full z-10 m-5;
    }
    .background {
      @apply absolute top-0 left-0 w-full h-full;
      animation: background-spin 10s linear infinite;
    }
  }

  .text {
    @apply p-5;

    .intro {
      @apply text-4xl mb-4 flex justify-start items-center;

      span:hover {
        @apply cursor-grab;
        animation: hand-wave 0.5s linear infinite;
      }
    }
    .title {
      @apply flex justify-start items-center h-[36px];

      h2 {
        @apply text-3xl;
      }

      .cursor {
        @apply bg-white w-[2px] h-full ml-2;
        animation: cursor-flash 1s steps(1, end) infinite;
      }
    }
  }
}
</style>
