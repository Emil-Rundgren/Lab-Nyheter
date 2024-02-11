<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavbarView from './components/NavbarView.vue'
import NavigationDrawers from './components/NavigationDrawers.vue'
// import '@/assets/main.css'
</script>

<template>
  <!--  Acts as the root container for your Vuetify application and ensures proper functioning of Vuetify components -->
  <v-app>
    <NavbarView />
    <v-main>
      <NavigationDrawers />
      <header>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <v-spacer></v-spacer>
          <RouterLink to="/login">Login</RouterLink>
        </nav>
      </header>
      <!-- RouterView different views when the URL is changed it works with the main.js -->
      <RouterView />
    </v-main>
  </v-app>
</template>
