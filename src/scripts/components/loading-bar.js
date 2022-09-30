class LoadingBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set reloadClickListener(listener) {
    this._reloadClickListener = listener;
  }

  render() {
    this.innerHTML = `
    <div class="loading__container">
      <img class="loading__image" src="/spinner.svg" width="75" height="75" crossorigin="anonymous" alt="Loading Spinner">
      <h3 class="loading__title">Loading</h3>
    </div>
    `;
  }

  renderEmptyFallback() {
    this.innerHTML = `
    <div class="fallback__container">
      <img class="fallback__image" src="/emojis/sorry.svg" width="75" crossorigin="anonymous" height="75" alt="Sad Emoji">
      <h3 class="fallback__title">Sorry</h3>
      <p class="fallback__info">No Item Available</p>
    </div>
    `;
  }

  renderOfflineFallback() {
    this.innerHTML = `
    <div class="fallback__container">
      <img class="fallback__image" src="/emojis/astonished.svg" width="75" height="75" crossorigin="anonymous" alt="Astonished Emoji">
      <h3 class="fallback__title">Oops</h3>
      <p class="fallback__info">You Are Offline</p>
      <button id="reloadButton" class="btn mt">Reload</button>
    </div>
    `;
    const reloadButton = document.querySelector('#reloadButton');
    reloadButton.addEventListener('click', this._reloadClickListener);
  }

  hide() {
    this.classList.add('hidden');
  }

  show() {
    this.classList.remove('hidden');
  }
}

customElements.define('loading-bar', LoadingBar);
