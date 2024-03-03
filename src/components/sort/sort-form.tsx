import { useNavigate, useLocation, generatePath } from 'react-router-dom';
import { AppRoute, ProductsSorts } from '../../const';
import useGetSortSettings from '../../hooks/use-get-sort-settings';

const DEFAULT_SORT_TYPE = ProductsSorts.Type.values.price;
const DEFAULT_SORT_ORDER = ProductsSorts.Order.values.down;

function SortForm(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentSortSettings = useGetSortSettings();

  if (!currentSortSettings.type) {
    searchParams.set(ProductsSorts.Type.paramName, DEFAULT_SORT_TYPE);
  }
  if (!currentSortSettings.order) {
    searchParams.set(ProductsSorts.Order.paramName, DEFAULT_SORT_ORDER);
  }

  const osSortChange = (paramName: string, paramValue: string) => {
    searchParams.set(paramName, paramValue);
    navigate(`${generatePath(AppRoute.Catalog, { page: '1' })}?${searchParams.toString()}`);
  };

  return (
    <form action="#">
      <div className="catalog-sort__inner">
        <p className="title title--h4">Сортировать:</p>
        <div className="catalog-sort__type">
          <div className="catalog-sort__btn-text">
            <input
              type="radio"
              id="sortPrice"
              name="sort"
              onChange={() => osSortChange(ProductsSorts.Type.paramName, ProductsSorts.Type.values.price)}
              checked={currentSortSettings.type === ProductsSorts.Type.values.price}
            />
            <label htmlFor="sortPrice">по цене</label>
          </div>
          <div className="catalog-sort__btn-text">
            <input
              type="radio"
              id="sortPopular"
              name="sort"
              onChange={() => osSortChange(ProductsSorts.Type.paramName, ProductsSorts.Type.values.discount)}
              checked={currentSortSettings.type === ProductsSorts.Type.values.discount}
            />
            <label htmlFor="sortPopular">по скидке</label>
          </div>
        </div>
        <div className="catalog-sort__order">
          <div className="catalog-sort__btn catalog-sort__btn--up">
            <input
              type="radio"
              id="up"
              name="sort-icon"
              aria-label="По возрастанию"
              onChange={() => osSortChange(ProductsSorts.Order.paramName, ProductsSorts.Order.values.up)}
              checked={currentSortSettings.order === ProductsSorts.Order.values.up}
            />
            <label htmlFor="up">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
          <div className="catalog-sort__btn catalog-sort__btn--down">
            <input
              type="radio"
              id="down"
              name="sort-icon"
              aria-label="По убыванию"
              onChange={() => osSortChange(ProductsSorts.Order.paramName, ProductsSorts.Order.values.down)}
              checked={currentSortSettings.order === ProductsSorts.Order.values.down}
            />
            <label htmlFor="down">
              <svg width="16" height="14" aria-hidden="true">
                <use xlinkHref="#icon-sort"></use>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SortForm;
