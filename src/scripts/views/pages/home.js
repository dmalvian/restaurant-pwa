import ApiSource from '../../data/api-source';
import '../../components/restaurants-container';
import '../../components/loading-bar';

const Home = {
  async render() {
    return `
      <section class="content">
        <h2 class="content__title">Explore Restaurants</h2>
        <loading-bar></loading-bar>
        <restaurants-container></restaurants-container>
      </section>
    `;
  },

  async afterRender() {
    this.restaurantsContainer = document.querySelector('restaurants-container');
    this.loadingBar = document.querySelector('loading-bar');
    this.loadingBar.reloadClickListener = async () => {
      await this.afterRender();
    };

    await this.loadData();
  },

  async loadData() {
    this.loadingBar.render();
    this.loadingBar.show();

    try {
      const restaurants = await ApiSource.listRestaurants();
      if (restaurants.length > 0) {
        this.loadingBar.hide();
        this.restaurantsContainer.restaurants = restaurants;
      } else {
        this.loadingBar.renderEmptyFallback();
      }
    } catch (error) {
      this.loadingBar.renderOfflineFallback();
    }
  },
};

export default Home;
