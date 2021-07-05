import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createCategories = (categories) => {
  let allCategory = '';
  categories.forEach((category) => {
    allCategory += `${category.name}, `;
  });

  return allCategory;
};

const createMenu = (menus) => {
  let allMenu = '';
  menus.forEach((menu) => {
    allMenu += `<li class="menu-item">${menu.name}</li>`;
  });

  return allMenu;
};

const createRestoItemTemplate = (restaurant) => {
  const shortDescription = restaurant.description.substr(0, 240);
  return ` <article class="post-item">
            <img class="post-item-thumbnail lazyload"
                width="300"
                height="400"
                data-src=${CONFIG.SMALL_RES + restaurant.pictureId}
                alt="${restaurant.name}"
                crossorigin="anonymous">
            <div class="post-item-content"> 
                <p class="post-item-info"><span><i class="fas fa-map-marker-alt"></i> Kota ${restaurant.city} | <i class="fas fa-star"></i> ${restaurant.rating}</span>
                </p>                     
                <h1 class="post-item-title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
                <p class="post-item-description">${shortDescription}...</p>                      
            </div>
          </article>
`;
};

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this restaurant" class="like-button info-item" id="likeButton">
    <span>Sukai</span>
    <i class="fas fa-thumbs-up"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this restaurant" class="liked-button info-item" id="likeButton">
    <span>Disukai</span>
    <i class="fas fa-thumbs-up"></i>
  </button>
`;

const createRestoDetailTemplate = (restaurant) => `    
    <h2>${restaurant.name}</h2>
    <hr>
    <div class="resto-detail-img">
      <img 
      src=${CONFIG.LARGE_RES + restaurant.pictureId}
      alt="${restaurant.name}"
      crossorigin="anonymous"/>
    </div>
    <div class="resto-detail-info">    
      <p class="resto-location info-item"><i class="fas fa-map-marker-alt"></i> ${restaurant.address}, ${restaurant.city}</p>
      <p class="info-item"><i class="fas fa-tags"></i> ${createCategories(restaurant.categories)}</p>
      <p class="rating info-item"><i class="fas fa-star"></i> ${restaurant.rating}</p>
      <div id="likeButtonContainer"></div>
    </div>
    <div class="resto-menu">   
      <ul class="food-menu">
        <li class="menu-title"><i class="fas fa-utensils"></i> Makanan:</li>
        ${createMenu(restaurant.menus.foods)}
      </ul>      
      <ul class="food-menu">
        <li class="menu-title"><i class="fas fa-wine-glass"></i> Minuman:</li>
        ${createMenu(restaurant.menus.drinks)}
      </ul>
    </div>
    <p>${restaurant.description}</p>  
`;

const createCustomerReviewsTemplate = (review) => `
  <div class="reviews-detail">
    <h3 class="reviewer">${review.name}</h3>
    <p class="review-date"><span><i class="fas fa-calendar-alt"></i> ${review.date}</span></p>
    <p class="review-text">${review.review}</p>
  </div>
`;

const createFailRequestTemplate = () => `
  <div class="fail-box">
    <p class="empty-icon"><i class="fas fa-exclamation-triangle"></i></p>
    <h3 class="empty-title">Terjadi Kesalahan Saat Mencoba Me-<b>request</b> Data dari <b>API</b></h3>
    <hr>
  </div>
`;

const createEmptyItemTemplate = () => `
  <div class="empty-box">
    <p class="empty-icon"><i class="fas fa-heart-broken"></i></p>
    <h3 class="empty-title">Oopss.. Belum Ada Item yang Disukai</h3>
    <hr>
  </div>
`;

const createPageNotFoundTemplate = () => `
  <div class="warning-box">
    <p class="empty-icon"><i class="fas fa-ban"></i></p>
    <h1 class="warning-title">Page Not Found</h1>
    <hr>        
    <p class="warning-text">Mohon Maaf Halaman yang Anda Cari Tidak Ditemukan</p>
    <a aria-label="Back to Home Link" class="warning-link" href="/">Kembali ke Halaman Utama</a>
  </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createCustomerReviewsTemplate,
  createLikeRestoButtonTemplate,
  createUnlikeRestoButtonTemplate,
  createFailRequestTemplate,
  createEmptyItemTemplate,
  createPageNotFoundTemplate,
};
