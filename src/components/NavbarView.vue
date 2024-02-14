<script>
export default {
  data() {
    return {
      drawer: false,
      search: false
    }
  }
}
</script>

<template>
  <v-app-bar app density="compact" flat class="app-bar-border">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="8" class="d-flex justify-space-between align-center">
          <!-- Hamburger Menu Navigation-Drawer toggle -->
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <!-- Search toggle -->
          <v-btn icon="mdi-magnify" @click="search = !search" />
          <!-- Use v-if to toggle the visibility of the search div -->
          <div v-if="search" class="d-flex align-center">
            <!-- Search Field and Button -->
            <v-text-field v-model="searchText" label="Search" hide-details></v-text-field>
            <v-btn @click="onSearch" text="Go" color="black" variant="flat" />
          </div>
          <!-- The title will be centered in the middle of the toolbar -->
          <v-toolbar-title class="text-center"
            ><router-link to="/" class="remove-styling text-h5 font-weight-black"
              >Real News</router-link
            ></v-toolbar-title
          >

          <!-- Log In on the right -->
          <v-btn color="black" variant="flat" text="Log In" to="/login" />
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
        <router-link to="/politices" class="remove-styling font-weight-medium"
          >Politices</router-link
        >
      </v-list-item>

      <v-list-item>
        <router-link to="/" class="remove-styling font-weight-medium">Business</router-link>
      </v-list-item>
      <v-list-item
        ><router-link to="/" class="remove-styling font-weight-medium"
          >Health</router-link
        ></v-list-item
      >

      <v-list-item>
        <router-link to="/" class="remove-styling font-weight-medium">Sport</router-link>
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
  color: inherit; /* Inherits the color from the parent element */
}
</style>
