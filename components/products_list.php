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

                <ul class="header-nav__list ">
                    <li class="header-nav__item">
                        <a href="index.php" class="header-nav__link header-nav__link--current">Главная</a>
                    </li>
                    <li class="header-nav__item">
                        <a href="profile.php" class="header-nav__link">Личный кабинет</a>
                    </li>
                    <li class="header-nav__item header-nav__item--basket">
                        <a href="basket.php" class="header-nav__link">Корзина</a>
                        <span class="basket-items-quantity hidden"></span>
                    </li>
                </ul>

            </nav>
        </div>
    </header>
    
    <main> 

        <section class="page__product-catalog product-catalog">
            <div class="container">
                <!-- FILTERS !-->
                <ul class="product-catalog__filter-list filter-list">
                    <?php foreach ($filters as $filter) : ?>
                        <li class="filter-list__item">
                            <a href="/index.php?product_type=<?= $filter['url'] ?>" class="filter-list__link <?= $type === $filter['url'] ? 'filter-list__link--current' : '' ?>">
                                <?= $filter['name'] ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>

                <!-- FILTER ALL_PRODUCTS !-->
                <?php if ($type === 'all') : ?>
                    <ul class="product-catalog__product-list product-list">
                        <?php foreach ($products_on_page as $i => $item) : ?>

                            <li class="product-list__card product-card <?= $item['is_new'] ? 'product-card--new' : '' ?>">
                                <a class="product-card__link" href="product.php?product_id=<?= $i ?>">
                                    <img class="product-card__img" src="<?= $item['img_url'] ?>">
                                    <div class="product-card__desc">
                                        <?php if ($item['discount'] > 0) : ?>
                                            <div class="product-card__discout-info discount-info">
                                                <span class="discount-info__no-discount"><?= $item['price'] ?></span>
                                                <span class="discount-info__discount-procent">
                                                    <?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?>
                                                </span>
                                            </div>
                                        <?php endif; ?>
                                        <h3 class="product-card__name"><?= $item['title'] ?></h3>
                                        <span class="product-card__price <?= $item['discount'] > 0 ? 'product-card__price--discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        <?php endforeach; ?>

                    </ul>
                <?php endif; ?>
       
                <!-- FILTER - AMD_PRODUCTS !-->
                <?php if ($type === 'Amd') : ?>
                    <ul class="product-catalog__product-list product-list">
                        <?php foreach ($products_amd as $i => $item) : ?>
                            <li class="product-list__card product-card <?= $item['is_new'] ? 'product-card--new' : '' ?>">
                                <a class="product-card__link" href="product.php?product_id=<?= $i ?>">
                                    <img class="product-card__img" src="<?= $item['img_url'] ?>">
                                    <div class="product-card__desc">
                                        <?php if ($item['discount'] > 0) : ?>
                                            <div class="product-card__discout-info discount-info">
                                                <span class="discount-info__no-discount"><?= $item['price'] ?></span>
                                                <span class="discount-info__discount-procent">
                                                    <?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?>
                                                </span>
                                            </div>
                                        <?php endif; ?>
                                        <h3 class="product-card__name"><?= $item['title'] ?></h3>
                                        <span class="product-card__price <?= $item['discount'] > 0 ? 'product-card__price--discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- FILTER - NVIDIA_PRODUCTS !-->
                <?php if ($type === 'Nvidia') : ?>
                    <ul class="product-catalog__product-list product-list">
                        <?php foreach ($products_nvidia as $i => $item) : ?>
                            <li class="product-list__card product-card <?= $item['is_new'] ? 'product-card--new' : '' ?>">
                                <a class="product-card__link" href="product.php?product_id=<?= $i ?>">
                                    <img class="product-card__img" src="<?= $item['img_url'] ?>">
                                    <div class="product-card__desc">
                                        <?php if ($item['discount'] > 0) : ?>
                                            <div class="product-card__discout-info discount-info">
                                                <span class="discount-info__no-discount"><?= $item['price'] ?></span>
                                                <span class="discount-info__discount-procent">
                                                    <?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?>
                                                </span>
                                            </div>
                                        <?php endif; ?>
                                        <h3 class="product-card__name"><?= $item['title'] ?></h3>
                                        <span class="product-card__price <?= $item['discount'] > 0 ? 'product-card__price--discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- FILTER - NEW_PRODUCTS !-->
                <?php if ($type === 'New') : ?>
                    <ul class="product-catalog__product-list product-list">
                        <?php foreach ($products_new as $i => $item) : ?>
                            <li class="product-list__card product-card <?= $item['is_new'] ? 'product-card--new' : '' ?>">
                                <a class="product-card__link" href="product.php?product_id=<?= $i ?>">
                                    <img class="product-card__img" src="<?= $item['img_url'] ?>">
                                    <div class="product-card__desc">
                                        <?php if ($item['discount'] > 0) : ?>
                                            <div class="product-card__discout-info discount-info">
                                                <span class="discount-info__no-discount"><?= $item['price'] ?></span>
                                                <span class="discount-info__discount-procent">
                                                    <?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?>
                                                </span>
                                            </div>
                                        <?php endif; ?>
                                        <h3 class="product-card__name"><?= $item['title'] ?></h3>
                                        <span class="product-card__price <?= $item['discount'] > 0 ? 'product-card__price--discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- PAGINATOR !-->

                    <ol class="product-catalog__paginator pagination-list">

                        <!-- PAGINATOR ALL !-->
                        <?php if ($type === 'all') : ?>
                            <?php for ($i = 1; $i <= $pages_total; $i = $i + 1) : ?>
                                <li class="pagination-list__item pagination-button <?= $i === $page ? 'pagination-button--active' : '' ?>">
                                    <a class="pagination-list__link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR AMD !-->
                        <?php if ($type === 'Amd') : ?>
                            <?php for ($i = 1; $i <= $pages_amd_total; $i = $i + 1) : ?>
                                <li class="pagination-list__item pagination-button <?= $i === $page ? 'pagination-button--active' : '' ?>">
                                    <a class="pagination-list__link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR NVIDIA !-->
                        <?php if ($type === 'Nvidia') : ?>
                            <?php for ($i = 1; $i <= $pages_nvidia_total; $i = $i + 1) : ?>
                                <li class="pagination-list__item pagination-button <?= $i === $page ? 'pagination-button--active' : '' ?>">
                                    <a class="pagination-list__link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR NEW !-->
                        <?php if ($type === 'New') : ?>
                            <?php for ($i = 1; $i <= $pages_new_total; $i = $i + 1) : ?>
                                <li class="pagination-list__item pagination-button <?= $i === $page ? 'pagination-button--active' : '' ?>">
                                    <a class="pagination-list__link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                    </ol>

            </div>
        </section>

    </main>

    <script src="/scripts/quantity.js"></script>
</body>