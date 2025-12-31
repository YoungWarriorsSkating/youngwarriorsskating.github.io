<template>
  <div id="testimonials" class="bg-grey-lightest pt-12 pb-12">
      <carousel :per-page="1" class="text-black" autoplay :autoplayTimeout="timeout" loop paginationColor="#000000" paginationActiveColor="#1f8a65">
        <slide v-for="testimonial in testimonials" :key="testimonial.id">
          <div class="text-center">
        <div class="text-2xl italic">
          {{ testimonial.title}}
        </div>
        <p class="text-black font-base text-md opacity-50 m-10">
          {{ testimonial.message }}
        </p>
        <div class="inline-flex">
            <img v-if="testimonial.icon" :src="'avatars/' + testimonial.icon" alt="avatar" class="h-1/2screen">
          <div class="flex justify-center ml-6 mt-3 text-black" style="
    flex-direction: column;
">
            <div class="font-medium text-lg">
              {{ testimonial.name }}
            </div>
            <div class="font-thin text-md opacity-75">
              {{ testimonial.job }}
            </div>
          </div>
        </div>
      </div>
        </slide>
      </carousel>
    </div>
  <!-- </div> -->
</template>

<script>
  export default {
    data() {
      return {
        testimonials: null,
        timeout: 5000
      };
    },
    mounted(){
      axios.get('testimonials.json').then(response => (
        this.testimonials = response.data
        ))
    }
  };
</script>
