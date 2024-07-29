import { useNavigate, useLocation, generatePath } from 'react-router-dom';
import { AppRoute, ProductsFilters } from '../../const';
import useGetFilterParams from '../../hooks/use-get-filters-params';
import PriceFilter from './price-filter/price-filter';

function Filters(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentFilters = useGetFilterParams();

  const deleteParam = (paramName: string, paramValue: string) => {
    const result: string[] = [];

    searchParams.forEach((value, key) => {
      if (key === paramName && value === paramValue) {
        return;
      }
      result.push(`${key}=${value}`);
    });

    navigate(`?${ result.join('&')}`, { replace: true });
  };

  const addParam = (filterName: string, filterValue: string) => {
    searchParams.append(filterName, filterValue);
    navigate(`${generatePath(AppRoute.Catalog, { page: '1' })}?${searchParams.toString()}`);
  };

  const onFilterChange = (evt: React.ChangeEvent<HTMLInputElement>, filterName: string, filterValue: string, isSingleChoice?: boolean) => {
    if (isSingleChoice) {
      if (evt.currentTarget.checked) {
        searchParams.set(filterName, filterValue);
      } else {
        searchParams.delete(filterName);
      }
      navigate(`${generatePath(AppRoute.Catalog, { page: '1' })}?${searchParams.toString()}`);
      return;
    }
    if (evt.currentTarget.checked) {
      addParam(filterName, filterValue);
    } else {
      deleteParam(filterName, filterValue);
    }
  };

  return (
    <form action="#" className="catalog-filter">
      <h2 className="visually-hidden">Фильтр</h2>
      <PriceFilter currentFilters={currentFilters}/>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h4">Модель</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="amd"
              checked={currentFilters.types.includes(ProductsFilters.Type.values.amd)}
              onChange={(evt) => onFilterChange(evt, ProductsFilters.Type.paramName, ProductsFilters.Type.values.amd)}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">AMD</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="nvidia"
              checked={currentFilters.types.includes(ProductsFilters.Type.values.nvidia)}
              onChange={(evt) => onFilterChange(evt, ProductsFilters.Type.paramName, ProductsFilters.Type.values.nvidia)}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">NVIDIA</span>
          </label>
        </div>
      </fieldset>
      <fieldset className="catalog-filter__block">
        <legend className="title title--h4">Особенности</legend>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="new"
              checked={currentFilters.features.includes(ProductsFilters.Features.values.new)}
              onChange={(evt) => onFilterChange(evt, ProductsFilters.Features.paramName, ProductsFilters.Features.values.new)}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Новые</span>
          </label>
        </div>
        <div className="custom-checkbox catalog-filter__item">
          <label>
            <input
              type="checkbox"
              name="discount"
              checked={currentFilters.features.includes(ProductsFilters.Features.values.discount)}
              onChange={(evt) => onFilterChange(evt, ProductsFilters.Features.paramName, ProductsFilters.Features.values.discount)}
            />
            <span className="custom-checkbox__icon"></span>
            <span className="custom-checkbox__label">Со скидкой</span>
          </label>
        </div>
      </fieldset>
      <button onClick={() => navigate(generatePath(AppRoute.Catalog, {page: '1'}))} className="btn catalog-filter__reset-btn" type="reset">
        Сбросить фильтры
      </button>
    </form>
  );
}

export default Filters;
