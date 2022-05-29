import { mainPage, designPage, routes } from './pages/pagesLoader.js';

export const appRouter = VueRouter.createRouter({
    scrollBehavior: function (to, from, savedPosition) {
      if (to.hash) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ el: to.hash, behavior: 'smooth' });
          }, 500);
        });
      } else {
        return { x: 0, y: 0 };
      }
    },
    history: VueRouter.createWebHistory(),
    routes
});