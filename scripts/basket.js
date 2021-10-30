let orderList = document.querySelector(".order-list");

let orderCost = document.querySelector(".order-table__order-cost");

let orderInfo = document.querySelector(".order-table__order-info");

let orderButton = orderInfo.querySelector(".order-button");
let mistakeMessage = orderInfo.querySelector(".order-table__mistake-message");

orderButton.onclick = function () {
  mistakeMessage.style.display = "inline-block";
};

// EMPTY BASKET FUNCTION
let emptyBasket = function () {
  if (orderList.innerHTML === "") {
    orderList.innerHTML = "<h2 class='empty-basket'> Корзина пуста </h2>";
    orderInfo.classList.add("hidden");
  } else {
    orderInfo.classList.remove("hidden");
  }
};

// FUNCTION CREATING PRICE WITH SPACES
let separate = function(one, two) {
  let separ = one.toString();
  two.textContent = separ.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
  return two.textContent;
}

// COUNTING TOTAL ORDER PRICE FUNCTION
let fullPrice = function () {
  let full = 0;
  for (let i = 0; i < 31; i++) {
    let raw = localStorage.getItem(i);
    let item = JSON.parse(raw);
    if (item !== null) {
      full += Number(item.price);
    }
  }
   orderCost.textContent = "Общая стоимость: " + separate(full, orderCost);
};


// CREATING ITEM FUNCTION
for (let i = 0; i < 35; i++) {
  let raw = localStorage.getItem(i);
  let item = JSON.parse(raw);

  if (item !== null) {
    let startPrice = localStorage.getItem(i + ": startPrice");
    let price = item.price;
    let procent = item.procent;
    let name = item.name;
    let img = item.img;
    let count = item.count;
    let isnew = item.isnew;

    // ITEM
    let li = document.createElement("li");
    li.className = "order-list__item order-item";

    // NEW ITEM CHECK
    if (isnew === true) {
      li.classList.add("order-item--new");
    }

    // ITEM IMG
    let itemImg = document.createElement("img");
    itemImg.className = "order-item__img";
    itemImg.src = img;

    // ITEM NAME
    let itemName = document.createElement("span");
    itemName.className = "order-item__name";
    itemName.textContent = name;

    // ITEM QUANTITY CHANGE BLOCK
    let countBlock = document.createElement("div");
    countBlock.className = "order-item__count-block";

    // ITEM QUANTITY
    let itemCount = document.createElement("span");
    itemCount.className = "order-item__count";
    itemCount.textContent = count;

    // UP ARROW
    let countUp = document.createElement("button");
    countUp.className = "order-item__count-up count-up";
    countUp.innerHTML += "+";

    // DOWN ARROW
    let countDown = document.createElement("button");
    countDown.className = "order-item__count-down count-down";
    countDown.innerHTML += "-";

    // ITEM COUNT INCREASE FUNCTION
    countUp.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      if (item.count < 50) {
        item.count++;
        itemCount.textContent = item.count;
        item.price = startPrice * item.count;
        separate(item.price, itemPrice);
        localStorage.setItem(i, JSON.stringify(item));
        counting();
        fullPrice();
      }
    });
    
    // ITEM COUNT REDUCE FUNCTION
    countDown.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      if (item.count > 1) {
        item.count--;
        itemCount.textContent = item.count;
        item.price = startPrice * item.count;
        separate(item.price, itemPrice);
        localStorage.setItem(i, JSON.stringify(item));
        counting();
        fullPrice();
      }
    });
    
    // CREATING ITEM QUANTITY CHANGE BLOCK
    countBlock.appendChild(countUp);
    countBlock.appendChild(itemCount);
    countBlock.appendChild(countDown);

    // ITEM PRICE
    let itemPrice = document.createElement("span");
    itemPrice.className = "order-item__price";
    separate(price, itemPrice);

    // ITEM DELETE BUTTON
    let deleteButton = document.createElement("button");
    deleteButton.className = "item-delete-button";
    deleteButton.textContent = "X";

    // ITEM DELETE FUNCTION
    deleteButton.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      li.remove();
      localStorage.removeItem(i);
      localStorage.removeItem(i + ": startPrice");
      counting();
      fullPrice();
      emptyBasket();
    });

    // ITEM CREATING
    li.appendChild(itemImg);
    li.appendChild(itemName);
    li.appendChild(countBlock);
    li.appendChild(itemPrice);
    
    // CREATING ITEM DISCOUNT INFO
    if (procent > 0) {
      let itemDiscountProcent = document.createElement("span");
      itemDiscountProcent.className = "order-item__discount-procent"
      itemDiscountProcent.innerHTML = "-" + procent + "%";
      li.appendChild(itemDiscountProcent);
    }
    li.appendChild(deleteButton);
    orderList.appendChild(li);
  }
}

fullPrice();
emptyBasket();
