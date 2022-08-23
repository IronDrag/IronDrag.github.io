import { sectionSlider } from '/app/components/sectionSlider.js';
export const designPage = {
  name: 'DesignPage',
  components: {
    sectionSlider: sectionSlider,
  },
  template: `
<main>
<section-slider>
  <h2>My design portfolio</h2>
</section-slider>
</main>`,
};
