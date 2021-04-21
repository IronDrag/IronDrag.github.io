export const galleryFilter = {
  data() {
    return {
      bubadub: 'Hello',
    };
  },
  inject: ['filterHandler'],
  props: ['fTag', 'filtchoise'],
  template: `<ul class="Galery_ctrl">
                <slot></slot>
            </ul>`,
};
