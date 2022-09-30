class ReviewItem extends HTMLElement {
  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.innerHTML = `
    <p class="review-item__name">${this._review.name}</p>
    <p class="review-item__date">${this._review.date}</p>
    <p class="review-item__review">${this._review.review}</p>
    `;
  }
}

customElements.define('review-item', ReviewItem);
