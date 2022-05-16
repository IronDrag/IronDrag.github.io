export const galleryItem = {
  name: 'GalleryItem',
  props: ['item'],
  template: `<article class="Galery__item" @click="tost" :style="{ backgroundColor: item.color }">
                <div>
                  <h3><a :href="item.link" target="_blank">{{ item.title }}</a></h3>
                  <ul class="Tag_list">
                      <li v-for="label in item.labels" >{{ label }}</li>
                  </ul>
                </div>
            </article>`,
  methods: {
    tost() {},
  },
};
