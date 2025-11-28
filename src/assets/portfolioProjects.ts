export default [
  {
    id: 'luma-native-housing-society',
    name: "Lu'ma Native Housing Society.",
    poster: '_placeholders/600x400.svg',
    type: 'Professional',
    tools: ['Node', 'Vue3', 'Express', 'PostgreSQL'],
  },
  {
    id: 'gathering-our-voices',
    name: 'Gathering Our Voices.',
    poster: 'gathering_our_voices/slide1.png',
    type: 'Professional',
    tools: ['Node', 'Vue3', 'tRPC', 'PostgreSQL'],
  },
  {
    id: 'shortcut-king',
    name: 'Short(cut) King.',
    poster: '_placeholders/800x400.svg',
    type: 'Personal',
    tools: ['Godot', 'GDScript'],
  },
  {
    id: 'larminay-vault',
    name: 'Larminay Vault.',
    poster: 'larminay_vault/slide3.webp',
    type: 'Personal',
    tools: ['Node', 'Nuxt3', 'tRPC', 'Prisma', 'PostgreSQL', 'FFmpeg'],
  },
  {
    id: 'forgotten-photos',
    name: 'Forgotten.Photos.',
    poster: '_placeholders/800x400.svg',
    type: 'Personal',
    tools: ['Node', 'Nuxt3', 'tRPC', 'Prisma', 'PostgreSQL', 'FFmpeg'],
  },
  {
    id: 'vnfc-warriors',
    name: 'VNFC Warriors.',
    poster: 'vnfc_warriors/slide1.png',
    type: 'Professional',
    tools: ['Node'],
  },
  {
    id: 'swords-n-souls',
    name: 'Swords n Souls.',
    poster: 'swords_n_souls/slide1.webp',
    type: 'Personal',
    tools: ['Godot', 'GDScript'],
  },
  {
    id: 'elst',
    name: 'ELST.',
    poster: '_placeholders/400x600.svg',
    type: 'Professional',
    tools: ['Node', 'Vue3', 'Express', 'PostgreSQL'],
  },
  // {
  //   id: 'guess-the-movie',
  //   name: 'Guess The Movie.',
  //   poster: 'guess_the_movie/slide1.webp',
  //   type: 'Personal',
  //   tools: ['Node', 'Vue3'],
  // },
  {
    id: 'isparc',
    name: 'ISPARC.',
    poster: 'isparc/slide1.png',
    type: 'Professional',
    tools: ['PHP', 'MySQL'],
  },
  {
    id: 'ai-dino-runner',
    name: 'AI Dino Runner.',
    poster: 'ai_dino_runner/slide1.webp',
    type: 'Personal',
    tools: ['Python', 'Selenium'],
  },
  // {
  //   id: 'arcade_machine',
  //   name: 'Arcade Machine.',
  //   poster: 'arcade_machine/arcade_machine-slide1.webp',
  // },
  // {
  //   id: 'js-snake',
  //   name: 'JS Snake.',
  //   poster: 'js_snake/slide1.webp',
  //   tools: 'JavaScript.',
  // },
  // {
  //   id: 'cell-simulator',
  //   name: 'Cell Simulator.',
  //   poster: 'cell_simulator/cell_simulator-slide1.webp',
  // },
  // {
  //   id: 'victoria-titan',
  //   name: 'Victoria Titan.',
  //   poster: 'victoria_titan/victoria_titan-slide1.webp',
  // },
  {
    id: 'floor-check-report',
    name: 'Floor Check Report.',
    poster: 'floor_check_report/slide1.webp',
    type: 'Personal',
    tools: ['PHP'],
  },
] as {
  id: string;
  name: string;
  poster: string;
  type: 'Professional' | 'Personal';
  tools: string[];
}[];
