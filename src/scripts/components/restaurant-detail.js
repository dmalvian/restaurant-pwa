import CONFIG from '../globals/config';
import './categories-list';
import './foods-list';
import './drinks-list';
import './reviews-container';
import './review-form';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
    this.renderCategoriesList();
    this.renderFoodsList();
    this.renderDrinksList();
    this.renderReviewsContainer();
    this.renderReviewForm();
  }

  render() {
    this.innerHTML = `
    <img class="restaurant-detail__image"
      src="${CONFIG.BASE_MEDIUM_IMAGE_URL + this._restaurant.pictureId}"
      width="600" height="400"
      alt="${this._restaurant.name}">
    <div class="restaurant-detail__info-section">
      <h2 class="restaurant-detail__title">${this._restaurant.name}</h2>
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="location"></ion-icon> Address
      </h3>
      <p class="restaurant-detail__address">${this._restaurant.address}, ${this._restaurant.city}</p>
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="star" aria-label="rating"></ion-icon> Rating
      </h3>
      <p class="restaurant-detail__rating">${this._restaurant.rating}/5</p>
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="ellipsis-horizontal-circle"></ion-icon> Categories
      </h3>
      <categories-list></categories-list>
      <h3 class="restaurant-detail__subtitle">
          <ion-icon name="fast-food"></ion-icon> Foods
        </h3>
      <foods-list></foods-list>
      <h3 class="restaurant-detail__subtitle">
          <ion-icon name="cafe"></ion-icon> Drinks
      </h3>
      <drinks-list></drinks-list>
    </div>
    <div class="restaurant-detail__desc-section">
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="information-circle"></ion-icon> Description
      </h3>
      <p class="restaurant-detail__desc">${this._restaurant.description}</p>
    </div>
    <div class="restaurant-detail__reviews-section">
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="chatbubble-ellipses"></ion-icon> Customer Reviews
      </h3>
      <reviews-container></reviews-container>
      <h3 class="restaurant-detail__subtitle">
        <ion-icon name="pencil"></ion-icon> Write Your Review
      </h3>
      <review-form></review-form>
    </div>
    `;
  }

  renderCategoriesList() {
    this._categoriesList = document.querySelector('categories-list');
    this._categoriesList.categories = this._restaurant.categories;
  }

  renderFoodsList() {
    this._foodsList = document.querySelector('foods-list');
    this._foodsList.foods = this._restaurant.menus.foods;
  }

  renderDrinksList() {
    this._drinksList = document.querySelector('drinks-list');
    this._drinksList.drinks = this._restaurant.menus.drinks;
  }

  renderReviewsContainer() {
    this._reviewsContainer = document.querySelector('reviews-container');
    this._reviewsContainer.reviews = this._restaurant.customerReviews;
  }

  renderReviewForm() {
    this._reviewForm = document.querySelector('review-form');
    this._reviewForm.restaurantId = this._restaurant.id;
    this._reviewForm.reviewsContainer = this._reviewsContainer;
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
