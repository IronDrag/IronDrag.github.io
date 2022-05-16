export const sectionSlider = {
  name: 'sectionSlider',
  data(){ 
   return {
    mainSlider: [{ title: 'First' },{ title: 'Second' },{ title: 'Third' }]
   }
  },
  template: `<section id="First-screen">
  <div>
      <slot></slot>
  </div>
  <nav style="position: absolute; bottom: 0; color: #fff; padding: 15px;"><input v-for="item in mainSlider" type='button' :title='item.title'/></nav>
</section>`,
};
