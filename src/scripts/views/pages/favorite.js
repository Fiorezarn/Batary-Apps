import FavoriteRestaurantDB from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../template/template-creator';

const favorite = {
  async render() {
    return `
      <div class="content">
        <h1 class="favorite-heading">Restaurant Favorite</h1>
        <div id="resto-favorite" class="card_list">
        </div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantDB.getAllRestaurants();
    const restaurantsContainer = document.querySelector('.card_list');

    if (resto.length === 0) {
      restaurantsContainer.innerHTML = `
      <h3 class="nothing">Tidak Ada Favorite</h3>
      `;
    } else {
      const totalRest = resto.length;

      resto.forEach((restaurant, index) => {
        restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant, index, totalRest);
      });
    }
  },
};

export default favorite;
