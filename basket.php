<?php
require('products_db.php');

$id = $_GET['product_id'];
$title = get_product_title($id);
$img_url = get_img_url($id);
$discount = get_product_discount($id);
$price = get_product_price($id) - $discount;
$is_new = get_product_is_new($id);

require('components/delivery_info.php');
?>