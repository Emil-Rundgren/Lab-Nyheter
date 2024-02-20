import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sports from '../views/SportsView.vue'
import Science from '../views/ScienceView.vue'
import Business from '../views/BusinessView.vue'
import Health from '../views/HealthView.vue'
import LogInView from '../views/LogInView.vue'
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
      path: '/sports',
      name: 'sports',
      component: Sports
    },
    {
      path: '/science',
      name: 'science',
      component: Science
    },
    {
      path: '/business',
      name: 'business',
      component: Business
    },
    {
      path: '/health',
      name: 'health',
      component: Health
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})

export default router
