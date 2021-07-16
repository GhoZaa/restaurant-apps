const assert = require('assert');

Feature('Cancel liking the restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('unliking the restaurant', async ({ I }) => {
  I.seeElement('.item__title a');

  const firstRestaurant = locate('.item__title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.seeElement('.fa-heart-o');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.list__item');
  const favoritedRestaurantName = await I.grabTextFrom('.item__title');

  assert.strictEqual(firstRestaurantName, favoritedRestaurantName);
  I.click(favoritedRestaurantName);
  I.seeElement('#likeButton');
  I.seeElement('.fa-heart');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#empty-list');
  I.see('List is empty!');
  I.see('You don\'t have a favorite restaurant yet', '.description');
});
