const assert = require('assert');

Feature('Favorite and Unfavorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurants', ({ I }) => {
  I.see('No Item Available', '.fallback__info');
});

Scenario('adding one restaurant to favorite list then remove it', async ({ I }) => {
  I.see('No Item Available', '.fallback__info');

  I.amOnPage('/');
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#favoriteToggle');
  I.seeElement('[aria-label="add to favorite restaurants"]');
  I.click('#favoriteToggle');

  I.amOnPage('/#/favorite');
  I.seeElement('restaurant-item');
  const favoritedRestaurantName = await I.grabTextFrom('.restaurant-item__name');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);

  I.click(locate('.restaurant-item__name a').first());

  I.seeElement('#favoriteToggle');
  I.seeElement('[aria-label="remove from favorite restaurants"]');
  I.click('#favoriteToggle');

  I.amOnPage('/#/favorite');
  I.see('No Item Available', '.fallback__info');
});
