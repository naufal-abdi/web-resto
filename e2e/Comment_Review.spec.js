const assert = require('assert');

Feature('Adding Comment Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Mengirim komentar review customer', async ({ I }) => {
  I.wait(5);
  I.seeElement('.post-item-title a');
  const firstResto = locate('.post-item-title a').first();
  I.click(firstResto);

  const reviewerName = 'Gunawan';
  const reviewerComment = 'Ini Test Komentar';
  I.wait(5);
  I.seeElement('#nama');

  await I.fillField('#nama', reviewerName);

  I.seeElement('#komentar');
  await I.fillField('#komentar', reviewerComment);

  I.seeElement('#sendButton');
  I.click('#sendButton');
  I.wait(5);
  I.see(reviewerName, '.reviewer');
  I.see(reviewerComment, '.review-text');
});
