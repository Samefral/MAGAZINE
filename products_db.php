<?php
function get_products()
{
  return [
    '1' => [
      'title' => 'GeForce GTX 1060',
      'img_url' => '/images/geforce_gtx_1060.jpg',
      'discount' => 5000,
      'price' => 21300,
      'is_new' => false,
      'is_last' => false,
      'type' => 'Nvidia',
    ],
    '2' => [
      'title' => 'Radeon RX 570',
      'img_url' => '/images/radeon_rx_570.jpg',
      'discount' => 200,
      'price' => 13000,
      'is_new' => true,
      'is_last' => false,
      'type' => 'Amd',
    ],
    '3' => [ 
      'title' => 'GeForce GTX 1050 Ti',
      'img_url' => '/images/geforce_gtx_1050_ti.jpg',
      'discount' => 0,
      'price' => 12000,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '4' => [
      'title' => 'GeForce RTX 2060',
      'img_url' => '/images/geforce_rtx_2060.jpg',
      'discount' => 7000,
      'price' => 42000,
      'is_new' => true,
      'is_last' => true,
      'type' => 'Ndivia',
    ],
    '5' => [
      'title' => 'GeForce GTX 1660 SUPER',
      'img_url' => '/images/geforce_gtx_1660_super.jpg',
      'discount' => 0,
      'price' => 18000,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '6' => [
      'title' => 'Radeon R9 380X',
      'img_url' => '/images/radeon_r9_380x.jpg',
      'discount' => 0,
      'price' => 17200,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '7' => [
      'title' => 'Radeon RX 480',
      'img_url' => '/images/radeon_rx_480.jpg',
      'discount' => 0,
      'price' => 19500,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '8' => [
      'title' => 'GeForce GTX 960',
      'img_url' => '/images/geforce_gtx_960.jpg',
      'discount' => 1500,
      'price' => 17370,
      'is_new' => true,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '9' => [
      'title' => 'GeForce GTX 1070',
      'img_url' => '/images/geforce_gtx_1070.webp',
      'discount' => 0,
      'price' => 17200,
      'is_new' => true,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '10' => [
      'title' => 'GeForce RTX 2060 SUPER',
      'img_url' => '/images/geforce_rtx_2060_super.jpg',
      'discount' => 36000,
      'price' => 110000,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '11' => [
      'title' => 'AXRX VEGA 64',
      'img_url' => '/images/axrx_vega_64.jpg',
      'discount' => 0,
      'price' => 41000,
      'is_new' => true,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '12' => [
      'title' => 'Radeon HD 2900 Pro',
      'img_url' => '/images/radeon_hd2900_pro.jpg',
      'discount' => 0,
      'price' => 7200,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '13' => [
      'title' => 'Ultra Durable 2 GV-N950OC-2GD',
      'img_url' => '/images/ultra_durable_2.jpg',
      'discount' => 0,
      'price' => 12480,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Nvidia',
    ],
    '14' => [
      'title' => 'Radeon RX 6800',
      'img_url' => '/images/radeon_rx_6800.jpg',
      'discount' => 10000,
      'price' => 154000,
      'is_new' => true,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '15' => [
      'title' => 'Radeon RX 5500',
      'img_url' => '/images/radeon_rx_5500_xt.jpg',
      'discount' => 0,
      'price' => 47000,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Amd',
    ],
    '16' => [
      'title' => 'Radeon RX 6700 XT',
      'img_url' => '/images/radeon_rx_6700_xt.jpg',
      'discount' => 0,
      'price' => 120000,
      'is_new' => false,
      'is_last' => true,
      'type' => 'Amd',
    ],
  ];
};

function get_filters()
{
  return [
    0 => [
      'url' => 'all',
      'name' => 'Все товары',
    ],
    1 => [
      'url' => 'Amd',
      'name' => 'Видеокарты Amd',
    ],
    2 => [
      'url' => 'Nvidia',
      'name' => 'Видеокарты Nvidia',
    ],
    3 => [
      'url' => 'New',
      'name' => 'Новинки',
    ],
  ];
}


function get_product_attribute($id, $attr)
{
  $products = get_products();
  $result = $products[$id][$attr];
  return $result;
}
function get_product_price($id)
{
  return get_product_attribute($id, 'price');
}
function get_product_title($id)
{
  return get_product_attribute($id, 'title');
}
function get_img_url($id)
{
  return get_product_attribute($id, 'img_url');
}
function get_product_discount($id)
{
  return get_product_attribute($id, 'discount');
}
function get_product_is_new($id)
{
  return get_product_attribute($id, 'is_new');
}
