<template>
  <menu class="mt-5 mb-10 flex items-center justify-between text-center">
    <router-link :to="{ name: 'HomeView' }" class="before:hidden">
      <div class="p-2 font-['Montserrat'] text-4xl font-black text-white">
        Josh Larminay.
      </div>
    </router-link>
    <nav>
      <router-link :to="{ name: 'HomeView' }">Home.</router-link>
      <router-link :to="{ name: 'AboutView' }">About.</router-link>
      <router-link :to="{ name: 'SkillsView' }">Skills.</router-link>
      <router-link :to="{ name: 'PortfolioView' }">Portfolio.</router-link>
      <router-link :to="{ name: 'Portfolio/Item1' }">Item1.</router-link>
    </nav>
  </menu>
</template>

<style scoped lang="postcss">
nav {
  a {
    @apply p-2 border-0 inline-block mx-2 border-gray-300 text-gray-300 transition-all no-underline before:hidden;

    &:hover,
    &.router-link-active {
      @apply pt-2 pb-1 border-b-4 border-white text-white;
    }
    &.router-link-active {
      @apply border-[#be1f4d];
    }
  }
}
</style>
