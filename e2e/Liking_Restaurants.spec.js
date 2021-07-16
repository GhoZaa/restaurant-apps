Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#empty-list');
  I.see('List is empty!');
  I.see('You don\'t have a favorite restaurant yet', '.description');
});

Scenario('liking one restaurant', ({ I }) => {
  I.see('List is empty!');
  I.see('You don\'t have a favorite restaurant yet', '.description');

  I.amOnPage('/');
});
