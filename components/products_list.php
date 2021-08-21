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
                            <a href="/index.php" class="nav-link nav-current">
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

    <main>
        <div class="container">
            <div class="products-catalog">



                <!-- FILTERS !-->
                <ul class="filters">
                    <?php foreach ($filters as $filter) : ?>
                        <?php $filter_class = 'filter'; ?>
                        <?php if ($type === $filter['url']) : {
                                $filter_class = $filter_class . ' filter-current';
                            } ?>
                        <?php endif; ?>
                        <li class="option">
                            <a href="/index.php?product_type=<?= $filter['url'] ?>" class="<?= $filter_class ?>">
                                <?= $filter['name'] ?>
                            </a>
                        </li>
                    <?php endforeach; ?>
                </ul>


                <!-- FILTER ALL_PRODUCTS !-->
                <?php if ($type === 'all') : ?>
                    <ul class="product-list">
                        <?php foreach ($products_on_page as $i => $item) : ?>

                            <a class="product-link" href="product.php?product_id=<?= $i ?>">
                                <li class="product-card <?= $item['is_new'] ? 'is-new' : '' ?>">
                                    <?php if ($item['discount'] > 0) : ?>
                                        <div class="discount-info">
                                            <div class="price-no-discount"><?= $item['price'] ?></div>
                                            <div class="discount-procent"><?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?></div>
                                        </div>
                                    <?php endif; ?>
                                    <img src="<?= $item['img_url'] ?>">
                                    <div class="product-desc">
                                        <h3 class="product-name"><?= $item['title'] ?></h3>
                                        <span class="price <?= $item['discount'] > 0 ? 'price-with-discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </li>
                            </a>
                        <?php endforeach; ?>

                    </ul>
                <?php endif; ?>

                <!-- FILTER - AMD_PRODUCTS !-->
                <?php if ($type === 'Amd') : ?>
                    <ul class="product-list">
                        <?php foreach ($products_amd as $i => $item) : ?>
                            <a class="product-link" href="product.php?product_id=<?= $i ?>">
                                <li class="product-card <?= $item['is_new'] ? 'is-new' : '' ?>">
                                    <?php if ($item['discount'] > 0) : ?>
                                        <div class="discount-info">
                                            <div class="price-no-discount"><?= $item['price'] ?></div>
                                            <div class="discount-procent"><?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?></div>
                                        </div>
                                    <?php endif; ?>
                                    <img src="<?= $item['img_url'] ?>">
                                    <div class="product-desc">
                                        <h3 class="product-name"><?= $item['title'] ?></h3>
                                        <span class="price <?= $item['discount'] > 0 ? 'price-with-discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </li>
                            </a>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- FILTER - NVIDIA_PRODUCTS !-->
                <?php if ($type === 'Nvidia') : ?>
                    <ul class="product-list">
                        <?php foreach ($products_nvidia as $i => $item) : ?>
                            <a class="product-link" href="product.php?product_id=<?= $i ?>">
                                <li class="product-card <?= $item['is_new'] ? 'is-new' : '' ?>">
                                    <?php if ($item['discount'] > 0) : ?>
                                        <div class="discount-info">
                                            <div class="price-no-discount"><?= $item['price'] ?></div>
                                            <div class="discount-procent"><?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?></div>
                                        </div>
                                    <?php endif; ?>
                                    <img src="<?= $item['img_url'] ?>">
                                    <div class="product-desc">
                                        <h3 class="product-name"><?= $item['title'] ?></h3>
                                        <span class="price <?= $item['discount'] > 0 ? 'price-with-discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </li>
                            </a>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- FILTER - NEW_PRODUCTS !-->
                <?php if ($type === 'New') : ?>
                    <ul class="product-list">
                        <?php foreach ($products_new as $i => $item) : ?>
                            <a class="product-link" href="product.php?product_id=<?= $i ?>">
                                <li class="product-card is-new">
                                    <?php if ($item['discount'] > 0) : ?>
                                        <div class="discount-info">
                                            <div class="price-no-discount"><?= $item['price'] ?></div>
                                            <div class="discount-procent"><?= ' -' . round(100 - ($item['price'] - $item['discount']) / $item['price'] * 100) . '%' ?></div>
                                        </div>
                                    <?php endif; ?>
                                    <img src="<?= $item['img_url'] ?>">
                                    <div class="product-desc">
                                        <h3 class="product-name"><?= $item['title'] ?></h3>
                                        <span class="price <?= $item['discount'] > 0 ? 'price-with-discount' : '' ?>">
                                            <?= number_format($item['price'] - $item['discount'], 0, ',', ' ') . ' &#8381;' ?>
                                        </span>
                                    </div>
                                </li>
                            </a>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>

                <!-- PAGINATOR !-->
                <div class="paginator">
                    <ol class="pagination-list">

                        <!-- PAGINATOR ALL !-->
                        <?php if ($type === 'all') : ?>
                            <?php for ($i = 1; $i <= $pages_total; $i = $i + 1) : ?>
                                <li class="pagination-button <?= $i === $page ? 'button-active' : '' ?>">
                                    <a class="pagination-link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR AMD !-->
                        <?php if ($type === 'Amd') : ?>
                            <?php for ($i = 1; $i <= $pages_amd_total; $i = $i + 1) : ?>
                                <li class="pagination-button <?= $i === $page ? 'button-active' : '' ?>">
                                    <a class="pagination-link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR NVIDIA !-->
                        <?php if ($type === 'Nvidia') : ?>
                            <?php for ($i = 1; $i <= $pages_nvidia_total; $i = $i + 1) : ?>
                                <li class="pagination-button <?= $i === $page ? 'button-active' : '' ?>">
                                    <a class="pagination-link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                        <!-- PAGINATOR NEW !-->
                        <?php if ($type === 'New') : ?>
                            <?php for ($i = 1; $i <= $pages_new_total; $i = $i + 1) : ?>
                                <li class="pagination-button <?= $i === $page ? 'button-active' : '' ?>">
                                    <a class="pagination-link" href="/index.php?page=<?= $i ?>&product_type=<?= $type ?>"><?= $i ?></a>
                                </li>
                            <?php endfor; ?>
                        <?php endif; ?>

                    </ol>
                </div>


            </div>
        </div>
    </main>
    
    <script src="/scripts/quantity.js"></script>
</body>