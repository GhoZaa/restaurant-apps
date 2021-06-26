import Source from "../../data/source";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../templates/template-creator";

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await Source.detailRestaurant(url.id);
    // console.log(restaurant);
    const restaurantContainer = document.querySelector('#movie');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
  },
};

export default Detail;
