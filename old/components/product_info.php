<section class="product-info">
    <div class="container">
        <div class="item <?= $new ? 'item--new' : '' ?>">
            <h2 class="item__name"><?= $title ?></h2>
            <img src="<?= $img_url ?>" alt="<?= $title ?>" class="item__img">
            <div class="item__buy-block item-buy">
                <?php if ($discount > 0) : ?>
                    <div class="item-buy__discount-info discount-info">
                        <p class="discount-info__no-discount"><?= $price ?></p>
                        <p class="discount-info__discount-procent"><?= ' -' . $discount_procent . '%' ?></p>
                    </div>
                <?php endif; ?>
                <?php if ($discount > 0) : ?>
                    <span class="item-buy__price item-buy__price--discount-price">
                        <?= number_format($price_with_discount, 0, ',', ' ') ?> &#8381;
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                        <span class="animation-border"></span>
                    </span>
                <?php else : ?>
                    <span class="item-buy__price"><?= number_format($price_with_discount, 0, ',', ' ') ?> &#8381;</span>
                <?php endif; ?>
                <button class="buy-button">Добавить</button>
            </div>
            <div class="item__characteristic">
                <h2 class="item__characteristic-title">Характеристики</h2>
                <dl class="characteristic-list">
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">частота ядра/памяти:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">объем видеопамяти:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">техпроцесс:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">разъемы:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">интерфейс подключения:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">TDP:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">поддержка API:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">максимальное разрешение:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>
                    <div class="characteristic-list__item">
                        <dt class="characteristic-list__term">количество поддерживаемых мониторов:</dt>
                        <dd class="characteristic-list__definition">UNKNOW</dd>
                    </div>

                </dl>
            </div>
            <p class="item__added-info"></p>
        </div>

    </div>
</section>

<div class="data-php-id hidden" data-id="<?= $id ?>"></div>
<div class="data-php-price hidden" data-price="<?= $price_with_discount ?>"></div>
<div class="data-php-procent hidden" data-procent="<?= $discount_procent ?>"></div>

<script src="/scripts/app.js"></script>
<script src="/scripts/product.js"></script>
</body>