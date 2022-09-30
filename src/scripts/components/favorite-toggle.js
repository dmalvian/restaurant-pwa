class FavoriteToggle extends HTMLElement {
  set active(active) {
    this._active = active;
    this.render();
  }

  render() {
    if (this._active) {
      this.renderUnfavorite();
    } else {
      this.renderFavorite();
    }
    this._favoriteToggle = document.querySelector('#favoriteToggle');
  }

  renderFavorite() {
    this.innerHTML = `
    <button aria-label="add to favorite restaurants" id="favoriteToggle" class="favorite">
      <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
    </button>
    `;
  }

  renderUnfavorite() {
    this.innerHTML = `
    <button aria-label="remove from favorite restaurants" id="favoriteToggle" class="favorite">
      <ion-icon name="heart" aria-hidden="true"></ion-icon>
    </button>
    `;
  }

  set clickListener(listener) {
    this._favoriteToggle.addEventListener('click', listener);
  }
}

customElements.define('favorite-toggle', FavoriteToggle);
