<script setup>
import { ref } from 'vue'
import AllProjects from '@/assets/portfolio/projects.js'

let search = ref('')
let projects = ref(AllProjects)
let tagColors = ref({
  'Godot.': '#478cbf',
  'JS.': '#c3ab00',
  'HTML.': '#dd4b25',
  'CSS.': '#254bdd',
  'PHP.': '#7377ad',
  'RaspberryPi.': '#bd1b48',
  'Python.': '#2e6693',
  'Unity.': '#100b09',
  'C#.': '#903ba7',
  'MySQL.': '#335268',
})

function displayItem(projectItem) {
  if (search.value.length === 0) return true
  if (projectItem.name.toLowerCase().includes(search.value.toLowerCase()))
    return true
  if (
    projectItem.tags.some((tag) =>
      tag.toLowerCase().includes(search.value.toLowerCase()),
    )
  )
    return true
  return false
}
</script>

<template>
  <section class="p-5">
    <h1>Cool projects I've done.</h1>
    <p>
      Here are some of my favourite projects, although more can be seen on my
      <a href="https://github.com/jlarminay" target="_blank">GitHub</a> or
      <a href="https://jlarminay.itch.io/" target="_blank">itch.io</a>. Due to
      my busy schedule running my business, I have limited time to spend on
      personal projects. However, through my work, I have opportunities to work
      with new technologies but am unable to share those projects in detail.
    </p>
    <!-- <div class="text-center">
      <input
        v-model="search"
        class="border border-white bg-[#181818] px-2 py-1 text-white outline-none focus:outline-none"
        placeholder="Search."
      />
    </div> -->
    <div class="flex flex-wrap justify-center">
      <router-link
        :to="{ name: 'Portfolio/' + project.id }"
        v-for="(project, index) in projects"
        :key="index"
        class="group relative m-3 h-[175px] w-[300px] overflow-hidden transition-all duration-500 before:hidden"
        :class="{ hidden: !displayItem(project) }"
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
