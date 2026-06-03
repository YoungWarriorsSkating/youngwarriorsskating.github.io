<template>
  <div id="app" class="largeFonts">
    <navigation-menu></navigation-menu>
    <app-header></app-header>
    <app-specials></app-specials>
    <app-features></app-features>
    <app-download></app-download>
    <icon-bar></icon-bar>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFeatures from "./components/AppFeatures.vue";
import AppTestimonials from "./components/AppTestimonials.vue";
import AppFooter from "./components/AppFooter.vue";
import AppContact from "./components/AppContact.vue";
import AppDownload from "./components/AppDownload.vue";
import AppSpecials from "./components/AppSpecials.vue";
import NavigationMenu from "./components/NavigationMenu.vue";
import IconBar from "./components/IconBar.vue";

export default {
  components: {
    NavigationMenu,
    AppHeader,
    AppFeatures,
    AppTestimonials,
    AppFooter,
    AppContact,
    AppDownload,
    AppSpecials,
    IconBar,
  },
};
</script>

<style>
@tailwind preflight;
@tailwind components;
@tailwind utilities;
#app {
  color: var(--amberglow);
  background-color: var(--black);
}
</style>
