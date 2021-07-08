import DataSource from '../../data/data-source';
import { createRestoItemTemplate, createFailRequestTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="resto" id="restoData">
        <h1 class="resto-label">Daftar Restoran</h1>
        <div class="resto-cards" id="restoCards">

        </div>
      </div>
      <section class="promo">
      <h1 class="promo-label">Promo</h1>
      <div class="promo-thumbs">
        <div class="promo-thumb">
          <h2>Discount Utama</h2>          
          <picture>
            <source type="image/webp" srcset="./icons/discount-tag.webp">
            <img width="150" height="150" src="./icons/discount-tag.png" alt="Gambar Discount" crossorigin="anonymous">
          </picture>

          <p>Discount <b>20%</b> jika anda melakukan transaksi di atas <b>Rp 400.000</b></p>
        </div>
        <div class="promo-thumb">
          <h2>Discount Tambahan</h2>
          <picture>
            <source type="image/webp" srcset="./icons/vip-card.webp">
            <img width="150" height="150" src="./icons/vip-card.png" alt="Gambar Kartu Member" crossorigin="anonymous">
          </picture>
          <p>Discount tambahan <b>5%</b> jika anda mendaftar sebagai <b>member</b></p>
        </div>
      </div>
    </section>

    <section class="booking">
      <h1 class="booking-form-label">Booking Meja</h1>
      <form action="" class="booking-form">
        <div class="form-group">
          <label for="nama">Nama</label>
          <input type="text" name="nama" id="nama" class="form-input" placeholder="Misal: Andi"/>
        </div>
        <div class="form-group">
          <label for="alamat">Alamat</label>
          <textarea name="alamat" id="alamat" cols="30" rows="5" class="form-input" placeholder="Misal: Jakarta, Indonesia"></textarea>
        </div>
        <div class="form-group">
          <label for="available-resto">Pilih Restoran</label>  
          <div class="radio-group" id="available-resto">
            
          </div>        
        </div>
        <div class="form-group">
          <label for="jumlah">Jumlah Kursi</label>
          <input type="number" id="jumlah" name="jumlah" class="form-input" placeholder="Misal: 1"/>
        </div>
        
        <div class="form-group">
          <label for="tanggal">Tanggal Booking</label>
          <input type="date" name="tanggal" id="tanggal" class="form-input" />
        </div>

        <div class="form-button">
          <button type="submit" class="order-form-button">Pesan Sekarang <i class="fas fa-save"></i></button>
        </div>
      </form>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await DataSource.allResto();

    const restaurantsContainer = document.querySelector('#restoCards');

    if (restaurants === undefined) {
      restaurantsContainer.innerHTML = createFailRequestTemplate();
      return;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
