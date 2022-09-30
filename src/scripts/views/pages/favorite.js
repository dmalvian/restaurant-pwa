import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../components/restaurants-container';
import '../../components/loading-bar';

const Favorite = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__title">My Favorite Restaurants</h2>
        <loading-bar></loading-bar>
        <restaurants-container></restaurants-container>
      </section>
    `;
  },

  async afterRender() {
    this.restaurantsContainer = document.querySelector('restaurants-container');
    this.loadingBar = document.querySelector('loading-bar');
    this.loadingBar.reloadClickListener = async () => {
      await this.loadData();
    };

    await this.loadData();
  },

  async loadData() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length > 0) {
      this.loadingBar.hide();
      this.restaurantsContainer.restaurants = restaurants;
    } else {
      this.loadingBar.renderEmptyFallback();
    }
  },
};

export default Favorite;
