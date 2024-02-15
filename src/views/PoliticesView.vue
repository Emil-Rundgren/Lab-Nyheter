<script>
import axios from 'axios'

export default {
  data() {
    return {
      // The array that gets populated by the map-function
      newsItems: [],
      itemsPerRow: 3 // Determines how many items per row
    }
  },
  computed: {
    // Slices the newsItems array into arrays of a specific size (itemsPerRow)
    sliceNewsItems() {
      let result = [] // The sliced arrays
      for (let i = 0; i < this.newsItems.length; i += this.itemsPerRow) {
        result.push(this.newsItems.slice(i, i + this.itemsPerRow))
      }
      return result
    }
  },
  async created() {
    await this.getNews()
  },
  methods: {
    // Get request
    async getNews() {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=65198de0fc7e418eb3db417f3e104479'
        )
        // Add data to newsItems after news data is fetched
        // article represents an individual element (object)
        // In each article there are four keys newsImg...
        // If fetched value is falsy(undifined) add default value instead
        console.log(response.data.articles)
        this.newsItems = response.data.articles.map((article) => ({
          newsImg: article.urlToImage || './neom-WLeWJW_WneE-unsplash.jpeg',
          newsTitle: article.title || 'No title available',
          newsDescription: article.description || 'No description available',
          newsContent: article.content || 'No content available'
        }))
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<template>
  <v-container fluid>
    <!-- Header Row -->
    <v-row>
      <v-col cols="4" offset="2">
        <v-sheet class="ma-2" style="border-bottom: 1px solid #cecece">
          <h1>World News</h1>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- News Rows -->
    <v-row v-for="(row, rowIndex) in sliceNewsItems" :key="`row-${rowIndex}`" justify="center">
      <v-col cols="4" v-for="(item, index) in row" :key="`item-${index}`">
        <v-sheet class="ma-2 clickable" style="cursor: pointer">
          <v-img height="30vh" cover :src="item.newsImg"></v-img>
        </v-sheet>
        <v-sheet class="ma-2 clickable" style="cursor: pointer">
          <h3>{{ item.newsTitle }}</h3>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
