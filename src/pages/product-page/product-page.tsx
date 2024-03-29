import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchProductByIdAction } from '../../store/api-actions';
import { getProduct } from '../../store/videocards-data/selectors';
import { getDiscountPercent, formatPrice } from '../../utils/utils';
import { Product } from '../../types/product';
import LoadingScreen from '../loading-screen/loading-screen';

function ProductPage(): JSX.Element {
  const product = useAppSelector(getProduct);

  const addToCartBtnRef = useRef<HTMLButtonElement>(null);
  const addToCartBtnElem = addToCartBtnRef.current;

  const productId = Number(useParams().id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAction(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <LoadingScreen />;
  }

  const productInStorage = JSON.parse(localStorage.getItem(String(product.id)) as string) as Product;

  const cartQuantityDisplayElem = document.querySelector('.basket-items-quantity') as HTMLSpanElement;
  const itemAddedInfoDisplayElem = document.querySelector('.item__added-info') as HTMLParagraphElement;

  const updateQuantityDisplayInfo = (updatedItem: Product, cartQuantity: number) => {
    cartQuantityDisplayElem.textContent = String(Number(cartQuantity) + 1);
    itemAddedInfoDisplayElem.textContent = `Добавлено: ${ updatedItem.quantityInCart ?? 1 } шт.`;
    if (Number(cartQuantityDisplayElem.textContent) === 1) {
      cartQuantityDisplayElem.classList.remove('hidden');
    }
  };

  const flicker = (btn: HTMLButtonElement, updatedItem: Product, cartQuantity: number) => {
    const flickerEl = document.createElement('div');
    flickerEl.className = 'flicker';
    btn.appendChild(flickerEl);
    setTimeout(() => {
      flickerEl.remove();
      updateQuantityDisplayInfo(updatedItem, cartQuantity);
    }, 850);
  };

  const addToCartBtnClickHandler = () => {
    const itemInCart = localStorage.getItem(String(product.id));
    const cartQuantity = Number(localStorage.getItem('cart-quantity'));

    if (addToCartBtnElem) {

      if (itemInCart) {
        const itemObj = JSON.parse(itemInCart) as Product;
        const updatedItem = {
          ...itemObj,
          quantityInCart: itemObj.quantityInCart += 1
        };
        localStorage.setItem(String(product.id), JSON.stringify(updatedItem));
        flicker(addToCartBtnElem, updatedItem, cartQuantity);
      } else {
        localStorage.setItem(String(product.id),
          JSON.stringify({...product, quantityInCart: 1})
        );

        flicker(addToCartBtnElem, {...product, quantityInCart: 1}, cartQuantity);
      }

      localStorage.setItem('cart-quantity', String(cartQuantity + 1) ?? '1');
    }

  };

  return (
    <main>
      <Helmet>
        <title>{product.name}</title>
      </Helmet>
      <section className="product-info">
        <div className="container">
          <div className="item <?= $new ? 'item--new' : '' ?>">
            <h2 className="item__name">{product.name}</h2>
            <img src={product.img_url} alt={product.name} className="item__img" />
            <div className="item__buy-block item-buy">
              {
                product.discount > 0
                  ?
                  <>
                    <div className="item-buy__discount-info discount-info">
                      <p className="discount-info__no-discount">{product.price}</p>
                      <p className="discount-info__discount-procent">{getDiscountPercent(product.price, product.discount)}%</p>
                    </div>
                    <span className="item-buy__price item-buy__price--discount-price">
                      {formatPrice(product.price - product.discount)}
                      <span className="animation-border"></span>
                      <span className="animation-border"></span>
                      <span className="animation-border"></span>
                      <span className="animation-border"></span>
                    </span>
                  </>
                  :
                  <span className="item-buy__price">{formatPrice(product.price)}</span>
              }
              <button
                className="buy-button"
                ref={addToCartBtnRef}
                onClick={(addToCartBtnClickHandler)}
              >
                В корзину
              </button>
            </div>
            <div className="item__characteristic">
              <h2 className="item__characteristic-title">Характеристики</h2>
              <dl className="characteristic-list">
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">частота ядра/памяти:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">объем видеопамяти:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">техпроцесс:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">разъемы:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">интерфейс подключения:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">TDP:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">поддержка API:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">максимальное разрешение:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>
                <div className="characteristic-list__item">
                  <dt className="characteristic-list__term">количество поддерживаемых мониторов:</dt>
                  <dd className="characteristic-list__definition">UNKNOW</dd>
                </div>

              </dl>
            </div>
            <p className="item__added-info">{productInStorage ? `Добавлено: ${productInStorage.quantityInCart} шт.` : ''}</p>
          </div>

        </div>
      </section>
    </main>
  );
}

export default ProductPage;
