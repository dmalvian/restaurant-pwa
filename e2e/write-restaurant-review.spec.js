const assert = require('assert');

Feature('Write Restaurant Review');

Scenario('showing review form', ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('input[name="name"]');
  I.seeElement('textarea[name="review"]');
  I.seeElement('#submitButton');
});

Scenario('send empty review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('input[name="name"]');
  I.seeElement('textarea[name="review"]');
  I.seeElement('#submitButton');

  I.click('#submitButton');
  I.seeElement('.swal2-html-container');
  const message = await I.grabTextFrom('.swal2-html-container');
  assert.strictEqual(message, 'All fields must be filled.');
});

Scenario('send review', async ({ I }) => {
  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('input[name="name"]');
  I.seeElement('textarea[name="review"]');
  I.seeElement('#submitButton');

  const name = 'E2E Test';
  const review = (new Date()).toUTCString();

  I.fillField('input[name="name"]', name);
  I.fillField('textarea[name="review"]', review);

  I.click('#submitButton');
  I.seeElement('.swal2-html-container');
  const message = await I.grabTextFrom('.swal2-html-container');
  assert.strictEqual(message, 'Your review is submitted successfully.');

  I.seeElement('button.swal2-confirm');
  I.click('button.swal2-confirm');

  I.seeElement('.review-item__review');
  I.see(review, '.review-item__review');
});
