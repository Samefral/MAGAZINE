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

    <header class="page-header">
        <div class="container">
            <div class="header-top">
                <a class="logo" href="/index.php">
                    <h1>MAGAZINE</h2>
                </a>
                <div class="header-nav">
                    <nav>
                        <ul class="header-nav-list">
                            <a href="/index.php" class="nav-link">
                                <li>Главная</li>
                            </a>
                            <a href="/components/form.php" class="nav-link">
                                <li>Личный кабинет</li>
                            </a>
                            <a href="/basket.php" class="nav-link basket nav-current" id="basket">
                                <li>Корзина</li>
                                <span class="basket-items-quantity hidden"></span>
                            </a>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>

    <div class="container">
        <section class="order">

            <div class="order-block">
                <h1 class="order-title">Заказ доставки</h1>
                <ul class="order-list"></ul>
                <div class="order-info">
                    <div class="mistake-message">
                        <span class="mistake-icon">X</span>
                        <span class="mistake-text">Войдите в аккаунт</span>
                    </div>
                    <button class="order-button">Заказать</button>
                    <span class="order-cost"></span>
                </div>
            </div>

        </section>
    </div>
    
    <script src="/scripts/basket.js"></script>
    <script src="/scripts/quantity.js"></script>
</body>