import { createRouter, createWebHistory } from 'vue-router'

import Pages from './Pages'
import Portfolio from './Portfolio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...Pages, ...Portfolio],
})

export default router
