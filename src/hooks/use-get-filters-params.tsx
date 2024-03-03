import { useLocation } from 'react-router-dom';
import { ProductsFilters } from '../const';

function useGetFilterParams() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const currentTypes = searchParams.getAll(ProductsFilters.Type.paramName);
  const currentFeatures = searchParams.getAll(ProductsFilters.Features.paramName);
  const currentMinPrice = Number(searchParams.get(ProductsFilters.Price.minParamName));
  const currentMaxPrice = Number(searchParams.get(ProductsFilters.Price.maxParamName));

  const filterParams = {
    types: currentTypes,
    features: currentFeatures,
    minPrice: currentMinPrice,
    maxPrice: currentMaxPrice,
  };

  return filterParams;
}

export default useGetFilterParams;
