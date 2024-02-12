<script>
import axios from 'axios'

export default {
  data() {
    return {
      newsItems: []
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
          'https://newsapi.org/v2/top-headlines?country=se&apiKey=65198de0fc7e418eb3db417f3e104479'
        )
        this.news = response.data.articles
        // Add data to newsItems after news data is fetched
        if (this.news && this.news.length > 0) {
          // article represents an individual element (object)
          // In each article there are three key newsImg...
          // If fetched value is falsy(undifined) add default value instead
          this.newsItems = this.news.map((article) => ({
            newsImg: article.urlToImage || './public/neom-WLeWJW_WneE-unsplash.jpeg',
            newsTitle: article.title || 'No title available',
            newsDescription: article.description || 'No description available'
          }))
        }
        console.log(this.newsItems)
      } catch (error) {
        console.error(error)
      }
    }
  }
}
</script>

<!-- v-if="newsItems.length > 0" is needed otherwise the template will try to access the fetced data before it has been fetched -->
<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="8" class="d-flex justify-space-between align-center">
        <h1>World News</h1>
        <v-card>
          <v-img
            height="200px"
            cover
            v-if="newsItems.length > 0"
            :src="newsItems[0].newsImg"
          ></v-img>

          <v-card-title v-if="newsItems.length > 0">
            {{ newsItems[0].newsTitle }}
          </v-card-title>

          <v-card-subtitle v-if="newsItems.length > 0">
            {{ newsItems[0].newsDescription }}</v-card-subtitle
          >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
