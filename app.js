import { mainPage, designPage } from './app/pages/pagesLoader.js';

(function(){
  let ovrlScrn = null;

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

  const mainApp = {
  name: 'App',
  data() {
    return {
      gfThx: false,
      //choise: 'hello',
    };
  },
  mounted(){
  	ovrlScrn = document.querySelector('.overlay-screen');
	ovrlScrn.style.opacity = 0;
	setTimeout(function () {
          ovrlScrn.style.display = 'none';
          document.body.style.overflowY = 'auto';
        }, 500);
  }, 
  methods: {
    submitForm(event) {
      setTimeout(() => {
        event.target.reset();
      }, 1000);

      this.gfThx = true;
      gtag('event', 'contact');
    },
    loadForm() {
      if (this.gfThx) {
        //window.location='/';
        setTimeout(() => {
          this.gfThx = false;
        }, 10000);
      }
    },
  },
  watch: {
    choise(tost) {
      for (const item in this.choise) {
        if (this.choise[item] && item != tost) return true;
      }
      return false;
    },
  },
}
  const app = Vue.createApp(mainApp);
  app.use(appRouter);
  app.mount('#mySite');
})();
