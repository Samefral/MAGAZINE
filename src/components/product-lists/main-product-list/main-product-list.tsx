import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../../hooks';
import { setCurrentSortType, setCurrentSortOrder } from '../../../store/videocards-data/videocards-data';
import useGetFilterParams from '../../../hooks/use-get-filters-params';
import useGetSortSettings from '../../../hooks/use-get-sort-settings';
import { getfilteredProducts } from '../../../store/videocards-data/selectors';
import { PRODUCTS_PER_PAGE } from '../../../const';
import SortForm from '../../sort/sort-form';
import ProductCard from './product-card/product-card';
import Pagination from '../../pagination/pagination';

const EmptyProductsListMessageStyle = {
  color: 'white',
  alignSelf: 'center',
  margin: '0 auto',
} as React.CSSProperties;

const EMPTY_PRODUCTS_LIST_MESSAGE = 'По вашему запросу ничего не найдено';

function MainProductList(): JSX.Element {
  const currentFilters = useGetFilterParams();
  const filteredProducts = useAppSelector(getfilteredProducts)(currentFilters, true);

  const currentSortSettings = useGetSortSettings();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setCurrentSortType(currentSortSettings.type));
    dispatch(setCurrentSortOrder(currentSortSettings.order));
  }, [currentSortSettings.type, currentSortSettings.order, dispatch]);

  const page = Number(useParams().page);
  const currentPage = page ? page : 1;
  const productsOnPage = filteredProducts.slice((currentPage - 1) * PRODUCTS_PER_PAGE, currentPage * PRODUCTS_PER_PAGE);

  return (
    <div className='catalog__content'>
      <SortForm />
      <ul className="product-catalog__product-list product-list">
        {
          productsOnPage.length === 0
            ?
            <h2 className='title--h3' style={EmptyProductsListMessageStyle}>{EMPTY_PRODUCTS_LIST_MESSAGE}</h2>
            :
            productsOnPage.map((product) =>
              <ProductCard key={product.id} product={product} />
            )
        }
      </ul>
      <Pagination productsLength={filteredProducts.length} currentPage={currentPage} />
    </div>
  );
}

export default MainProductList;
