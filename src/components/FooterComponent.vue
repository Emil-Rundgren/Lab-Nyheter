<script>
import { useRouter } from 'vue-router'
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      links: ['Home', 'Sports', 'Science', 'Business', 'Health']
    }
  },
  methods: {
    navigateTo(route) {
      const router = useRouter()
      router.push(route)
    }
  }
}
</script>
<template>
  <v-divider></v-divider>
  <v-footer>
    <v-row justify="center" class="mt-8">
      <!-- The button/links being rendered out -->
      <v-btn v-for="link in links" :key="link" text class="ma-2" rounded="xl">
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-8" cols="12">
        <!-- The icons -->
        <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon"></v-btn>
        </div>
        <!-- Add the current year being putting in js directly inside the template -->
        <div class="text-center mt-8">
          {{ new Date().getFullYear() }} — <strong>Real News</strong>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
