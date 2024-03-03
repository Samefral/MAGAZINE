import { createSelector } from 'reselect';
import { NameSpace, ProductsSorts, ProductsFilters } from '../../const';
import { State } from '../../types/state';
import { Product, Products } from '../../types/product';
import { ProductsSortsParams } from '../../types/products-sorts';
import { ProductsFiltersParams } from '../../types/products-filters';
import { getDiscountPercent } from '../../utils/utils';

export const getProducts = (state: State): Products => state[NameSpace.VideocardsData].videocards.data;
export const getProductsLoadingStatus = (state: State): boolean => state[NameSpace.VideocardsData].videocards.isLoading;

export const getProduct = (state: State): Product | null => state[NameSpace.VideocardsData].videocard.data;
export const getProductLoadingStatus = (state: State): boolean => state[NameSpace.VideocardsData].videocard.isLoading;

export const getSortedProducts = createSelector(
  [getProducts],
  (products) => (sortSettings: ProductsSortsParams) => {
    if (!sortSettings.type) {
      return products;
    }
    const sortedProducts = [...products];

    switch (sortSettings.type) {
      case ProductsSorts.Type.values.price:
        sortedProducts.sort((a, b) => (b.price - b.discount) - (a.price - a.discount));
        break;
      case ProductsSorts.Type.values.discount:
        if (sortSettings.order === ProductsSorts.Order.values.up) {
          const discountedProducts = sortedProducts.filter((product) => product.discount > 0);
          const nonDiscountedProducts = sortedProducts.filter((product) => product.discount === 0);
          discountedProducts.sort((a, b) => getDiscountPercent(a.price, a.discount) - getDiscountPercent(b.price, b.discount));
          return [...discountedProducts, ...nonDiscountedProducts];
        }
        sortedProducts.sort((a, b) => getDiscountPercent(b.price, b.discount) - getDiscountPercent(a.price, a.discount));
        break;
    }

    return sortSettings.order === ProductsSorts.Order.values.down ? sortedProducts : sortedProducts.reverse();
  }
);

export const getfilteredProducts = createSelector(
  [getProducts],
  (products) => (sortedProducts: Products, {types, features, minPrice, maxPrice}: ProductsFiltersParams, priceFilter: boolean) => {
    let filteredProducts = [...sortedProducts];

    if (types.length > 0) {
      filteredProducts = filteredProducts.filter((product) => types.includes(product.type));
    }

    if (features.length > 0) {
      const featureValues = Object.values(ProductsFilters.Features.values);

      filteredProducts = filteredProducts.filter((product) =>
        featureValues.every((featureValue) => {
          if (features.includes(featureValue)) {
            switch (featureValue) {
              case ProductsFilters.Features.values.new:
                return product.is_new;
              case ProductsFilters.Features.values.discount:
                return product.discount > 0;
            }
          }
          return true;
        }));
    }

    if (priceFilter) {
      if (minPrice) {
        filteredProducts = filteredProducts.filter((product) => product.price >= minPrice);
      }
      if (maxPrice) {
        filteredProducts = filteredProducts.filter((product) => product.price <= maxPrice);
      }
    }

    return filteredProducts;
  }
);
