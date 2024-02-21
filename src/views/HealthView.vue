<script>
import axios from 'axios'

export default {
  data() {
    return {
      // The array that gets populated by the map-function
      newsItems: [],
      itemsPerRow: 4, // Determines how many items per row
      showAlert: false,
      category: 'health' // This sets the category for this component
    }
  },
  // When newsItems changes the computed gets reacts
  computed: {
    // Slices the newsItems array into arrays of a specific size (itemsPerRow)
    sliceNewsItems() {
      let result = [] // The sliced arrays
      for (let i = 0; i < this.newsItems.length; i += this.itemsPerRow) {
        // Syntax arr.slice([startindex,[endindex]])
        // In my case this.newsItems.slice(0, 0 + 4) so it cuts at 0 until 4 which leads to 4 elements
        // this.newsItems.length === 20 gives us 5 rows if this.itemsPerRow === 4
        // So the first result array contains 4 elements [0,1,2,3]
        result.push(this.newsItems.slice(i, i + this.itemsPerRow))
      }
      return result
    }
  },
  // call the getNews function
  async created() {
    await this.getNews()
  },
  methods: {
    // Get request
    async getNews() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?category=health&country=us&apiKey=65198de0fc7e418eb3db417f3e104479'
        )
        // Add data to newsItems after news data is fetched
        // article represents an individual element (object)
        // In each article there are four keys newsImg...
        // If fetched value is falsy(undifined) add default value instead
        // the slice method ends the array after 20 article have been populated into newsItems
        console.log(response.data.articles)
        this.newsItems = response.data.articles.slice(0, 20).map((article) => ({
          newsImg: article.urlToImage || './NewsImg.jpg',
          newsTitle: article.title || 'No title available',
          newsDescription: article.description || 'No description available',
          newsContent: article.content || 'No content available'
        }))
      } catch (error) {
        console.error(error)
      }
    }
  },
  // Whenever isSearchClicked changes in App.vue, HomeView.vue will receive the updated value which in turn will trigger the watcher which will show the alert box of the search functionality not working for the moment.
  props: {
    isSearchClicked: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    isSearchClicked(newVal) {
      if (newVal) {
        this.showAlert = true
        setTimeout(() => {
          this.showAlert = false
          this.$emit('reset-search-clicked') // Inform the parent component that the alert has been handled by sending an emit to the App.vue
        }, 9000)
      }
    }
  }
}
</script>

<template>
  <!-- This alert shows up when isSearchClicked is true -->
  <v-alert
    v-if="showAlert === true"
    closable
    color="black"
    title="Search Bar"
    text="Sorry, the search functionality is temporarily unavailable. We're working on resolving the issue as quickly as possible. Please try again later. Thank you for your patience and understanding."
    type="warning"
  ></v-alert>
  <v-container fluid>
    <!-- Header Row -->
    <v-row>
      <v-col cols="8" sm="4" offset="2">
        <v-sheet class="ma-2" style="border-bottom: 1px solid #cecece">
          <h1>Health</h1>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Explanation of the News Rows -->
    <!-- Step 1 v-for in v-row, row in sliceNewsItems stands for the new sliced arrays that was created in sliceNewsItems(), in my case there is 5 new arrays in total -->
    <!-- Step 2 v-for in v-col, item in row stands for the items in the each sliced array. Each sliced array has in my case 4 elements, so 4 cols will be created in one row -->
    <!-- Step 3 Repeat step 1 and 2 untill there is no more sliced arrays left -->

    <!-- News Rows -->
    <v-row v-for="(row, rowIndex) in sliceNewsItems" :key="`row-${rowIndex}`" justify="center">
      <!-- sliceNewsItems() when screen size is less then 600px there will only be one news per row -->
      <v-col cols="12" sm="6" md="3" v-for="(item, index) in row" :key="`item-${index}`">
        <!-- Navigate user to the article view if the click on the img or title -->
        <router-link :to="`/${this.category}/article`" class="remove-styling">
          <v-sheet class="ma-2 clickable" style="cursor: pointer">
            <v-img height="30vh" cover :src="item.newsImg">
              <!-- show loading screen if img hasn't loaded yet -->
              <template v-slot:placeholder>
                <div class="d-flex align-center justify-center fill-height">
                  <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
                </div> </template
            ></v-img>
          </v-sheet>
          <v-sheet class="ma-2 clickable" style="cursor: pointer">
            <h3>{{ item.newsTitle }}</h3>
          </v-sheet>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>
