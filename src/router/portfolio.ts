import arcade_machine from '@/views/portfolio/arcade_machine.vue';
import swords_n_souls from '@/views/portfolio/swords_n_souls.vue';
import js_snake from '@/views/portfolio/js_snake.vue';
import larminay_vault from '@/views/portfolio/larminay_vault.vue';
import cell_simulator from '@/views/portfolio/cell_simulator.vue';
import victoria_titan from '@/views/portfolio/victoria_titan.vue';
import floor_check_report from '@/views/portfolio/floor_check_report.vue';
import ai_dino_runner from '@/views/portfolio/ai_dino_runner.vue';
import guess_the_movie from '@/views/portfolio/guess_the_movie.vue';
import gathering_our_voices from '@/views/portfolio/gathering_our_voices.vue';
import luma_native_housing_society from '@/views/portfolio/luma_native_housing_society.vue';
import elst from '@/views/portfolio/elst.vue';
import isparc from '@/views/portfolio/isparc.vue';

export default [
  {
    path: '/portfolio/arcade-machine',
    name: 'Portfolio/arcade_machine',
    component: arcade_machine,
    meta: { title: 'Arcade Machine. | Portfolio. | Josh Larminay.' },
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
  {
    path: '/portfolio/guess-the-movie',
    name: 'Portfolio/guess_the_movie',
    component: guess_the_movie,
    meta: { title: 'Guess The Movie. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/gathering-our-voices',
    name: 'Portfolio/gathering_our_voices',
    component: gathering_our_voices,
    meta: { title: 'Gathering Our Voices. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/luma-native-housing-society',
    name: 'Portfolio/luma_native_housing_society',
    component: luma_native_housing_society,
    meta: { title: "Lu'ma Native Housing Society. | Portfolio. | Josh Larminay." },
  },
  {
    path: '/portfolio/elst',
    name: 'Portfolio/elst',
    component: elst,
    meta: { title: 'ELST. | Portfolio. | Josh Larminay.' },
  },
  {
    path: '/portfolio/isparc',
    name: 'Portfolio/isparc',
    component: isparc,
    meta: { title: 'ISPARC. | Portfolio. | Josh Larminay.' },
  },
];
