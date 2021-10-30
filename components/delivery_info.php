<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet/less" href="/css/styleless.less" type="text/less">
    <link rel="stylesheet" href="/css/styleless.css">
    <title>MAGAZINE</title>
</head>

<body class="page">

    <header class="page__header">
        <div class="container">
            <nav class="header-nav">

                <a class="header-nav__logo logo" href="/index.php">
                    <h1 class="logo__title">MAGAZINE</h1>
                </a>

                <ul class="header-nav__list">
                    <li class="header-nav__item">
                        <a href="index.php" class="header-nav__link">Главная</a>
                    </li>
                    <li class="header-nav__item">
                        <a href="profile.php" class="header-nav__link">Личный кабинет</a>
                    </li>
                    <li class="header-nav__item header-nav__item--basket">
                        <a href="basket.php" class="header-nav__link header-nav__link--current">Корзина</a>
                        <span class="basket-items-quantity hidden"></span>
                    </li>
                </ul>

            </nav>
        </div>
    </header>


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
                    <button class="order-button">Заказать</button>
                    <span class="order-table__order-cost">Общая стоимость: </span>
                </div>
            </div>
        </div>
    </section>


    <script src="/scripts/basket.js"></script>
    <script src="/scripts/quantity.js"></script>
</body>