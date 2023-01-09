<template>
  <menu>
    <div class="logo">Josh Larminay</div>
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
menu {
  @apply text-center mt-5 flex justify-between items-center;

  .logo {
    @apply text-4xl text-white font-black p-2;
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    a {
      @apply p-2 border-0 inline-block mx-2 border-gray-300 text-gray-300 transition-all no-underline;

      &:hover,
      &.router-link-active {
        @apply pt-2 pb-1 border-b-4 border-white text-white;
      }
    }
  }
}
</style>
