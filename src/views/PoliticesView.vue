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
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=65198de0fc7e418eb3db417f3e104479'
        )
        this.news = response.data.articles
        // Add data to newsItems after news data is fetched
        if (this.news && this.news.length > 0) {
          // article represents an individual element (object)
          // In each article there are three key newsImg...
          // If fetched value is falsy(undifined) add default value instead
          this.newsItems = this.news.map((article) => ({
            newsImg: article.urlToImage || './neom-WLeWJW_WneE-unsplash.jpeg',
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
    <!-- Header Row -->
    <v-row>
      <!-- Offset pushes the col 2 v-col to the right -->
      <v-col cols="4" offset="2">
        <v-sheet class="ma-2" style="border-bottom: 1px solid #cecece">
          <h1>Politices</h1>
        </v-sheet>
      </v-col>
    </v-row>

    <!-- First Row -->
    <v-row justify="center">
      <v-col cols="4">
        <v-sheet class="ma-2">
          <v-img height="30vh" cover v-if="newsItems.length > 0" :src="newsItems[0].newsImg"></v-img
        ></v-sheet>
        <v-sheet class="ma-2">
          <h3 v-if="newsItems.length > 0">
            {{ newsItems[0].newsTitle }}
          </h3>

          <p v-if="newsItems.length > 0">
            {{ newsItems[0].newsDescription }}
          </p>
          <v-btn class="mt-3" color="black" variant="flat" text="Read More" to="/login" />
        </v-sheet>
      </v-col>

      <v-col cols="4">
        <v-sheet class="ma-2">
          <v-img
            height="30vh"
            cover
            v-if="newsItems.length > 0"
            :src="newsItems[1].newsImg"
          ></v-img>
        </v-sheet>
        <v-sheet class="ma-2">
          <h3 v-if="newsItems.length > 0">
            {{ newsItems[1].newsTitle }}
          </h3>
          <p v-if="newsItems.length > 0">
            {{ newsItems[1].newsDescription }}
          </p>

          <v-btn class="mt-3" color="black" variant="flat" text="Read More" to="/login" />
        </v-sheet>
      </v-col>
    </v-row>

    <!-- Second Row -->
    <v-row justify="center">
      <v-col cols="4">
        <v-sheet class="ma-2">
          <v-img height="30vh" cover v-if="newsItems.length > 0" :src="newsItems[2].newsImg"></v-img
        ></v-sheet>
        <v-sheet class="ma-2">
          <h3 v-if="newsItems.length > 0">
            {{ newsItems[2].newsTitle }}
          </h3>

          <p v-if="newsItems.length > 0">
            {{ newsItems[2].newsDescription }}
          </p>
          <v-btn class="mt-3" color="black" variant="flat" text="Read More" to="/login" />
        </v-sheet>
      </v-col>

      <v-col cols="4">
        <v-sheet class="ma-2" style="border-bottom: 1px solid #cecece">
          <v-img
            height="30vh"
            cover
            v-if="newsItems.length > 0"
            :src="newsItems[4].newsImg"
          ></v-img>
        </v-sheet>
        <v-sheet class="ma-2">
          <h3 v-if="newsItems.length > 0">
            {{ newsItems[4].newsTitle }}
          </h3>
          <p v-if="newsItems.length > 0">
            {{ newsItems[4].newsDescription }}
          </p>

          <v-btn class="mt-3" color="black" variant="flat" text="Read More" to="/login" />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>
