<script setup>
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

// import '@/assets/main.css'
</script>

<template>
  <!--  Acts as the root container for your Vuetify application and ensures proper functioning of Vuetify components -->
  <v-app>
    <NavbarComponent />
    <v-main>
      <!-- RouterView different views when the URL is changed it works with the main.js -->
      <RouterView />
    </v-main>
    <FooterComponent />
  </v-app>
</template>
