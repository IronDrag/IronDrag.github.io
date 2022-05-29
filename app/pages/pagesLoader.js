import { mainPage } from './main.js';
import { designPage } from './design.js';

export const routes = [
      { path: '/', component: mainPage },
      { path: '/design', component: designPage },
];

export { mainPage, designPage };