import { useRef } from 'react';
import { useAppSelector } from '../../../hooks';
import { getProducts } from '../../../store/videocards-data/selectors';
import { ProductsFilters } from '../../../const';
import { Product } from '../../../types/product';
import { ProductsFiltersParams } from '../../../types/products-filters';
import { useLocation, useNavigate } from 'react-router-dom';

type PriceFilterProps = {
  currentFilters: ProductsFiltersParams;
}

function PriceFilter({currentFilters}: PriceFilterProps): JSX.Element {
  const minPriceInputRef = useRef<HTMLInputElement>(null);
  const minPriceInputElement = minPriceInputRef.current as HTMLInputElement;
  const maxPriceInputRef = useRef<HTMLInputElement>(null);
  const maxPriceInputElement = maxPriceInputRef.current as HTMLInputElement;

  if (minPriceInputElement && maxPriceInputElement) {
    minPriceInputElement.value = minPriceInputElement.value === '0' ? '' : String(currentFilters.minPrice);
    maxPriceInputElement.value = maxPriceInputElement.value === '0' ? '' : String(currentFilters.maxPrice);
  }

  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);

  const filteredCameras = useAppSelector(getProducts);
  const prices = filteredCameras.map((product: Product) => product.price);
  const maxPossiblePrice = Math.max(...prices);
  const minPossiblePrice = Math.min(...prices);

  const onPriceInput = (evt: React.FormEvent<HTMLInputElement>, filterName: string) => {
    const valueInString = evt.currentTarget.value;
    const valueInNumber = Number(evt.currentTarget.value);

    if (valueInNumber <= 0 || valueInString === '-') {
      evt.currentTarget.value = '';
      searchParams.delete(filterName);
      navigate(`${location.pathname}?${searchParams.toString()}`);
      return;
    }

    searchParams.set(filterName, evt.currentTarget.value);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h4">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price"
              ref={minPriceInputRef}
              placeholder={!isFinite(minPossiblePrice) ? 'от' : `${minPossiblePrice}`}
              onInput={(evt) => onPriceInput(evt, ProductsFilters.Price.minParamName)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              ref={maxPriceInputRef}
              placeholder={!isFinite(maxPossiblePrice) ? 'до' : `${maxPossiblePrice}`}
              onInput={(evt) => onPriceInput(evt, ProductsFilters.Price.maxParamName)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
