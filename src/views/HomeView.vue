<!-- eslint-disable vue/no-ref-as-operand -->
<script setup>
import { ref, onMounted } from 'vue'

let title = ref('')
let titleCounter = ref(0)
let allTitles = ref([
  'Full-stack Developer.',
  'Gamer.',
  'Software Developer.',
  'Cat Father.',
  'Mobile Developer.',
  'Archivist.',
  'Entrepreneur.',
  'Movie Nerd.',
])

onMounted(() => {
  title.value = allTitles.value[0]
  updateTitle()
})

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function updateTitle() {
  // time before starting removal
  await sleep(3000)

  // remove current title
  while (title.value.length > 0) {
    title.value = title.value.substring(0, title.value.length - 1)
    await sleep(75)
  }

  // get new title
  titleCounter.value++
  if (titleCounter.value > allTitles.value.length - 1) titleCounter.value = 0
  let tempTitle = allTitles.value[titleCounter.value]

  // wait before writing
  await sleep(1000)

  // add new title
  let i = 0
  while (title.value.length < tempTitle.length) {
    title.value = title.value.concat(tempTitle[i])
    i++
    await sleep(100)
  }

  updateTitle()
}
</script>

<template>
  <section class="items-center justify-center sm:flex">
    <div>
      <div
        id="image"
        class="relative flex justify-center overflow-hidden sm:w-[330px] md:w-[400px] lg:w-[500px]"
      >
        <img
          src="@/assets/josh-chin.png"
          class="relative z-10 m-5 w-[80%] sm:w-full"
        />
        <img
          src="@/assets/gradient.png"
          id="background-spin"
          class="absolute top-0 left-0 h-full w-full"
        />
      </div>
    </div>
    <div class="grow p-5 text-center sm:text-left">
      <div
        class="mb-4 flex items-center justify-center text-4xl sm:justify-start"
      >
        <h1 class="m-0">Hey I'm Josh.</h1>
        <span id="hand-wave" class="cursor-grab">👋</span>
      </div>
      <div
        class="mb-10 flex h-[36px] items-center justify-center sm:justify-start"
      >
        <h2 class="m-0 text-2xl md:text-3xl">I'm a {{ title }}</h2>
        <div id="cursor" class="ml-2 h-full w-[2px] bg-white"></div>
      </div>
      <a class="btn" href="mailto:j.larminay@gmail.com">Get in touch.</a>
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

#image {
  -webkit-mask-image: url(@/assets/blobanimation.svg);
  mask-image: url(@/assets/blobanimation.svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  mask-position: center center;
}
#background-spin {
  animation: background-spin 6s linear infinite;
}
#hand-wave:hover {
  animation: hand-wave 0.5s linear infinite;
}
#cursor {
  animation: cursor-flash 1s steps(1, end) infinite;
}
</style>
