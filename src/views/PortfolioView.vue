<script setup>
import { ref } from 'vue'
import AllProjects from '@/assets/portfolio/projects.js'

let projects = ref(AllProjects)
let tagColors = ref({
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
  <section class="p-5">
    <h1>Cool projects I've done.</h1>
    <p>
      Here are some projects I've created. More stuff can be seen on my
      <a href="https://github.com/jlarminay" target="_blank">GitHub</a> or
      <a href="https://jlarminay.itch.io/" target="_blank">itch.io</a>.
    </p>
    <p>
      These are the projects in which I've gone into more detail for compared to
      some smaller projects on my GitHub. I wish I had more time to create
      projects and try out new tools pr technologies, but running my buisness is
      keeping me very busy. With my job, I have lots of opportunities to try new
      technologies but I am often contrictied by the project's requirements and
      I unfortunatly can't share any of them here in detail.
    </p>
    <div class="flex flex-wrap justify-center">
      <router-link
        :to="{ name: 'Portfolio/Item1' }"
        v-for="(project, index) in projects"
        :key="index"
        class="group relative m-3 h-[175px] w-[300px] overflow-hidden before:hidden"
      >
        <img
          :src="'assets/portfolio/' + project.frontImage"
          class="absolute h-full w-full object-cover blur-[2px] brightness-[0.4] transition-all group-hover:blur-0"
        />
        <div
          class="pointer-events-none absolute bottom-0 m-0 px-3 pb-2 text-xl text-white transition-all group-hover:pb-4"
        >
          <span>{{ project.name }}</span>
          <div>
            <span
              v-for="(tag, index) in project.tags"
              :key="index"
              class="mr-2 rounded-md px-1.5 text-xs"
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

<style scoped lang="postcss"></style>
