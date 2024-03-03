<?php
require('products_db.php');
require('components/header.php');
?>

<section class="page__basket basket">
    <div class="container">
        <div class="basket__panel order-table">
            <h1 class="order-table__title">Заказ доставки</h1>
            <ul class="order-table__list order-list"></ul>
            <div class="order-table__order-info">
                <div class="order-table__mistake-message">
                    <span class="order-table__mistake-icon">X</span>
                    <span class="order-table__mistake-text">Войдите в аккаунт</span>
                </div>
                <button class="order-button hidden">Заказать</button>
                <span class="order-table__order-cost hidden"></span>
            </div>
        </div>
    </div>
</section>

<template id="item">
    <li class="order-list__item order-item">
        <img class="order-item__img" src="">
        <span class="order-item__name"></span>
        <div class="order-item__count-block">
            <button class="order-item__count-up count-up">+</button>
            <span class="order-item__quantity"></span>
            <button class="order-item__count-down count-down">-</button>
        </div>
        <span class="order-item__price"></span>
        <span class="order-item__discount-procent"></span>
        </span>
        <button class="item-delete-button">X</button>
    </li>
</template>

<script src="/scripts/app.js"></script>
<script src="/scripts/basket.js"></script>
</body>