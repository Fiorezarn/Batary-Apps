import RestauranAppsSource from '../../data/restaurantapps-source';
import { createRestoItemTemplate } from '../template/template-creator';
// eslint-disable-next-line import/extensions
import '../../component/testimonial.js';

const home = {
  async render() {
    return `
    <battary-hero></battary-hero>
  <section class="content">
          <h1 class="judul">Explore Restaurant</h1>
          <div class="card_list" id="list"></div>
  </section>

  <battary-testi></battary-testi>
      `;
  },

  async afterRender() {
    const restaurants = await RestauranAppsSource.home();
    const restaurantsitem = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantsitem.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default home;
