<script setup>
import { ref } from 'vue'

let icons = ref([
  'vuejs',
  'python',
  'godot',
  'raspberrypi',
  'digitalocean',
  'docker',
  'nginx',
  'nodejs',
  'php',
  'postgresql',
  'tailwindcss',
])
</script>

<template>
  <section class="flex justify-center">
    <div class="w-[350px] p-10">
      <img src="@/assets/josh-point.png" class="w-full" />
    </div>
    <div class="w-[650px] p-5">
      <div class="mb-10">
        <h1>Some skills and stuff.</h1>
        <ul>
          <li>
            Learn some Infrastructure as Code (IaC) tools like Terraform and
            Ansible.
          </li>
          <li>Learning mobile development with Flutter.</li>
          <li>I want to make more games with Godot.</li>
        </ul>
      </div>

      <div class="mb-5">
        <h2>My favorite languages and tools.</h2>
        <div class="mb-7 flex flex-wrap justify-start">
          <img
            v-for="(icon, index) in icons"
            :key="index"
            class="m-3 w-[75px]"
            :src="'assets/logos/' + icon + '.svg'"
            :alt="icon"
            :title="icon"
          />
        </div>
      </div>

      <div>
        <h2>What I'm doing next.</h2>
        <ul>
          <li>
            Learn some Infrastructure as Code (IaC) tools like Terraform and
            Ansible.
          </li>
          <li>Learning mobile development with Flutter.</li>
          <li>I want to make more games with Godot.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="postcss"></style>
