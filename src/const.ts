export enum AppRoute {
  Root = '/',
  Catalog = '/catalog/:page',
  Login = '/login',
  Cart = '/cart',
  Product = '/product/:id',
}

export enum APIRoute {
  Products = '/products'
}

export enum NameSpace {
  VideocardsData = 'VIDEOCARDS_DATA',
}

export const ProductsFilters = {
  Price: {
    minParamName: 'price-gte',
    maxParamName: 'price-lte',
  },
  Type: {
    paramName: 'type',
    values: {
      amd: 'Amd',
      nvidia: 'Nvidia',
    }
  },
  Features: {
    paramName: 'features',
    values: {
      new: 'new',
      discount: 'discount'
    },
  }
} as const;

export const ProductsSorts = {
  Type: {
    paramName: 'sort-type',
    values: {
      price: 'price',
      discount: 'discount',
    }
  },
  Order: {
    paramName: 'sort-order',
    values: {
      up: 'up',
      down: 'down'
    },
  }
} as const;

export const PRODUCTS_PER_PAGE = 4;

export const REDIRECT_TO_ROUTE_ACTION_TYPE = '/redirectToRoute';
