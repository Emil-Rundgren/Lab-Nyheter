<template>
  <v-card>
    <v-app-bar app density="compact" flat class="app-bar-border">
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="9" class="d-flex justify-space-between align-center">
            <!-- Hamburger + magnify-->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-btn icon>
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <!-- The title will be centered in the middle of the toolbar -->
            <v-toolbar-title class="text-center"
              ><router-link to="/" class="remove-styling text-h5 font-weight-black"
                >Real News</router-link
              ></v-toolbar-title
            >
            <!-- Log In on the right -->
            <v-btn color="black" variant="flat" text="Log In" />
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
  </v-card>
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
