console.log('All systems successful run!');
const site = {
  gfThx: false,
  subMenu: false,
};

document.body.style.overflow = 'hidden';

document.addEventListener('DOMContentLoaded', () => {
  const tost = {
    data() {
      return {
        portfolio: {
          choise: {
            All: true,
            Design: false,
            Model: false,
            Web: false,
          },
          items: [],
        },
        gfThx: false,
        message: 'Welcome on my site',
        messages: (function* () {
          yield 'Hello';
          yield 'World';
          yield 'And Tosters';
          yield 'Bye bye...';
        })(),
      };
    },
    created() {
      fetch('/assets/portfolio-web.json')
        .then((responce) => responce.json())
        .then((json) => {
          this.portfolio.items = json;
        });
    },
    methods: {
      hello(t) {
        const gen = this.messages.next();
        if (gen.done) {
          t.target.classList.remove('pointer');
          return;
        }
        this.message = gen.value;
      },
      filterCount(tost) {
        for (const item in this.portfolio.choise) {
          if (this.portfolio.choise[item] && item != tost) return true;
        }
        return false;
      },
      filterHandler(item, modK) {
        if (item == 'All') {
          this.portfolio.choise = { All: true, Design: false, Model: false, Web: false };
          return true;
        }

        this.portfolio.choise.All = false;

        if (!modK) {
          let tost = { All: false, Design: false, Model: false, Web: false };
          tost[item] = true;
          this.portfolio.choise = tost;
          return true;
        } else {
          if (
            this.portfolio.choise.All == false &&
            this.portfolio.choise[item] == true &&
            this.filterCount(item)
          ) {
            this.portfolio.choise[item] = false;
            return true;
          } else {
            this.portfolio.choise[item] = true;
            return true;
          }
        }
      },
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
        for (const item in this.portfolio.choise) {
          if (this.portfolio.choise[item] && item != tost) return true;
        }
        return false;
      },
    },
    provide: function () {
      return {
        filterHandler: this.filterHandler,
      };
    },
  };

  const app = Vue.createApp(tost);

  app.component('gallery', {
    props: [],
    template: '<div>' + '<slot></slot>' + '</div>',
  });

  app.component('gallery-filter', {
    inject: ['filterHandler'],
    props: ['fTag', 'filtchoise'],
    template: '<ul class="Galery_ctrl">' + '<slot></slot>' + '</ul>',
  });

  app.component('filter-item', {
    inject: ['filterHandler'],
    props: ['fTag', 'filtchoise'],
    template:
      '<li :class="{ _active: filtchoise }" @click.exact="filterHandler(fTag)" @click.shift.exact="filterHandler(fTag,true)" >' +
      '{{ fTag }}' +
      '</li>',
  });

  app.component('gallery-item', {
    props: ['item'],
    template:
      '<article class="Galery__item" @click="tost" :style="{ backgroundColor: item.color }">' +
      '<div>' +
      '<h3>{{ item.title }}</h3>' +
      '<ul class="Tag_list">' +
      '<li v-for="label in item.labels" >{{ label }}</li>' +
      '</ul>' +
      '</div>' +
      '</article>',
    methods: {
      tost() {},
    },
  });

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
