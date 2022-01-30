let orderList = document.querySelector(".order-list");
let orderInfo = document.querySelector(".order-table__order-info");
let orderCost = orderInfo.querySelector(".order-table__order-cost");
let orderButton = orderInfo.querySelector(".order-button");
let mistakeMessage = orderInfo.querySelector(".order-table__mistake-message");

orderButton.addEventListener('click', function() {
    mistakeMessage.style.display = 'inline-block';
})

showBasketItems();
fullPrice();
emptyBasket();

function showBasketItems() {
    let template = document.querySelector('#item');

    for (let i = 0; i <= totalProductsQuantity; i++) {
        let raw = localStorage.getItem(i);
        let item = JSON.parse(raw);
        if (item !== null) {
                
            let clone = template.content.cloneNode(true);

            let orderItem = clone.querySelector('.order-item');
            if (item.isNew) orderItem.classList.add("order-item--new"); 

            let img =  clone.querySelector('.order-item__img');
            img.src = item.img;

            let name = clone.querySelector('.order-item__name');
            name.textContent = item.name;

            let quantity = clone.querySelector('.order-item__quantity');
            quantity.textContent = item.quantity;

            let price = clone.querySelector('.order-item__price');
            price.textContent = priceWithSpaces(item.price, price);
                
            let discountProcent = clone.querySelector('.order-item__discount-procent');
            discountProcent.textContent = '-' + item.discountProcent + '%';
            if (item.discountProcent === 0) discountProcent.classList.add('hidden');

            let btnCountUp = clone.querySelector('.count-up');
            let btnCountDown = clone.querySelector('.count-down');
            btnCountUp.addEventListener('click', function() {
                if (item.quantity !== 50) {
                    item.quantity += 1;
                    item.price += item.startPrice;
                    localStorage.setItem(item.id, JSON.stringify(item));
                    itemChange(item, quantity, price);
                }
            })
            btnCountDown.addEventListener('click', function() {
                if (item.quantity !== 1) {
                    item.quantity -= 1;
                    item.price -= item.startPrice;
                    localStorage.setItem(item.id, JSON.stringify(item));
                    itemChange(item, quantity, price); 
                }
            })

            let deleteButton = clone.querySelector('.item-delete-button');
            deleteButton.addEventListener('click', function() {
                orderItem.remove();
                localStorage.removeItem(i);
                itemChange(item, quantity, price);
            })

            orderList.appendChild(clone);
                
        }
    }  
    
}

function itemChange(item, quantity, price) {
    mistakeMessage.style.display = "none";
    quantity.textContent = item.quantity;
    price.textContent = priceWithSpaces(item.price, price);
    counting();
    fullPrice();
    emptyBasket();
}

function fullPrice() {
    let full = 0;
    for (let i = 0; i <= totalProductsQuantity; i++) {
        let raw = localStorage.getItem(i);
        let item = JSON.parse(raw);
        if (item !== null) full += Number(item.price);
}
orderCost.textContent = "Общая стоимость: " + priceWithSpaces(full, orderCost);
}

function emptyBasket() {
    if (!orderList.querySelector('.order-item')) {
        orderList.innerHTML = "<h2 class='empty-basket'>Корзина пуста</h2>";
        orderInfo.classList.add("hidden");
    } else {
        orderInfo.classList.remove("hidden");
        // to remove short visibility after refreshing a page with an empty basket
        orderCost.classList.remove("hidden");
        orderButton.classList.remove("hidden");
    }
}

function priceWithSpaces(number, place) {
    let separ = number.toString();
    place.textContent = separ.replace(/(\d)(?=(\d{3})+(\D|$))/g, "$1 ");
    return place.textContent;
}
