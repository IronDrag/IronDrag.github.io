import { gallery, galleryFilter, galleryItem, filterItem } from '/app/components/gallery.js';
import { sectionContact } from '/app/components/sectionContact.js';
import { sectionSlider } from '/app/components/sectionSlider.js';

export const mainPage = {
  name: 'MainPage',
  components: {
    sectionSlider,
    gallery,
    galleryFilter,
    galleryItem,
    filterItem,
    sectionContact,
  },
  data() {
    return {
      message: 'Welcome on my site',
      messages: (function* () {
        yield 'Hello';
        yield 'World';
        yield 'And Tosters';
        yield 'Bye bye...';
      })(),
    };
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
  },
  template: `
  <section-slider>
    <h2>Hello I'm <b>Iron_Drag</b></h2>
  </section-slider>
  <section id="About">
  <div class="wrap">			
      <h2 v-on:click="hello" class="pointer">About</h2>
      <p><b>{{ message }}</b></p>
      <div class="g@1x2" style="margin-bottom: 30px;" data-nosnippet>
          <section class="col">
              <h3>Back-end</h3>
              <ul>
                  <li><b>PHP</b> / <u>Java</u></li>
                  <li><b>MySQL</b> / <u>Firebase</u></li>
                  <li><b>IIS</b> / <u>NodeJS</u> / XAMP</li>
              </ul>
              <ul>
                  <li><b>Wordpress</b></li>
                  <li><u>Opencart</u></li>
                  <li>Strapi</li> 
                  <li>Joomla</li>                  			
              </ul>
              <h3>Front-end</h3>
              <ul>
                  <li><b>HTML 5</b> / SVG / XML</li>
                  <li><b>JavaScript</b> / <b>ES6</b> / <b>ES Next</b></li>
                  <li><b>CSS</b> / <b>SCSS</b> / <b>BEM</b></li>
              </ul>
              <ul>
                  <li><b>Vue</b> / <b>React</b> / <b>Redux</b> / Backbone</li>          
                  <li><b>Bootstrap</b> / <u>jQuery</u> / UI Kit</li>
                  <li><b>Twig</b> / <b>Pug</b></li>
                  <li><b>Webpack</b> / <u>Gulp</u></li>
              </ul>
              <ul>
                  <li><b>Photoshop</b> / <u>Illustrator</u></li>
                  <li><b>Adobe XD</b> / <b>Figma</b></li>
                  <li><b>3DsMax</b> / <b>Vray</b> / <u>Blender</u> / Maya</li>
              </ul>
          </section>
          <div class="col">
              <p>I'm interested in the partnership, full-time employment and remote job. 
                  Contact me by <a href="/#Contact" ><u>form below</u></a>, when i will answer you or send my full CV within 1–2&nbsp;working days.
              </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
                  but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
                  Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, 
                  but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.</p>
          </div>												
      </div>			
      <div class="about-design">				
          <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and 
          I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, 
          the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, 
          but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. 
          Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, 
          but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
          To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? 
          But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, 
          or one who avoids a pain that produces no resultant pleasure?</p>
  </div>
</section>

<section class="Img-fill"></section>

<section id="Portfolio" class="Portfolio">
  <div class="wrap">
      <h2>Portfolio</h2>
      <gallery>
          <template v-slot:default="gallery">									
              <ul class="Galery_ctrl">
                  <filter-item f-tag="All" :filtchoise="gallery.choise.All"></filter-item> 
                  <filter-item f-tag="Design" :filtchoise="gallery.choise.Design"></filter-item>
                  <filter-item f-tag="Model"  :filtchoise="gallery.choise.Model"></filter-item>
                  <filter-item f-tag="Web"  :filtchoise="gallery.choise.Web"></filter-item>	
                  <li title="Shift+Click - multiple selection">🛈 info</li>
              </ul>
              <transition-group name="portfolio-items" class="Galery__list" tag="div" :duration="1000">			
                  <!-- <gallery-item v-for="item in gallery.items" v-show="gallery.choise[item.tag] || gallery.choise.All" :key="item.id" :item="item" ></gallery-item> --> 
                  <gallery-item v-for="item in gallery.items" v-show="gallery.choise[item.tag] || gallery.choise.All" :key="item.id" :item="item" ></gallery-item>
              </transition-group>
          </template>
      </gallery>
  </div>
</section>

<section-contact />

<section class="to_top">
  <div class="wrap"><a href="#top">To top</a></div>
</section>`,
};
