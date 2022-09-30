import UrlParser from '../../routes/url-parser';
import ApiSource from '../../data/api-source';
import '../../components/restaurant-detail';
import '../../components/favorite-toggle';
import '../../components/loading-bar';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';

const Detail = {
  async render() {
    return `
      <section id="content" class="content">
        <loading-bar></loading-bar>
        <restaurant-detail></restaurant-detail>
        <favorite-toggle></favorite-toggle>
      </section>
    `;
  },

  async afterRender() {
    this.restaurantDetail = document.querySelector('restaurant-detail');
    this.loadingBar = document.querySelector('loading-bar');
    this.loadingBar.reloadClickListener = async () => {
      await this.loadData();
    };

    await this.loadData();
  },

  async loadData() {
    this.loadingBar.render();
    this.loadingBar.show();

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await ApiSource.detailRestaurant(url.id);
      if (!restaurant.error) {
        this.loadingBar.hide();
        this.restaurantDetail.restaurant = restaurant.restaurant;

        FavoriteButtonPresenter.init({
          favoriteToggle: document.querySelector('favorite-toggle'),
          restaurant: restaurant.restaurant,
        });
      } else {
        this.loadingBar.renderEmptyFallback();
      }
    } catch (error) {
      this.loadingBar.renderOfflineFallback();
    }
  },
};

export default Detail;
