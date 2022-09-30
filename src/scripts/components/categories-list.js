class CategoriesList extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    const categoriesContainerElement = document.createElement('ul');
    this._categories.forEach((category) => {
      categoriesContainerElement.innerHTML += `<li>${category.name}</li>`;
    });
    this.appendChild(categoriesContainerElement);
  }
}

customElements.define('categories-list', CategoriesList);
