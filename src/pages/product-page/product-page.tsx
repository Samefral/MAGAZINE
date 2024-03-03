import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { fetchProductByIdAction } from '../../store/api-actions';
// import { AppRoute } from '../../const';
// import { getCamera, getCameraDataLoadingStatus } from '../../store/cameras-data/selectors';
import { getProduct } from '../../store/videocards-data/selectors';
import { getDiscountPercent, formatPrice } from '../../utils/utils';
import LoadingScreen from '../loading-screen/loading-screen';
import { Product } from '../../types/product';

function ProductPage(): JSX.Element {
  const [isFlicker, setIsFlicker] = useState(false);
  const navigate = useNavigate();
  const product = useAppSelector(getProduct);
  // const isCameraDataLoading = useAppSelector(getCameraDataLoadingStatus);

  const addToCartBtnRef = useRef<HTMLButtonElement>(null);

  const productId = Number(useParams().id);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductByIdAction(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <LoadingScreen />;
  }

  const productInStorage = JSON.parse(localStorage.getItem(String(product.id)) as string) as Product;

  const flicker = (btn: HTMLButtonElement) => {
    setIsFlicker(true);
    const flickerEl = document.createElement('div');
    flickerEl.className = 'flicker';
    btn.appendChild(flickerEl);
    setTimeout(() => {
      flickerEl.remove();
      setIsFlicker(false);
      if (!isFlicker) {
        navigate('');
      }
    }, 850);
  };

  const addToCartBtnClickHandler = () => {
    const itemInCart = localStorage.getItem(String(product.id));
    const cartQuantity = Number(localStorage.getItem('cart-quantity'));

    if (!cartQuantity) {
      localStorage.setItem('cart-quantity', '1');
    } else {
      localStorage.setItem('cart-quantity', String(cartQuantity + 1));
    }

    if (itemInCart) {
      const itemObj = JSON.parse(itemInCart) as Product;
      const updatedItem = {
        ...itemObj,
        quantityInCart: itemObj.quantityInCart += 1
      };
      localStorage.setItem(String(product.id), JSON.stringify(updatedItem));
    } else {
      localStorage.setItem(String(product.id),
        JSON.stringify({...product, quantityInCart: 1})
      );
    }

    if (addToCartBtnRef.current) {
      flicker(addToCartBtnRef.current);
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
