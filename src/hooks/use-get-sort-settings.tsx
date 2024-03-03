import { useLocation } from 'react-router-dom';
import { ProductsSorts } from '../const';
import { ProductsSortsParams } from '../types/products-sorts';

function useGetSortSettings() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentSortType = searchParams.get(ProductsSorts.Type.paramName);
  const currentSortOrder = searchParams.get(ProductsSorts.Order.paramName);

  const sortSettings = {
    type: currentSortType,
    order: currentSortOrder
  } as ProductsSortsParams;

  return sortSettings;
}

export default useGetSortSettings;
