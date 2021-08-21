let itemId = document.querySelector(".data-php-id").getAttribute("data-id");
let itemPrice = document
  .querySelector(".data-php-price")
  .getAttribute("data-price");
let itemDiscountProcent = document.querySelector(".data-php-procent").getAttribute("data-procent");
let itemName = document.querySelector(".item-name").textContent;
let itemImg = document.querySelector(".img-info").src;
let itemCount = 1;
let buyButton = document.querySelector(".buy-button");
let itemAddedCount = document.querySelector(".added-items");
if (localStorage.getItem(itemId)) {
  itemAddedCount.textContent = "Добавлено: " + JSON.parse(localStorage.getItem(itemId)).count + " шт.";
}

let item = {
  id: itemId,
  name: itemName,
  img: itemImg,
  count: itemCount,
  price: itemPrice,
  procent: itemDiscountProcent
};

buyButton.addEventListener("click", function () {
  let raw = localStorage.getItem(itemId);
  let element = JSON.parse(raw);
  if (localStorage.getItem(itemId) && element.count < 50) {
    element.count++;
    item = {
      id: itemId,
      img: itemImg,
      name: itemName,
      count: element.count,
      price: itemPrice * element.count,
      procent: itemDiscountProcent
    };
    localStorage.setItem(itemId, item);
  } else if (localStorage.getItem(itemId) && element.count === 50) {
    alert("Добавлено максимальное количество");
    return;
  }
  localStorage.setItem(itemId, JSON.stringify(item));
  localStorage.setItem(itemId + ": startPrice", itemPrice);
  let flicker = document.createElement("div");
  flicker.className = "flicker";
  buyButton.appendChild(flicker);
  setTimeout(function () {  
    flicker.remove();
    basketItemsQuntity.textContent = Number(basketItemsQuntity.textContent) + 1;
    if (Number(basketItemsQuntity.textContent) === 1) {
      basketItemsQuntity.classList.remove("hidden");
    }
    if (localStorage.getItem(itemId)) {
      itemAddedCount.textContent = "Добавлено: 1 шт."
    }
    itemAddedCount.textContent = "Добавлено: " + element.count + " шт.";
  }, 850);
});

