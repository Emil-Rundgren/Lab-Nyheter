<script>
import axios from 'axios'
// Want to use async/await? Add the `async` keyword to your outer function/method.
export default {
  methods: {
    async getUser() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/everything?q=tesla&apiKey=65198de0fc7e418eb3db417f3e104479'
        )
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8" class="d-flex justify-space-between align-center">
        <h1>This is the homepage</h1>
        <v-btn variant="flat" color="black" @click="getUser">Klicka</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
