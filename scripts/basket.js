let orderList = document.querySelector(".order-list");

let orderCost = document.querySelector(".order-cost");

let orderInfo = document.querySelector(".order-info");

let orderButton = orderInfo.querySelector(".order-button");
let mistakeMessage = orderInfo.querySelector(".mistake-message");

orderButton.onclick = function () {
  mistakeMessage.style.display = "inline-block";
};

let emptyBasket = function () {
  if (orderList.innerHTML === "") {
    orderList.innerHTML = "<h2 class='empty-basket'> Корзина пуста </h2>";
    orderInfo.classList.add("hidden");
  } else {
    orderInfo.classList.remove("hidden");
  }
};

let fullPrice = function () {
  let full = 0;
  for (let i = 0; i < 31; i++) {
    let raw = localStorage.getItem(i);
    let item = JSON.parse(raw);
    if (item !== null) {
      full += Number(item.price);
    }
  }
  let separate = full.toString();
  orderCost.textContent =
    "Общая стоимость: " + separate.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
};

for (let i = 0; i < 31; i++) {
  let raw = localStorage.getItem(i);
  let item = JSON.parse(raw);

  if (item !== null) {
    let startPrice = localStorage.getItem(i + ": startPrice");
    let price = item.price;
    let procent = item.procent;
    let name = item.name;
    let img = item.img;
    let count = item.count;

    let li = document.createElement("li");
    li.className = "item";

    let itemImg = document.createElement("img");
    itemImg.className = "item-img";
    itemImg.src = img;

    let itemName = document.createElement("span");
    itemName.className = "item-name";
    itemName.textContent = name;

    let countBlock = document.createElement("div");
    countBlock.className = "count-block";
    let itemCount = document.createElement("span");
    itemCount.className = "item-count";
    itemCount.textContent = count;
    let countUp = document.createElement("button");
    countUp.className = "count-up";
    // countUp.innerHTML += "&#8743";
    countUp.innerHTML += "+";
    let countDown = document.createElement("button");
    countDown.className = "count-down";
    // countDown.innerHTML += "&#8744";
    countDown.innerHTML += "-";
    countBlock.appendChild(countUp);
    countBlock.appendChild(itemCount);
    countBlock.appendChild(countDown);

    let itemPrice = document.createElement("span");
    itemPrice.className = "item-price";
    let separate = price.toString();
    itemPrice.textContent = separate.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");

    let deleteButton = document.createElement("button");
    deleteButton.className = "item-delete-button";
    deleteButton.textContent = "X";
    deleteButton.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      li.remove();
      localStorage.removeItem(i);
      localStorage.removeItem(i + ": startPrice");
      counting();
      fullPrice();
      emptyBasket();
    });

    countUp.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      if (item.count < 50) {
        item.count++;
        itemCount.textContent = item.count;
        item.price = startPrice * item.count;
        let n = item.price.toString();
        itemPrice.textContent = n.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
        localStorage.setItem(i, JSON.stringify(item));
        counting();
        fullPrice();
      }
    });
    countDown.addEventListener("click", function () {
      mistakeMessage.style.display = "none";
      if (item.count > 1) {
        item.count--;
        itemCount.textContent = item.count;
        item.price = startPrice * item.count;
        let n = item.price.toString();
        itemPrice.textContent = n.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
        localStorage.setItem(i, JSON.stringify(item));
        counting();
        fullPrice();
      }
    });

    li.appendChild(itemImg);
    li.appendChild(itemName);
    li.appendChild(countBlock);
    li.appendChild(itemPrice);
    if (procent > 0) {
      let itemDiscountProcent = document.createElement("span");
      itemDiscountProcent.className = "item-discount-procent"
      itemDiscountProcent.innerHTML = "-" + procent + "%";
      li.appendChild(itemDiscountProcent);
    }
    li.appendChild(deleteButton);
    orderList.appendChild(li);
  }
}

fullPrice();
emptyBasket();
