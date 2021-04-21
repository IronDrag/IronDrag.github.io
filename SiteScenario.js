import { mainApp } from '/app.js';
import { mainPage, designPage } from '/pages/pagesLoader.js';

console.log('All systems successful run!');
const site = {
  gfThx: false,
  subMenu: false,
};

document.body.style.overflow = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  const appRouter = VueRouter.createRouter({
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
    routes: [
      { path: '/', component: mainPage },
      { path: '/design', component: designPage },
    ],
  });

  const app = Vue.createApp(mainApp);
  app.use(appRouter);
  app.mount('#mySite');

  let ovrlScrn = document.querySelector('.overlay-screen');
  setTimeout(function () {
    ovrlScrn.style.opacity = 0;
  }, 2000);
  setTimeout(function () {
    ovrlScrn.style.display = 'none';
    document.body.style.overflowY = 'auto';
  }, 3000);

  document.querySelector('.sub-nav').addEventListener('click', function () {
    site.subMenu = !site.subMenu;
    this.classList.toggle('_active', site.subMenu);
  });
});
