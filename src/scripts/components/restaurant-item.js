import CONFIG from '../globals/config';
import TextHelper from '../utils/text-helper';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="lazyload restaurant-item__thumbnail"
      data-src="${CONFIG.BASE_SMALL_IMAGE_URL + this._restaurant.pictureId}"
      width="300" height="200"
      alt="${this._restaurant.name}">
    <div class="restaurant-item__header">
        <p class="restaurant-item__city"><ion-icon name="location"></ion-icon> ${this._restaurant.city}</p>
        <p class="restaurant-item__rating"><ion-icon name="star" aria-label="rating"></ion-icon> ${this._restaurant.rating}</p>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant-item__name">
          <a href="${`/#/detail/${this._restaurant.id}`}">${this._restaurant.name}</a>
        </h3>
        <p class="restaurant-item__description">${TextHelper.limitText(this._restaurant.description, 400)}</p>
    </div>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
