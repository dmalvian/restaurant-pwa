import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const FavoriteButtonPresenter = {
  async init({ favoriteToggle, restaurant }) {
    this._favoriteToggle = favoriteToggle;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderUnfavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteToggle.active = false;
    this._favoriteToggle.clickListener = async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    };
  },

  _renderUnfavorite() {
    this._favoriteToggle.active = true;
    this._favoriteToggle.clickListener = async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    };
  },
};

export default FavoriteButtonPresenter;
