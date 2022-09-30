import './review-item';

class ReviewsContainer extends HTMLElement {
  set reviews(reviews) {
    this._reviews = reviews;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._reviews.forEach((review) => {
      const reviewElement = document.createElement('review-item');
      reviewElement.review = review;
      this.appendChild(reviewElement);
    });
  }
}

customElements.define('reviews-container', ReviewsContainer);
