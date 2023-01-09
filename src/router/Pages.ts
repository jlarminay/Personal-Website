import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SkillsView from '@/views/SkillsView.vue'
import PortfolioView from '@/views/PortfolioView.vue'

export default [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
  },
  {
    path: '/skills',
    name: 'SkillsView',
    component: SkillsView,
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView,
  },
]
