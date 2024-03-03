import classNames from 'classnames';
import { Link, generatePath } from 'react-router-dom';
import { Product } from '../../../../types/product';
import { getDiscountPercent, formatPrice } from '../../../../utils/utils';
import { AppRoute } from '../../../../const';

type ProductCardProps = {
  product: Product;
}

function ProductCard({product}: ProductCardProps): JSX.Element {
  const isDiscounted = product.discount > 0;

  return (
    <li className={classNames('product-list__card product-card', product.is_new && 'product-card--new')}>
      <Link className="product-card__link" to={generatePath(AppRoute.Product, {id: String(product.id)})}>
        <img className="product-card__img" src={product.img_url} alt={product.name} />
        <div className="product-card__desc">
          {
            isDiscounted ?
              <div className="product-card__discout-info discount-info">
                <span className="discount-info__no-discount">{product.price}</span>
                <span className="discount-info__discount-procent">
                  {getDiscountPercent(product.price, product.discount)}%
                </span>
              </div>
              :
              null
          }
          <h3 className="product-card__name">{product.name}</h3>
          <span className={`product-card__price ${isDiscounted ? 'product-card__price--discount' : ''}`}>
            {formatPrice(product.price - product.discount)}
          </span>
        </div>
      </Link>
    </li>
  );
}

export default ProductCard;
