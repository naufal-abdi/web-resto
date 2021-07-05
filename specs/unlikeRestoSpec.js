import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div> ';
};

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putResto({ id: 'w9pga3s2tubkfw1e867' });
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteResto('w9pga3s2tubkfw1e867');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });

  // Membatalkan film yang disukai ketika film tersebut tidak ada dalam daftar.
  it('should not throw error if the unliked restaurant is not it the list', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    // hapus dulu film dari daftar film yang disukai
    await FavoriteRestoIdb.deleteResto('w9pga3s2tubkfw1e867');

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this restaurant"').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
