import Source from '../../data/source';
import { createErrorLoadContent, createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
        <div class="restaurant__data">
            <h2>Find Restaurant</h2>
            <div class="list" id="restaurants"></div>
            <div id="error"></div>
         </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    const errorContainer = document.querySelector('#error');
    try {
      const restaurants = await Source.restaurantList();
      console.log(restaurants);
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML
          += createRestaurantItemTemplate(restaurant);
      });
    } catch (error) {
      console.log(error);
      errorContainer.innerHTML = createErrorLoadContent();
    }
  },
};

export default Restaurants;
