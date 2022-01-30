let basketItemsQuantity = document.querySelector(".basket-items-quantity");
let totalProductsQuantity = document.querySelector(".data-php-quantity").getAttribute("data-products-quantity");
let listItem;

switch(window.location.pathname) {
    case '/index.php':
        listItem = document.querySelector('.header-nav__item--home');
        listItem.querySelector('.header-nav__link').classList.add('header-nav__link--current');
        break;
    case '/profile.php':
        listItem = document.querySelector('.header-nav__item--profile');
        listItem.querySelector('.header-nav__link').classList.add('header-nav__link--current');
        break;
    case '/basket.php':
        listItem = document.querySelector('.header-nav__item--basket');
        listItem.querySelector('.header-nav__link').classList.add('header-nav__link--current');
        break;
}

let counting = function () {
    let quantity = 0;
    for (let i = 0; i <= totalProductsQuantity; i++) {
        let raw = localStorage.getItem(i);
        let item = JSON.parse(raw);
        if (item !== null) {
            quantity += item.quantity;
        }
    }
    basketItemsQuantity.textContent = quantity;
    quantity !== 0 ? basketItemsQuantity.classList.remove("hidden") : basketItemsQuantity.classList.add("hidden");
};

counting();

