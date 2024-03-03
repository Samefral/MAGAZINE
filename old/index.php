<?php
require('products_db.php');

// FILTER
$type = $_GET['product_type'] ?: 'all';
$filters = get_filters();
$items = get_products();

/* CHEAP SORT
function sort_by_price($product_1, $product_2) {
    if ($product_1['price'] > $product_2['price']) {
      $result = 1;
    }
  
    if ($product_1['price'] < $product_2['price']) {
      $result = -1;
    }
  
    if ($product_1['price'] === $product_2['price']) {
      $result = 0;
    }
  
    return $result;
  }
 
  uasort($items, 'sort_by_price');
  $cheap_products = array_slice($items, 0, 5, true);
 */

// FILTER-AMD
function filter_amd($item)
{
    return $item['type'] === 'Amd';
}
$amd_products = array_filter($items, 'filter_amd');

// FILTER-NVIDIA
function filter_nvidia($item)
{
    return $item['type'] === 'Nvidia';
}
$nvidia_products = array_filter($items, 'filter_nvidia');

// FILTER-NEW
function filter_new($item)
{
    return $item['is_new'];
}
$new_products = array_filter($items, 'filter_new');

// PAGINATOR 
$limit = 5;
$page = intval($_GET['page']) ?: 1;
$offset = ($page - 1) * $limit;

// PAGINATOR ALL
$products_on_page = array_slice($items, $offset, $limit, true);
// $products_quantity = count($items);
$pages = $total_products_length / $limit;
$pages_total = ceil($pages);

// PAGINATOR-AMD
$products_amd = array_slice($amd_products, $offset, $limit, true);
$products_amd_quantity = count($amd_products);
$pages_amd = $products_amd_quantity / $limit;
$pages_amd_total = ceil($pages_amd);

// PAGINATOR-NVIDIA
$products_nvidia = array_slice($nvidia_products, $offset, $limit, true);
$products_nvidia_quantity = count($nvidia_products);
$pages_nvidia = $products_nvidia_quantity / $limit;
$pages_nvidia_total = ceil($pages_nvidia);

// PAGINATOR-NEW
$products_new = array_slice($new_products, $offset, $limit, true);
$products_new_quantity = count($new_products);
$pages_new = $products_new_quantity / $limit;
$pages_new_total = ceil($pages_new);

require('components/header.php');
require('components/products_list.php');
?>