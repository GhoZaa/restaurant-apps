const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#empty-list');
  I.see('List is empty!');
  I.see('You don\'t have a favorite restaurant yet', '.description');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('List is empty!');
  I.see('You don\'t have a favorite restaurant yet', '.description');

  I.amOnPage('/');

  I.seeElement('.item__title a');

  const firstRestaurant = locate('.item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  const favoritedRestaurantName = await I.grabTextFrom('.item__title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
});
