<script>
export default {
  data() {
    return {
      drawer: false,
      search: false
    }
  },
  methods: {
    // Navbar Sends an Emit to App through a click-event
    searchIconClicked() {
      this.$emit('search-clicked')
    }
  },
  computed: {}
}
</script>

<!-- Pinia Script for loging out  -->
<!-- The log In is in the LogInView -->
<script setup>
import { loggedInStore } from '@/stores/counter'
const auth = loggedInStore()
// When the user clicks on log out this function gets executed which changes the value of this.isLoggedIn = false in pinia. This in turn changes the btn that is being displayed form the Log In btn to Log Out.
function logOut() {
  auth.logOut()
}
</script>

<template>
  <v-app-bar app density="compact" flat class="app-bar-border">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" md="8" class="d-flex justify-space-between align-center">
          <!-- Hamburger Menu Navigation-Drawer toggle -->
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <!-- Search btn -->
          <v-btn icon="mdi-magnify" @click="searchIconClicked" />

          <v-toolbar-title class="text-center"
            ><router-link to="/" class="remove-styling text-h5 font-weight-black"
              >Real News</router-link
            ></v-toolbar-title
          >

          <!-- Log in/Log out button varaiants pinia -->
          <v-btn v-if="!auth.isLoggedIn" color="black" variant="flat" text="Log In" to="/login" />
          <v-btn
            v-if="auth.isLoggedIn"
            @click="logOut"
            color="black"
            variant="flat"
            text="Log Out"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
  <!-- The navigation drawer that shows up when hamburger icon is clicked on -->
  <v-navigation-drawer location="left" v-model="drawer" temporary :width="200" :elevation="0">
    <v-list density="compact" nav>
      <v-list-item
        ><router-link to="/" class="remove-styling font-weight-medium"
          >Homepage</router-link
        ></v-list-item
      >
      <v-list-item>
        <router-link to="/Sports" class="remove-styling font-weight-medium">Sports</router-link>
      </v-list-item>

      <v-list-item>
        <router-link to="/science" class="remove-styling font-weight-medium">Science</router-link>
      </v-list-item>
      <v-list-item
        ><router-link to="/business" class="remove-styling font-weight-medium"
          >Business</router-link
        ></v-list-item
      >

      <v-list-item>
        <router-link to="/health" class="remove-styling font-weight-medium">Health</router-link>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
/* Add a boder-bottom to my toolbar */
.app-bar-border {
  border-bottom: 1px solid #cecece !important; /* important overrides the default vueitfy values */
}
/* Removes the styling from the routerlink on the newswebsite title */
.remove-styling {
  text-decoration: none; /* Removes the underline */
  color: black;
}
</style>
