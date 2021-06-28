import CONFIG from "../../global/config";

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div>
        <div class="images-detail">
            <img class="img-res2" alt="${restaurant.name}'s image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" />
        </div>
        <ul class="detail-info">
            <li>
            <p class="description"><strong>Description:</strong> <br>${restaurant.description}</p></li>
            <li>
            <p><strong>Address:</strong><br>${restaurant.address}, ${restaurant.city}</p>
            </li>
            <li><p><strong>Rating:</strong><br><span>${restaurant.rating}</span></p></li>
            <li><strong>Categories:</strong><br>${restaurant.categories.map((category) =>
                  `<span class="category"> ${category.name}</span>`
              ).join("")}
            </li>
        </ul>
    </div>
    <h3>Menu</h3>
    <div class="detail-menu grid-2">
        <div class="detail-food">
            <h4><span>🍴</span> Makanan</h4>            
            <ul>
                ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join("")}
            </ul>
        </div>
        <div class="detail-drink">
            <h4><span>🍹</span> Minuman</h4>
            <ul>
                ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join("")}
            </ul>
        </div>
    </div>
    <h3 class="title-review">Reviews</h3>
    <div class="detail-review grid-3">
    ${restaurant.customerReviews.map((review) => `<div class="detail-review-item">
    <div class="review-header">
        <p class="review-name"><img src="user.png" alt="reviewer ${review.name}">&nbsp;&nbsp;${review.name}</p><br>
        <p class="review-date">${review.date}</p>
    </div>
    <div class="review-body">${review.review}
    </div>
    </div>`).join('')}
    </div>
</div>
    `;

const createRestaurantItemTemplate = (restaurant) => `
        <div class="list__item">
            <img class="item__img" src="${
              CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}'s image" title="${restaurant.name}">
            <div class="item__content">
                <h3 class="item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
                <p class="item__txt">
                    City : <span aria-label="restaurant city" class="item__city">${
                      restaurant.city
                    }</span>
                </p>
                <p class="item__txt">
                    Rating : <span aria-label="restaurant rating" class="item__rating">${
                      restaurant.rating
                    }</span>
                </p>
                <p class="item__description">${restaurant.description.slice(
                  0,
                  200
                )}...</p>
                <div class="more"><a href="${`/#/detail/${restaurant.id}`}">Selengkapnya</a></div>
            </div>
        </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantDetailTemplate,
    createRestaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate, 
};
