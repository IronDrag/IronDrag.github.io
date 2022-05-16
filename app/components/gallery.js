export const gallery = {
  name: 'Gallery',
  template: `<div>                
                <slot :choise='choise' :items='items'></slot>
            </div>`,
  data() {
    return {
      bubadub: 'Hello',
      choise: {
        All: true,
        Design: false,
        Model: false,
        Web: false,
      },
      items: [],
    };
  },
  computed: {
    filteredItems() {
      if (this.choise.All) return this.items;
      return this.items.filter((el, i, arr) => this.choise[el.tag]);
    },
  },
  methods: {
    filterCount(tost) {
      for (const item in this.choise) {
        if (this.choise[item] && item != tost) return true;
      }
      return false;
    },
    filterHandler(item, modK) {
      const buf = { All: false, Design: false, Model: false, Web: false };

      if (item == 'All')
        return (this.choise = { ...buf, All: true, Design: true, Web: true, Model: true });
      if (modK) return (this.choise = { ...this.choise, [item]: true });

      return (this.choise = { ...buf, [item]: true });

      /* if (item == 'All') {
        this.choise = { All: true, Design: false, Model: false, Web: false };
        return;
      }

      this.choise.All = false;

      if (!modK) {
        this.choise = { ...this.choise, [item]: true };
        return;
      } else {
        if (this.choise.All == false && this.choise[item] == true && this.filterCount(item)) {
          this.choise[item] = false;
          return;
        } else {
          this.choise[item] = true;
          return;
        }
      }*/
    },
  },
  created() {
    fetch('/api/getPortfolioItems.json')
      .then((responce) => responce.json())
      .then((json) => {
        this.items = json[1];
      });
  },
  provide: function () {
    return {
      filterHandler: this.filterHandler,
    };
  },
};

export { galleryFilter } from '/app/components/galleryFilter.js';
export { galleryItem } from '/app/components/galleryItem.js';
export { filterItem } from '/app/components/galleryFilterItem.js';
