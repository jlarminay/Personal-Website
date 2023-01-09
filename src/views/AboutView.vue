<template>
  <section>
    <div class="text">
      <h1>A bit about me.</h1>
      <p>
        Hi I'm Josh Larminay. I'm a full stack developer from Victoria BC
        currently running my own company
        <a href="https://ursacreative.ca" target="_blank">Ursa Creative</a>.
      </p>
      <p>
        I first got an interest in computer when I was playing Wolfenstein 3D on
        my grandpa's computer. I started with learning Macromedia Flash to make
        simple flash games. Unfortunately none of these games still exist today.
        During high-school, I started learning Python and HTML/CSS/JS.
      </p>
      <p>
        After high-school, I attended Camosun College for a year to learn
        computer science. After this I was approached by a friend to form our
        own company.
      </p>

      <h2 class="mt-10">Some Random Facts.</h2>
      <ul>
        <li>🎮 I have over 1400 video games for over 40 consoles.</li>
        <li>🌎 I'm fluent in both French and English.</li>
      </ul>
    </div>
    <div class="image">
      <img src="@/assets/josh-cat.png" class="w-full" />
    </div>
  </section>
</template>

<style scoped lang="postcss">
section {
  @apply flex justify-center;

  .text {
    @apply p-5 w-[600px];
  }

  .image {
    @apply p-10 w-[400px];
  }
}

ul {
  @apply list-disc ml-6;

  li {
    @apply mb-2;
  }
}
</style>
