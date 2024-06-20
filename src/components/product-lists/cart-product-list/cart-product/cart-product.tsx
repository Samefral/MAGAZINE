import { useAppDispatch } from '../../../../hooks';
import { addProductToCart, decreaseProductCount, removeProductFromCart } from '../../../../store/cart-data/cart-data';
import { Product } from '../../../../types/product';
import { formatPrice, getDiscountPercent } from '../../../../utils/utils';

type cartProductProps = {
  product: Product;
}

function CartProduct({product}: cartProductProps): JSX.Element {
  const dispatch = useAppDispatch();

  const handleIncreaseBtnClick = () => {
    dispatch(addProductToCart(product));
  };

  const handleDecreaseBtnClick = () => {
    if (product.quantityInCart === 1) {
      return;
    }
    dispatch(decreaseProductCount(product));
  };

  const handleRemoveBtnClick = () => {
    dispatch(removeProductFromCart(product));
  };

  return (
    <li className="order-list__item order-item">
      <img
        className="order-item__img"
        alt={product.name}
        src={product.img_url}
      />
      <span className="order-item__name">{product.name}</span>
      <div className="order-item__count-block">
        <button
          className="order-item__count-up count-up"
          onClick={handleIncreaseBtnClick}
        >
          +
        </button>
        <span className="order-item__quantity">{product.quantityInCart}</span>
        <button
          className="order-item__count-down count-down"
          onClick={handleDecreaseBtnClick}
        >
          -
        </button>
      </div>
      <span className="order-item__price">
        {formatPrice((product.price - product.discount) * product.quantityInCart)}
      </span>
      {
        product.discount ?
          <span className="order-item__discount-procent">
           -{getDiscountPercent(product.price, product.discount)}%
          </span> :
          ''
      }
      <button
        className="item-delete-button"
        onClick={handleRemoveBtnClick}
      >
        X
      </button>
    </li>
  );
}

export default CartProduct;
