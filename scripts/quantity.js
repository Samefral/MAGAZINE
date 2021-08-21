let basketItemsQuntity = document.querySelector(".basket-items-quantity");
let counting = function () {
  let quantity = 0;
  for (let i = 0; i < 31; i++) {
    let raw = localStorage.getItem(i);
    let item = JSON.parse(raw);
    if (item !== null) {
      quantity += item.count;
    }
  }
  basketItemsQuntity.textContent = quantity;
  if (quantity !== 0) {
    basketItemsQuntity.classList.remove("hidden");
  } else {
    basketItemsQuntity.classList.add("hidden");
  }
};
counting();
