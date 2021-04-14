export const galleryFilter = {
  inject: ['filterHandler'],
  props: ['fTag', 'filtchoise'],
  template: '<ul class="Galery_ctrl">' + '<slot></slot>' + '</ul>',
};
