import { createRouter, createWebHistory } from 'vue-router'

import Pages from './Pages'
import Portfolio from './Portfolio'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes: [...Pages, ...Portfolio],
})

router.afterEach((to, from) => {
  document.title = to.meta.title || 'Josh Larminay'
})

export default router
