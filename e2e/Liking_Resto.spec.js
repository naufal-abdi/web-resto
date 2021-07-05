const assert = require('assert');

Feature('Liking Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Menyukai Restaurant', async ({ I }) => {
  I.see('Oopss.. Belum Ada Item yang Disukai', '.empty-title');

  I.amOnPage('/');
  I.seeElement('.post-item-title a');
  const firstResto = locate('.post-item-title a').first();
  const restoName = await I.grabTextFrom(firstResto);

  I.wait(5);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.post-item-title a');

  const likedRestoName = await I.grabTextFrom('.post-item-title a');

  assert.strictEqual(restoName, likedRestoName);
});

Scenario('Batal Menyukai Restorant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.post-item-title a');
  I.wait(5);
  I.click(locate('.post-item-title a'));

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.wait(5);
  I.see('Oopss.. Belum Ada Item yang Disukai', '.empty-title');
});
