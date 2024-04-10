import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import SkillsView from '@/views/SkillsView.vue';
import PortfolioView from '@/views/PortfolioView.vue';

export default [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: { title: 'Josh Larminay.' },
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView,
    meta: { title: 'About. | Josh Larminay.' },
  },
  {
    path: '/skills',
    name: 'SkillsView',
    component: SkillsView,
    meta: { title: 'Skills. | Josh Larminay.' },
  },
  {
    path: '/portfolio',
    name: 'PortfolioView',
    component: PortfolioView,
    meta: { title: 'Portfolio. | Josh Larminay.' },
  },
];
