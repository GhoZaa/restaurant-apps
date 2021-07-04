import Detail from '../views/pages/detail';
import FavoriteRestaurant from '../views/pages/favorite-restaurant';
import Restaurants from '../views/pages/restaurants';

const routes = {
  '/': Restaurants,
  '/restaurant-list': Restaurants,
  '/detail/:id': Detail,
  '/favorite': FavoriteRestaurant,
};

export default routes;
