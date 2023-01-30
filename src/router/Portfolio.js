import arcade_machine from '@/views/portfolio/arcade_machine.vue'
import personal_website from '@/views/portfolio/personal_website.vue'
import swords_n_souls from '@/views/portfolio/swords_n_souls.vue'
import js_snake from '@/views/portfolio/js_snake.vue'
import larminay_vault from '@/views/portfolio/larminay_vault.vue'
import cell_simulator from '@/views/portfolio/cell_simulator.vue'
import victoria_titan from '@/views/portfolio/victoria_titan.vue'
import floor_check_report from '@/views/portfolio/floor_check_report.vue'
import ai_dino_runner from '@/views/portfolio/ai_dino_runner.vue'

export default [
  {
    path: '/portfolio/arcade-machine',
    name: 'Portfolio/arcade_machine',
    component: arcade_machine,
    meta: { title: 'Arcade Machine. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/personal-website',
    name: 'Portfolio/personal_website',
    component: personal_website,
    meta: { title: 'Personal Website. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/swords-n-souls',
    name: 'Portfolio/swords_n_souls',
    component: swords_n_souls,
    meta: { title: 'Swords n Souls. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/js-snake',
    name: 'Portfolio/js_snake',
    component: js_snake,
    meta: { title: 'JS Snake. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/larminay-vault',
    name: 'Portfolio/larminay_vault',
    component: larminay_vault,
    meta: { title: 'Larminay Vault. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/cell-simulator',
    name: 'Portfolio/cell_simulator',
    component: cell_simulator,
    meta: { title: 'Cell Simulator. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/victoria-titan',
    name: 'Portfolio/victoria_titan',
    component: victoria_titan,
    meta: { title: 'Victoria Titan. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/floor-check-report',
    name: 'Portfolio/floor_check_report',
    component: floor_check_report,
    meta: { title: 'Floor Check Report. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/ai-dino-runner',
    name: 'Portfolio/ai_dino_runner',
    component: ai_dino_runner,
    meta: { title: 'AI Dino Runner. | Portfolio. | Josh Larminay.' },
  },
]
