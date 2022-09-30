class FoodsList extends HTMLElement {
  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  render() {
    const foodsContainerElement = document.createElement('ul');
    this._foods.forEach((food) => {
      foodsContainerElement.innerHTML += `<li>${food.name}</li>`;
    });
    this.appendChild(foodsContainerElement);
  }
}

customElements.define('foods-list', FoodsList);
