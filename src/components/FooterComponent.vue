<script>
export default {
  data() {
    return {
      icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us']
    }
  }
}
</script>
<template>
  <v-divider></v-divider>
  <v-footer>
    <v-row justify="center" class="mt-8">
      <v-btn v-for="link in links" :key="link" text class="mx-2" rounded="xl">
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-8" cols="12">
        <div>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon"></v-btn>
        </div>

        <div class="text-center mt-8">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>
