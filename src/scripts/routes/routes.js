import Detail from "../views/pages/detail";
import Restaurants from "../views/pages/restaurants";

const routes = {
  "/": Restaurants,
  "/restaurant-list": Restaurants,
  "/detail/:id": Detail,
};

export default routes;
