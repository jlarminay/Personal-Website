import arcade_machine from '@/views/items/arcade_machine.vue'
import personal_website from '@/views/items/personal_website.vue'
import swords_n_souls from '@/views/items/swords_n_souls.vue'
import js_snake from '@/views/items/js_snake.vue'
import larminay_vault from '@/views/items/larminay_vault.vue'
import cell_simulator from '@/views/items/cell_simulator.vue'
import victoria_titan from '@/views/items/victoria_titan.vue'
import floor_check_report from '@/views/items/floor_check_report.vue'
import ai_dino_runner from '@/views/items/ai_dino_runner.vue'

export default [
  {
    path: '/items/arcade-machine',
    name: 'Portfolio/arcade_machine',
    component: arcade_machine,
    meta: { title: 'Arcade Machine. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/personal-website',
    name: 'Portfolio/personal_website',
    component: personal_website,
    meta: { title: 'Personal Website. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/swords-n-souls',
    name: 'Portfolio/swords_n_souls',
    component: swords_n_souls,
    meta: { title: 'Swords n Souls. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/js-snake',
    name: 'Portfolio/js_snake',
    component: js_snake,
    meta: { title: 'JS Snake. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/larminay-vault',
    name: 'Portfolio/larminay_vault',
    component: larminay_vault,
    meta: { title: 'Larminay Vault. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/cell-simulator',
    name: 'Portfolio/cell_simulator',
    component: cell_simulator,
    meta: { title: 'Cell Simulator. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/victoria-titan',
    name: 'Portfolio/victoria_titan',
    component: victoria_titan,
    meta: { title: 'Victoria Titan. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/floor-check-report',
    name: 'Portfolio/floor_check_report',
    component: floor_check_report,
    meta: { title: 'Floor Check Report. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/items/ai-dino-runner',
    name: 'Portfolio/ai_dino_runner',
    component: ai_dino_runner,
    meta: { title: 'AI Dino Runner. | Portfolio. | Josh Larminay.' },
  },
]
