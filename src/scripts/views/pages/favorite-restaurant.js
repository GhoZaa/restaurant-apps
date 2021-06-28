import FavoriteRestaurantIdb from "../../data/favorite-idb";
import { createRestaurantItemTemplate } from "../templates/template-creator";

const FavoriteRestaurant = {
  async render() {
    return `
        <div class="restaurant__data">
            <h2>Your Favorite Restaurant</h2>
            <div class="list" id="restaurants"></div>
        </div>
      `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector("#restaurants");
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML +=
        createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavoriteRestaurant;
