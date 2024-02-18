<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

// Sets the state of the reactive property to false
const isSearchClicked = ref(false)

const handleSearchClick = () => {
  isSearchClicked.value = true // update the reactive property to ture
}

const resetSearchClicked = () => {
  isSearchClicked.value = false // update the reactive property to false
}
</script>

<template>
  <!--  Acts as the root container for your Vuetify application and ensures proper functioning of Vuetify components -->
  <v-app>
    <!-- Parent (App) listen to the Emit from Navbar by looking for the name of the event (@search-clicked) and reacts by running the handleSearchClick function  which sets the value of isSearchClicked = true-->
    <NavbarComponent @search-clicked="handleSearchClick" />
    <v-main>
      <!-- RouterView different views when the URL is changed it works with the main.js -->
      <RouterView v-slot="{ Component }">
        <!-- The scoped slots passes the isSearchClicked property to all components rendered by RouterView, including HomeView Politices and so on -->
        <!-- :is-serach-cliked="isSearchClicked" is where i bind the reactive data isSearchClicked to a prop that is sent to the components that is being rendered by RouterView -->
        <!-- :is="Component" tells the vue which component to render -->
        <component
          :is="Component"
          :is-search-clicked="isSearchClicked"
          @reset-search-clicked="resetSearchClicked"
        />
        <!-- Parent (App) listen to the Emit from HomeView by looking for the name of the event (@reset-search-clicked) and executes the function resetSearchClicked -->
      </RouterView>
    </v-main>
    <FooterComponent />
  </v-app>
</template>
