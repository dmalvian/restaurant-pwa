import './restaurant-item';

class RestaurantsContainer extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;

    this.render();
  }

  render() {
    this.innerHTML = '';
    this._restaurants.forEach((restaurant) => {
      const restaurantElement = document.createElement('restaurant-item');
      restaurantElement.restaurant = restaurant;
      this.appendChild(restaurantElement);
    });
  }
}

customElements.define('restaurants-container', RestaurantsContainer);
