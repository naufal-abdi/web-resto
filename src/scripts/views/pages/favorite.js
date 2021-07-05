import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate, createEmptyItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="resto" id="restoData">
      <h1 class="resto-label">Restoran Favorite</h1>
      <div class="resto-cards" id="restoCards">

      </div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllRestos();
    const restaurantsContainer = document.querySelector('#restoCards');

    if (!restaurants.length) {
      restaurantsContainer.innerHTML = createEmptyItemTemplate();
      return;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
