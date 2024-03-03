<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet/less" href="/css/styleless.less" type="text/less">
    <link rel="stylesheet" href="/css/styleless.css">
    <link rel="icon" href="/favicon.ico">
    <title>MAGAZINE</title>
</head>

<body class="page">
    <input type="hidden" class="data-php-quantity" data-products-quantity="<?= $total_products_length ?>">
    <header class="page__header">
        <div class="container">
            <nav class="header-nav">

                <a class="header-nav__logo logo" href="/index.php">
                    <h1 class="logo__title">MAGAZINE</h1>
                </a>

                <ul class="header-nav__list">
                    <li class="header-nav__item header-nav__item--home">
                        <a href="/index.php" class="header-nav__link">Главная</a>
                    </li>
                    <li class="header-nav__item header-nav__item--profile">
                        <a href="/profile.php" class="header-nav__link">Личный кабинет</a>
                    </li>
                    <li class="header-nav__item header-nav__item--basket">
                        <a href="/basket.php" class="header-nav__link">Корзина</a>
                        <span class="basket-items-quantity hidden"></span>
                    </li>
                </ul>

            </nav>
        </div>
    </header>