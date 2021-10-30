let itemId = document.querySelector(".data-php-id").getAttribute("data-id");
let itemPrice = document.querySelector(".data-php-price").getAttribute("data-price");
let itemDiscountProcent = document.querySelector(".data-php-procent").getAttribute("data-procent");
let itemName = document.querySelector(".item__name").textContent;
let itemImg = document.querySelector(".item__img").src;
let itemCount = 1;
let buyButton = document.querySelector(".buy-button");
let itemAddedCount = document.querySelector(".item__added-info");
let itemIsNew = false;

if (localStorage.getItem(itemId)) {
  itemAddedCount.textContent = "Добавлено: " + JSON.parse(localStorage.getItem(itemId)).count + " шт.";
}

if (document.querySelector(".item--new")) {
   itemIsNew = true;
}

let item = {
  id: itemId,
  name: itemName,
  img: itemImg,
  count: itemCount,
  price: itemPrice,
  procent: itemDiscountProcent,
  isnew: itemIsNew
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
      procent: itemDiscountProcent,
      isnew: itemIsNew
    };
    localStorage.setItem(itemId, item);
  } else if (localStorage.getItem(itemId) && element.count === 50) {
    alert("Добавлено максимальное количество");
    return;
  }
  localStorage.setItem(itemId, JSON.stringify(item));
  localStorage.setItem(itemId + ": startPrice", itemPrice);

  // FLICKER ON CLICK
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

