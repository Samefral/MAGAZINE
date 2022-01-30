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

            <!-- PRODUCTS !-->
            <ul class="product-catalog__product-list product-list">
                <?php filter($type, 'all', $products_on_page) ?>
                <?php filter($type, 'Amd', $products_amd) ?>
                <?php filter($type, 'Nvidia', $products_nvidia) ?>
                <?php filter($type, 'New', $products_new) ?>
            </ul>

            <!-- PAGINATOR !-->
            <ol class="product-catalog__paginator pagination-list">
                <?php paginator($type, 'all', $pages_total, $page) ?>
                <?php paginator($type, 'Amd', $pages_amd_total, $page) ?>
                <?php paginator($type, 'Nvidia', $pages_nvidia_total, $page) ?>
                <?php paginator($type, 'New', $pages_new_total, $page) ?>
            </ol>

        </div>
    </section>
</main>

<script src="/scripts/app.js"></script>
</body>

<?php

function filter($products_type, $filter_type, $products_array) {
    if ($products_type === $filter_type) {
        foreach ($products_array as $i => $item) : ?>
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
        <?php endforeach;
    }
}

function paginator($products_type, $paginator_type, $pages_array, $page) {
    if ($products_type === $paginator_type) {
        for ($i = 1; $i <= $pages_array; $i = $i + 1) : ?>
            <li class="pagination-list__item pagination-button <?= $i === $page ? 'pagination-button--active' : '' ?>">
                <a class="pagination-list__link" href="/index.php?page=<?= $i ?>&product_type=<?= $products_type ?>"><?= $i ?></a>
            </li>
        <?php endfor;
    }
}

?>