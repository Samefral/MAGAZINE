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
                            <a href="/basket.php" class="nav-link basket">
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
        <section class="product-info">
            <div class="item">
                <div class="item-description <?= $new ? 'is-new' : '' ?>">
                    <h2 class="item-name"><?= $title ?></h2>
                    <img src="<?= $img_url ?>" alt="<?= $title ?>" class="img-info">
                </div>
                <div class="item-parametrs">
                    <h2 class="characteristics-title">Характеристики</h2>
                    <ul class="characteristics">
                        <li>частота ядра/памяти: UNKNOW</li>
                        <li> объем видеопамяти: UNKNOW</li>
                        <li>техпроцесс: UNKNOW</li>
                        <li>разъемы: UNKNOW</li>
                        <li>интерфейс подключения: UNKNOW</li>
                        <li>TDP: UNKNOW</li>
                        <li>поддержка API: UNKNOW</li>
                        <li>максимальное разрешение: UNKNOW</li>
                        <li>количество поддерживаемых мониторов: UNKNOW</li>
                    </ul>
                </div>
            </div>
            <div class="item-buy">
                <?php if ($discount > 0) : ?>
                    <div class="discount-info">
                        <p class="price-no-discount"><?= $price ?></p>
                        <p class="discount-procent"><?= ' -' . $discount_procent . '%' ?></p>
                    </div>
                <?php endif; ?>
                <div class="price-block <?= $discount > 0 ? 'discount-price' : '' ?>">
                    <?php if ($discount > 0) : ?>
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                    <?php endif; ?>
                    <span class="price"><?= number_format($price_with_discount, 0, ',', ' ') ?></span>
                    <span class="currency-icon">&#8381;</span>
                </div>
                <button class="buy-button">Добавить</button>
            </div>
            <p class="added-items"></p>
        </section>
    </div>

    <div class="data-php-id hidden" data-id="<?= $id ?>"></div>
    <div class="data-php-price hidden" data-price="<?= $price_with_discount ?>"></div>
    <div class="data-php-procent hidden" data-procent="<?= $discount_procent ?>"></div>
    <script src="/scripts/app.js"></script>
    <script src="/scripts/quantity.js"></script>
</body>