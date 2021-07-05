import UrlParser from '../../routes/url-parser';
import DataSource from '../../data/data-source';
import {
  createRestoDetailTemplate,
  createCustomerReviewsTemplate,
  createLikeRestoButtonTemplate,
  createFailRequestTemplate,
} from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import ReviewFormInitiator from '../../utils/review-form-initiator';

const Detail = {
  async render() {
    return `
    <article class="resto-detail" id="restoDetail">

    </article>   
    <div class="customer-reviews">
      <h2>Komentar</h2>
      <form class="review-form" id="reviewForm" enctype="multipart/form-data">
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" name="nama" id="nama" class="form-input" placeholder="Misal: Andi"/>
        </div>
        <div class="form-group">
          <label for="komentar">Komentar Kamu</label>
          <textarea name="komentar" id="komentar" cols="30" rows="2" class="form-input" placeholder="Misal: Mantap 👍"></textarea>
        </div>
        <div class="form-button">
          <button type="submit" class="order-form-button" id="sendButton">Kirim <i class="fas fa-paper-plane"></i></button>
        </div>
      </form>
      <div class="customer-reviews-detail" id="customerReviewsDetail"></div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi yang akan dipanggil setelah render() dijalankan
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const restaurantsContainer = document.querySelector('#restoDetail');

    if (restaurant === undefined) {
      restaurantsContainer.innerHTML = createFailRequestTemplate();
      return;
    }

    restaurantsContainer.innerHTML = createRestoDetailTemplate(restaurant);

    const reviewsContainer = document.querySelector('#customerReviewsDetail');
    const reviewsData = restaurant.customerReviews;
    reviewsData.forEach((review) => {
      reviewsContainer.innerHTML += createCustomerReviewsTemplate(review);
    });

    const likeButtonContainer = document.querySelector('#likeButtonContainer');
    likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        rating: restaurant.rating,
      },
    });

    ReviewFormInitiator.init({
      sendButton: document.querySelector('#sendButton'),
      id: restaurant.id,
    });
  },
};

export default Detail;
