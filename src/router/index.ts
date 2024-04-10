import { createRouter, createWebHistory } from 'vue-router';

import pages from './pages';
import portfolio from './portfolio';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(_to, _from, _savedPosition) {
    return { top: 0 };
  },
  routes: [...pages, ...portfolio],
});

router.afterEach((to, _from) => {
  const newTitle = to.meta.title || 'Josh Larminay';
  document.title = newTitle.toString();
});

export default router;
