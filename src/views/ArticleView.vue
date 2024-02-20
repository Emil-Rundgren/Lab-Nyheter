<!-- Imports the data from pinia  -->
<script setup>
import { loggedInStore } from '@/stores/counter'
const auth = loggedInStore()
</script>

<template>
  <v-container fluid>
    <!-- br -->
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-img src="./NewsImg.jpg" cover height="400px" class="mb-6 mt-6" />

        <h1 class="text-h6 text-sm-h5 text-md-h4 font-weight-bold mb-4 text-black">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h1>

        <!-- <p class="text-h5 font-weight-bold mb-1">
          This is a fake description for a placeholder article.
        </p> -->
        <p class="text-h6 font-weight-medium mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
          tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
          diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
          orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
          Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
          augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
          ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
        </p>
        <p class="text-h6 font-weight-medium mb-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
          tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
          diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor,
          orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat.
          Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim.
          Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum
          augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui
          ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum.
          Maecenas adipiscing ante non diam sodales hendrerit.
        </p>
      </v-col>
    </v-row>

    <!-- This is the blocking div -->
    <div class="blocking-div" v-if="!auth.isLoggedIn">
      <div class="login-message">
        <h2 class="text-h6 text-sm-h5 text-md-h4 font-weight-bold">
          You need to login to be able to read the content in this article
        </h2>
        <!-- When the log In btn is pressed the user is navigated to the Log In page where the user can Log In. If the user does that the value of isLoggedIn in pinia changes to true which removes the blocking div -->
        <v-btn class="mt-4" color="black" variant="flat" text="Log In" to="/login" />
      </div>
    </div>
  </v-container>
</template>

<style>
.blocking-div {
  /* Take up the whole viewport */
  position: fixed;
  right: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.96); /* White with a bit of transparency */
  /* To center the div content */
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-message {
  text-align: center;
}
</style>
