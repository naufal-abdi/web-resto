import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';
import { createCustomerReviewsTemplate } from '../views/templates/template-creator';

const ReviewFormInitiator = {
  init({ sendButton, id }) {
    this._id = id;
    sendButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.sendReview();
    });
  },

  async sendReview() {
    const data = JSON.stringify({
      id: this._id,
      name: document.querySelector('#nama').value,
      review: document.querySelector('#komentar').value,
    });

    const send = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: data,
    });

    const sendResult = await send.json();
    if (sendResult.error === false) {
      const reviewsContainer = document.querySelector('#customerReviewsDetail');
      reviewsContainer.innerHTML = '';
      const reviewsData = sendResult.customerReviews;

      reviewsData.forEach((review) => {
        reviewsContainer.innerHTML += createCustomerReviewsTemplate(review);
      });
    }
  },
};

export default ReviewFormInitiator;
