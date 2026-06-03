<template>
  <div>
    <div class="bg-blue-lightest">
      <div class="w-full text-center pt-8 opacity-75">
        <a href="#" class="bg-green-dark p-4" v-scroll-to="'#app'"
          ><img src="./../assets/up-arrow.svg" alt="" class="h-6"
        /></a>
      </div>

      <div class="w-full text-center">
        <div>
          <img
            src="./../assets/Main Logo-rm.png"
            alt="Young Warriors Speed Skating Academy Logo"
            class="h-1/2screen mt-8"
          />
        </div>
      </div>
      <div class="flex items-start justify-center text-center mt-10">
        <div>
          <div class="font-bold allCaps text-4xl">Useful Links</div>
          <div
            class="flex flex-col items-center font-thin opacity-75 mt-4 text-3xl"
          >
            <a href="#About" class="no-underline">About Us</a>
            <a href="#Programs" class="no-underline mt-2">Programs</a>
            <a href="#app" class="no-underline mt-2">Home</a>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap mt-12 items-center justify-between p-3">
        <div class="text-grey-lightest opacity-75">
          © {{ new Date().getFullYear() }} Young Warriors Speed Skating Academy.
          All rights reserved.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
