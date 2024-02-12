<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        remember: false
      },
      isLoading: false,
      rules: {
        required: (value) => !!value || 'Required',
        counter: (value) => value.length <= 20 || 'Max 20 characters',
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  methods: {
    submit() {
      // Cancels the function if the user hasn't entered anything
      if (this.form.email === '') {
        return
      }
      // If the user has entered
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
        alert(JSON.stringify(this.form))
      }, 3000)
    }
  }
}
</script>

<template>
  <v-container fluid>
    <v-overlay :model-value="isLoading">
      <v-progress-circular v-if="isLoading" indeterminate color="white"></v-progress-circular>
    </v-overlay>
    <v-row justify="center">
      <v-col cols="4">
        <v-card class="pa-4">
          <v-card-title class="text-center text-h5 font-weight-bold"
            >Log in or create an account</v-card-title
          >
          <v-card-item>
            <v-form @submit.prevent="submit">
              <v-text-field
                v-model="form.email"
                :rules="[rules.required, rules.email]"
                label="Email"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
              <v-text-field
                type="password"
                :rules="[rules.required]"
                v-model="form.password"
                label="Password"
                prepend-inner-icon="mdi-key"
              ></v-text-field>

              <v-checkbox
                v-model="form.remember"
                label="Remeber Me"
                color="black"
                hide-details
              ></v-checkbox>

              <v-btn color="black" type="submit" block class="mt-2" variant="elevated">
                Submit
              </v-btn>
            </v-form>
          </v-card-item>
          <v-card-action>
            <div class="mx-4">
              <v-btn block flat variant="outlined" to="/register">Register</v-btn>
            </div>
          </v-card-action>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
