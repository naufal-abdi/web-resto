import * as TestFactories from './helpers/testFactories';
import FavoriteRestoIdb from '../src/scripts/data/favorite-resto-idb';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    // isi dengan id restaurant
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="like this restaurant"]'));
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const resto = await FavoriteRestoIdb.getResto('w9pga3s2tubkfw1e867');

    expect(resto).toEqual({ id: 'w9pga3s2tubkfw1e867' });

    FavoriteRestoIdb.deleteResto('w9pga3s2tubkfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({ id: 'w9pga3s2tubkfw1e867' });

    // Tambahkan film dengan id 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putResto({ id: 'w9pga3s2tubkfw1e867' });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak diperkenankan ada duplikasi data film yang disukai
    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([{ id: 'w9pga3s2tubkfw1e867' }]);

    FavoriteRestoIdb.deleteResto('w9pga3s2tubkfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllRestos()).toEqual([]);
  });
});
