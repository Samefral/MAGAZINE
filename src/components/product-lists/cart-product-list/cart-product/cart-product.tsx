import { Product } from '../../../../types/product';
import { formatPrice, getDiscountPercent } from '../../../../utils/utils';

type cartProductProps = {
  product: Product;
}

function CartProduct({product}: cartProductProps): JSX.Element {
  return (
    <li className="order-list__item order-item">
      <img
        className="order-item__img"
        alt={product.name}
        src={product.img_url}
      />
      <span className="order-item__name">{product.name}</span>
      <div className="order-item__count-block">
        <button className="order-item__count-up count-up">+</button>
        <span className="order-item__quantity">{product.quantityInCart}</span>
        <button className="order-item__count-down count-down">-</button>
      </div>
      <span className="order-item__price">{formatPrice(product.price - product.discount)}</span>
      <span className="order-item__discount-procent">
        -{getDiscountPercent(product.price, product.discount)}%
      </span>
      <button className="item-delete-button">X</button>
    </li>
  );
}

export default CartProduct;
