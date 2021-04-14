export const filterItem = {
  inject: ['filterHandler'],
  props: ['fTag', 'filtchoise'],
  template:
    '<li :class="{ _active: filtchoise }" @click.exact="filterHandler(fTag)" @click.shift.exact="filterHandler(fTag,true)" >' +
    '{{ fTag }}' +
    '</li>',
};
