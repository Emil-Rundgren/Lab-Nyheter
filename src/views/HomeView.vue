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
  <h1>This is the homepage</h1>
  <button @click="getUser">Klicka</button>
</template>
