class DrinksList extends HTMLElement {
  set drinks(drinks) {
    this._drinks = drinks;
    this.render();
  }

  render() {
    const drinksContainerElement = document.createElement('ul');
    this._drinks.forEach((drink) => {
      drinksContainerElement.innerHTML += `<li>${drink.name}</li>`;
    });
    this.appendChild(drinksContainerElement);
  }
}

customElements.define('drinks-list', DrinksList);
