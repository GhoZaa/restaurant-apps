import CONFIG from '../../global/config';

const createRestaurantDetailTemplate = (restaurant) => `
    
        <div class="detail">
            <img class="images-detail" alt="${restaurant.name}'s image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" />
            <h2>${restaurant.name}</h2>
            <div class="detail-info">
                <h3>Description:</h3>
                <p class="description">${restaurant.description}</p>
                <h3>Address:</h3>
                <p>${restaurant.address}, ${restaurant.city}</p>
                <h3>Rating:</h3>
                <p><span class="item__rating">${restaurant.rating}</span></p>
                <h3>Categories:</h3>
                ${restaurant.categories.map((category) => `<span class="category"> ${category.name}</span>`).join('')}
                <h3>Menu:</h3>
                <div class="detail-food">
                    <h4>🍴 Foods</h4>            
                    <ul>
                        ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
                    </ul>
                </div>
                <div class="detail-drink">
                    <h4>🍹 Drinks</h4>
                    <ul>
                        ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
                    </ul>
                </div>        
            </div>
            <div class="detail-review">
                <h3>Reviews</h3>
                ${restaurant.customerReviews.map((review) => `
                <div class="detail-review-item">
                    <div class="review-header">
                        <p><img src="images/user.png" alt="reviewer name ${review.name}">
                            ${review.name}<br>
                            ${review.date}
                        </p>
                    </div>
                    <div class="review-body">${review.review}</div>
                </div>`).join('')}
            </div>
        </div>
    
    `;

const createRestaurantItemTemplate = (restaurant) => `

    <div class="list__item">
        <img class="item__img" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}'s image" title="${restaurant.name}">
        <div class="item__content">
            <h3 class="item__title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
            <p class="item__txt">
                City : <span aria-label="restaurant city" class="item__city">${restaurant.city}</span>
            </p>
            <p class="item__txt">
                Rating : <span aria-label="restaurant rating" class="item__rating">${restaurant.rating}</span>
            </p>
            <p class="item__description">${restaurant.description.slice(0, 200)}...</p>
            <div class="more"><a href="${`/#/detail/${restaurant.id}`}">Selengkapnya</a></div>
        </div>
    </div>

`;

const createErrorLoadContent = () => `
<div class="detail">
    <div class="detail-error">
        <h3>Error to load content!</h3>
        <p class="description">Please check your internet connection!</p>
    </div>
</div>
`;

const createEmptyPage = () => `
<div class="detail">
    <div class="detail-error">
        <h3>List is empty!</h3>
        <p class="description">You don't have a favorite restaurant yet</p>
    </div>
</div>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createErrorLoadContent,
  createEmptyPage,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
