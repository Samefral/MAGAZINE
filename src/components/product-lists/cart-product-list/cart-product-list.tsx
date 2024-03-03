import { Product } from '../../../types/product';
import { formatPrice } from '../../../utils/utils';
import CartProduct from './cart-product/cart-product';

function CartProductList(): JSX.Element {
  const items = {...localStorage};
  const products = Object.values(items).map((product: string) => JSON.parse(product) as Product);
  // eslint-disable-next-line no-console
  console.log(Object.values(items));
  products.pop();

  let totalPrice = 0;

  products.forEach((product) => {
    totalPrice += (product.price - product.discount) * product.quantityInCart;
  });

  return (
    products.length === 0 ? <p>Корзина пуста</p> :
      <div>
        <ul className="order-table__list order-list">
          {products.map((product) =>
            <CartProduct key={product.id} product={product}/>
          )}
        </ul>
        <div className="order-table__order-info">
          <div className="order-table__mistake-message">
            <span className="order-table__mistake-icon">X</span>
            <span className="order-table__mistake-text">Войдите в аккаунт</span>
          </div>
          <button className="order-button">Заказать</button>
          <span className="order-table__order-cost">Общая стоимость: {formatPrice(totalPrice)}</span>
        </div>
      </div>
  );
}

export default CartProductList;
