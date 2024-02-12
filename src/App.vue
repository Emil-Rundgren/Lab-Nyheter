<script setup>
import { RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue'

// import '@/assets/main.css'
</script>

<template>
  <!--  Acts as the root container for your Vuetify application and ensures proper functioning of Vuetify components -->
  <v-app>
    <NavbarView />
    <v-main>
      <!-- RouterView different views when the URL is changed it works with the main.js -->
      <RouterView />
    </v-main>
  </v-app>
</template>
