<template>
  <div>
    <header class="container mx-auto display-content">
      <div class="lg:flex items-center p-2">
        <div class="lg:w-1/2 text-center">
          <img
            src="./../assets/Main Logo.jpg"
            alt="skating park image"
            class="lg:h-100 md:h-100 sm:h-100 xs:h-100"
          />
        </div>

        <div class="w-auto xs:m-0 md:m-1 md:pl-24 md:pr-24">
          <h2
            class="text-white font-black lg:text-4xl md:text-3xl sm:text-xl mb-4 lg:w-4/5 text-center allCaps"
          >
            Discipline makes warriors. Passion creates champions.
          </h2>
          <div
            class="text-grey-light opacity-50 mb-4 text-center lg:w-4/5 md:text-md md:text-2xl allCaps"
          >
            Empowering Confidence through Skill
          </div>
          <div
            class="flex text-center lg:w-auto mb-4 lg:mb-0 justify-center lg:w-4/5"
          >
            <a
              href="#"
              v-scroll-to="'#contact'"
              class="flex-1 text-center verical-center justify-center px-6 py-3 leading-none no-underline border rounded-xl bg-main-green text-grey-lightest border-black hover:border-grey-lightest hover:text-grey-lightest hover:bg-transparent mt-4"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </header>

    <svg
      preserveAspectRatio="xMidYMax meet"
      class="svg-separator sep12"
      viewBox="0 0 1600 200"
      style="display: block"
      data-height="200"
    >
      <polygon
        style="fill: #f8fafc"
        points="-4,24 800,198 1604,24 1604,204 -4,204 "
      ></polygon>
      <polygon
        style="opacity: 1; fill: #95a5a6"
        points="-4,0 800,198 1604,0 1604,11.833 800,198 -4,12 "
      ></polygon>
      <polygon
        style="opacity: 1; fill: #dae1e7"
        points="-4,12 -4,24 800,198 1604,24 1604,11.833 800,198 "
      ></polygon>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
