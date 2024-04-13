<script setup lang="ts">
import gallery from '@/components/gallery.vue';
</script>

<template>
  <article class="p-5">
    <div class="items-center justify-between text-left md:flex">
      <h1 class="mb-0">Arcade Machine.</h1>
      <div class="my-6 flex gap-5 md:my-0">
        <a class="btn hidden" href="" target="_blank">View GitHub.</a>
        <a class="btn hidden" href="" target="_blank">View project.</a>
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          In 2021, I decided to fulfill a lifelong dream of owning an arcade machine. I started
          looking around and eventually found one for sale in Vancouver. The machine seems to be a
          modified Namco Noir cabinet and originally had Tekken 6 artwork, but has since been
          converted to a standard JAMMA plug. I decided to hook up a RaspbeeryPi running RetroPie to
          make a full emulation station.
        </p>
      </div>
      <!-- image -->
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/arcade_machine/slide1.webp"
        />
      </div>
    </div>

    <div class="mt-16 md:flex gap-4 justify-start">
      <!-- text -->
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          As the board was originally built for JAMMA boards, everything was running off a 12v
          transformer. I added a converter to output 5v allowing me to add a few custom parts. The
          original lights were replaced with LEDs and the fans were replaced with quieter ones
          running 5v. I then added an I-PAC 2 encoder to convert the JAMMA signal to USB for the
          RaspberryPi. Next I wanted a way to control the volume externally so I wired in a
          potentiometer and added a custom front panel allowing me to change the volume. Finally I
          created some custom art to replace the original Tekken displays.
        </p>
        <p>
          RetroPie gives the user a good amount of customization, but there were some custom changes
          I did above that, some of which include custom theme and splash screen images. The larger
          addition was adding a Godot emulator, which allowed me to run my own games on the machine
          (eventually). This also required me to build a custom control scheme for my Godot build,
          allowing me to detect the joypad buttons.
        </p>
      </div>
      <!-- image -->
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="/images/portfolio/arcade_machine/slide8.webp"
        />
      </div>
    </div>

    <div class="mt-10">
      <gallery
        :images="[
          '/images/portfolio/arcade_machine/slide2.webp',
          '/images/portfolio/arcade_machine/slide3.webp',
          '/images/portfolio/arcade_machine/slide4.webp',
          '/images/portfolio/arcade_machine/slide5.webp',
          '/images/portfolio/arcade_machine/slide6.webp',
          '/images/portfolio/arcade_machine/slide9.webp',
          '/images/portfolio/arcade_machine/slide10.webp',
        ]"
      />
    </div>
  </article>
</template>

<style scoped></style>
