<template>
  <article class="p-5">
    <div class="items-center justify-between text-center md:flex md:text-left">
      <h1 class="mb-0">Floor Check Report.</h1>
      <div class="my-6 md:my-0">
        <a class="btn ml-5 hidden" href="" target="_blank">View GitHub.</a>
        <a
          class="btn ml-5"
          href="https://projects.joshlarminay.com/floor_check_report/"
          target="_blank"
          >View project.</a
        >
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="md:w-3/5">
        <h3>About.</h3>
        <p>
          When I worked at Thirfty Foods, we were required to do hourly floor
          checks for debris or spills. After our check, we marked on a machine
          we completed one. At the end of the day, the team leads were supposed
          to look at the records and see if appropriate checks were done. The
          machine generated a long list of checks in an Excel file and we were
          expected to find any large missing blocks or anomaly. This took a good
          amount of time, so I created an app that generated graphs and reports
          from the Excel file.
        </p>
        <p>
          Since this project requires a properly formatted Excel file to
          function, I created a few demo files to show what the graphs would
          look like with actual data. These demos can be seen on the project
          page.
        </p>
      </div>
      <div class="aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/floor_check_report/floor_check_report-slide1.webp"
        />
      </div>
    </div>
    <div class="mt-16 items-start gap-10 md:flex">
      <div class="order-2 md:w-3/5">
        <h3>Development.</h3>
        <p>
          This project was built using PHP and HTML/CSS/JS. I didn't know to use
          any graphing libraries, so I made my own using math and HTML/CSS. I'm
          retrospect I should have used a library, but I'm very proud of the
          graphs and reports I was able to generate on my own.
        </p>
        <p>
          The application ins't the prettiest, but it was only meant for me and
          the other team leads, so I didn't care too much.
        </p>
      </div>
      <div class="order-1 aspect-video md:w-2/5">
        <img
          class="mx-auto h-full max-w-[80vw] object-contain md:w-full"
          src="../../assets/portfolio/floor_check_report/floor_check_report-slide2.webp"
        />
      </div>
    </div>
  </article>
</template>

<style scoped lang="postcss"></style>
