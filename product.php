<?php
require('products_db.php');
$id = $_GET['product_id'];
$new = get_product_is_new($id);
$title = get_product_title($id);
$img_url = get_img_url($id);
$price = get_product_price($id);
$discount = get_product_discount($id);
$price_with_discount = $price - $discount;
$discount_procent = round(100 - ($price - $discount) / $price * 100);
require('components/product_info.php');
?>