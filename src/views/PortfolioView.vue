<script setup lang="ts">
import { ref } from 'vue';
import AllProjects from '@/assets/portfolioProjects.ts';

const projects = ref(AllProjects);
</script>

<template>
  <section>
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

    <div class="flex flex-wrap justify-center">
      <div v-for="project in projects" :key="project.id" class="w-1/3 p-2">
        <div class="relative aspect-video">
          <router-link
            :to="`/portfolio/${project.id}`"
            class="block h-full w-full overflow-hidden group !border-0 before:hidden"
          >
            <img
              :src="`/images/portfolio/${project.poster}`"
              alt="Project Poster"
              class="absolute h-full w-full object-cover blur-[1px] brightness-[0.4] transition-all group-hover:blur-[0] group-hover:brightness-[0.8]"
            />
            <div
              class="pointer-events-none absolute bottom-0 m-0 px-3 py-2 text-white transition-all group-hover:pb-4 bg-black/50 group-hover:bg-black/70 w-full"
            >
              <span class="text-xs !m-0 rounded-lg px-1.5 py-0 bg-white/80 text-black/80">
                {{ project.type }}
              </span>
              <p class="text-lg !m-0">{{ project.name }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <!-- <router-link
        :to="{ name: 'Portfolio/' + project.id }"
        :key="index"
        class="group relative aspect-video w-full overflow-hidden p-5 transition-all duration-500 before:hidden sm:w-1/2 lg:w-1/3 border-red-500"
      >
        <img
          :src="`/images/portfolio/${project.poster}`"
          class="absolute h-full w-full object-cover blur-[2px] brightness-[0.4] transition-all group-hover:blur-0"
        />
        <div
          class="pointer-events-none absolute bottom-0 m-0 px-3 pb-2 text-xl text-white transition-all group-hover:pb-4"
        >
          <span>{{ project.name }}</span>
        </div>
      </router-link> -->
    </div>
  </section>
</template>

<style scoped lang="postcss"></style>
