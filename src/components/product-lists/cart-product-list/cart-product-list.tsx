import { useAppSelector } from '../../../hooks';
import { getCartProducts, getTotalCartPrice } from '../../../store/cart-data/selectors';
// import { Products } from '../../../types/product';
import { formatPrice } from '../../../utils/utils';
import CartProduct from './cart-product/cart-product';

function CartProductList(): JSX.Element {
  const cartProducts = useAppSelector(getCartProducts);
  const cartTotalPrice = useAppSelector(getTotalCartPrice);

  return (
    cartProducts.length === 0 ? <p style={{marginTop: '51px', fontSize: '23px'}}>Корзина пуста</p> :
      <div>
        <ul className="order-table__list order-list">
          {cartProducts.map((product) =>
            <CartProduct key={product.id} product={product} />
          )}
        </ul>
        <div className="order-table__order-info">
          <div className="order-table__mistake-message">
            <span className="order-table__mistake-icon">X</span>
            <span className="order-table__mistake-text">Войдите в аккаунт</span>
          </div>
          <button className="order-button">Заказать</button>
          <span className="order-table__order-cost">Общая стоимость: {formatPrice(cartTotalPrice)}</span>
        </div>
      </div>
  );
}

export default CartProductList;
