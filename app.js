export const mainApp = {
  name: 'App',
  data() {
    return {
      gfThx: false,
      //choise: 'hello',
    };
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
};
