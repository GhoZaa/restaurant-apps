import Source from '../../data/source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurants = {
  async render() {
    return `
        <div class="restaurant__data">
            <h2>Find Restaurant</h2>
            <div class="list" id="restaurants"></div>
         </div>
    `;
  },

  async afterRender() {
    const restaurants = await Source.restaurantList();
    // console.log(restaurants);
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurants;
