<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import AllProjects from '@/assets/portfolio/projects'

let projects = ref(AllProjects)
let tagColors: Ref<{ [key: string]: string }> = ref({
  Godot: '#478cbf',
  JS: '#c3ab00',
  HTML: '#dd4b25',
  CSS: '#254bdd',
  PHP: '#7377ad',
  RaspberryPi: '#bd1b48',
  Python: '#2e6693',
  Unity: '#100b09',
  'C#': '#903ba7',
})
</script>

<template>
  <section>
    <h1>Cool projects I've done.</h1>
    <p>
      Here are some projects I've created. More stuff can be seen on my
      <a href="https://github.com/jlarminay" target="_blank">GitHub</a> or
      <a href="https://jlarminay.itch.io/" target="_blank">itch.io</a>.
    </p>
    <div class="items">
      <router-link
        :to="{ name: 'Portfolio/Item1' }"
        v-for="(project, index) in projects"
        :key="index"
        class="item"
      >
        <img :src="'assets/portfolio/' + project.frontImage" />
        <div class="desc">
          <span>{{ project.name }}</span>
          <div>
            <span
              v-for="(tag, index) in project.tags"
              :key="index"
              class="tag"
              :style="'background-color: ' + tagColors[tag]"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply p-5;
}
.items {
  @apply flex flex-wrap justify-center;

  .item {
    @apply w-[300px] h-[175px] m-3 relative overflow-hidden;

    img {
      @apply absolute w-full h-full transition-all brightness-[0.4] object-cover blur-[2px];
    }
    .desc {
      @apply absolute bottom-0 m-0 text-white text-xl px-3 pb-2 pointer-events-none transition-all;

      .tag {
        @apply text-sm bg-red-500 rounded-md px-2 mr-2;
      }
    }

    &:hover {
      img {
        @apply blur-0;
      }
      .desc {
        @apply pb-4;
      }
    }
  }
}
</style>
