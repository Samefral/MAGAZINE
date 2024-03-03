import { Helmet } from 'react-helmet-async';
import CartProductList from '../../components/product-lists/cart-product-list/cart-product-list';

function CartPage(): JSX.Element {

  return (
    <main>
      <Helmet>
        <title>Корзина - Magazine</title>
      </Helmet>
      <section className="page__basket basket">
        <div className="container">
          <div className="basket__panel order-table">
            <h1 className="order-table__title">Заказ доставки</h1>
            <CartProductList />
          </div>
        </div>
      </section>
    </main>
  );
}

export default CartPage;
