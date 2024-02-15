import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LogInView from '../views/LogInView.vue'
import Politices from '../views/PoliticesView.vue'
import Article from '../views/ArticleView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    },
    {
      path: '/politices',
      name: 'politices',
      component: Politices
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})

export default router
