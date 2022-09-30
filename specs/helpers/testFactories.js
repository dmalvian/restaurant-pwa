import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteToggle: document.querySelector('favorite-toggle'),
    restaurant,
  });
};

export { createFavoriteButtonPresenterWithRestaurant };
