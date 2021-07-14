import FavoriteRestaurantIdb from '../../data/favorite-idb';
import { createEmptyPage, createRestaurantItemTemplate } from '../templates/template-creator';

const FavoriteRestaurant = {
  async render() {
    return `
        <div class="restaurant__data">
            <h2>Your Favorite Restaurant</h2>
            <div class="list" id="restaurants"></div>
            <div id="error"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('#error');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    console.log(restaurants);
    if (restaurants.length === 0) {
      errorContainer.innerHTML = createEmptyPage();
    } else {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    }
  },
};

export default FavoriteRestaurant;
