import Item1 from '@/views/portfolio/item1.vue'
import swordsnsouls from '@/views/portfolio/swords_n_souls.vue'
import jssnake from '@/views/portfolio/js_snake.vue'

export default [
  {
    path: '/portfolio/item1',
    name: 'Portfolio/Item1',
    component: Item1,
  },

  {
    path: '/portfolio/swords-n-souls',
    name: 'Portfolio/swords_n_souls',
    component: swordsnsouls,
  },
  {
    path: '/portfolio/js-snake',
    name: 'Portfolio/js_snake',
    component: jssnake,
  },
]
