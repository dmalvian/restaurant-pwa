import Swal from 'sweetalert2';
import ApiSource from '../data/api-source';

class ReviewForm extends HTMLElement {
  set restaurantId(restaurantId) {
    this._restaurantId = restaurantId;
    this.render();
    this.setElements();
    this.setEventListeners();
  }

  set reviewsContainer(reviewsContainer) {
    this._reviewsContainer = reviewsContainer;
  }

  render() {
    this.innerHTML = `
    <form>
      <div class="form-input">
        <label for="name">Name<label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="form-input mt">
        <label for="name">Review<label>
        <textarea id="review" name="review" required></textarea>
      </div>
      <button type="submit" id="submitButton" class="btn mt">Submit</button>
    </form>
    `;
  }

  setElements() {
    this._btnSubmitElement = document.querySelector('#submitButton');
    this._nameElement = document.querySelector('#name');
    this._reviewElement = document.querySelector('#review');
  }

  setEventListeners() {
    this._btnSubmitElement.addEventListener('click', async (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (this.isAllFieldsFilled()) {
        const review = {
          id: this._restaurantId,
          name: this._nameElement.value,
          review: this._reviewElement.value,
        };
        const customerReviews = await ApiSource.addNewReview(review);
        this.updateReviewsContainer(customerReviews.customerReviews);
        this.clear();

        Swal.fire({
          title: 'Thank You!',
          text: 'Your review is submitted successfully.',
          icon: 'success',
          heightAuto: false,
        });
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'All fields must be filled.',
          icon: 'error',
          heightAuto: false,
        });
      }
    });
  }

  isAllFieldsFilled() {
    return this._nameElement.value && this._reviewElement.value;
  }

  updateReviewsContainer(reviews) {
    if (this._reviewsContainer) {
      this._reviewsContainer.reviews = reviews;
    }
  }

  clear() {
    this._nameElement.value = '';
    this._reviewElement.value = '';
  }
}

customElements.define('review-form', ReviewForm);
