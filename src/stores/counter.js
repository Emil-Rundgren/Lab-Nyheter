import { defineStore } from 'pinia'

// Define the Authentication state of the user
export const loggedInStore = defineStore({
  // Id of the loggedInStore that is used in the app
  id: 'auth',
  state: () => ({
    // State properties
    isLoggedIn: false
  }),
  actions: {
    // Actions for changing the state
    logIn() {
      this.isLoggedIn = true
    },
    logOut() {
      this.isLoggedIn = false
    }
  }
})
