window.addEventListener('load', function() {
    let buyButton = document.querySelector(".buy-button");
    let item = new Item();
    if (item.checkHave()) showAddedQuantity();
    
    buyButton.addEventListener('click', addItem);

    function addItem() {
        if (item.quantity > 50) {
            alert("Добавлено максимальное количество");
            return;
        }
        if (item.checkHave()) {
            item.countUp();
            item.priceUp();
        }
        localStorage.setItem(item.id, JSON.stringify(item));
        flicker();
        showAddedQuantity();
    }

    function flicker() {
        let flicker = document.createElement("div");
        flicker.className = "flicker";
        buyButton.appendChild(flicker);
        setTimeout(function () {  
            flicker.remove();
            basketItemsQuantity.textContent = Number(basketItemsQuantity.textContent) + 1;
            if (Number(basketItemsQuantity.textContent) === 1) basketItemsQuantity.classList.remove("hidden");
        }, 850);
    }

    function showAddedQuantity() {
        let itemAddedInfo = document.querySelector(".item__added-info");
        itemAddedInfo.textContent = "Добавлено: " + item.quantity + " шт.";
    }

})

class Item {
    constructor () {
        this.id = +document.querySelector(".data-php-id").getAttribute("data-id");
        this.startPrice = +document.querySelector(".data-php-price").getAttribute("data-price");
        // this.price = +document.querySelector(".data-php-price").getAttribute("data-price");
        this.price = this.checkHave() ? JSON.parse(localStorage.getItem(this.id)).price : this.startPrice;
        this.discountProcent = +document.querySelector(".data-php-procent").getAttribute("data-procent");
        this.quantity = this.checkHave() ? JSON.parse(localStorage.getItem(this.id)).quantity : 1;
        this.name = document.querySelector(".item__name").textContent;
        this.img = document.querySelector(".item__img").src;
        this.isNew = document.querySelector(".item--new") ? true : false;
  }

  checkHave() {
      if (localStorage.getItem(this.id)) return true;
  }

  countUp() {
      this.quantity = ++JSON.parse(localStorage.getItem(this.id)).quantity;
    }

    priceUp() {
        this.price += this.startPrice;
    }
}