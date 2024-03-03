import { store } from '../store/index.js';
import { Product, Products } from './product.js';

export type VideocardsData = {
  videocards: {
    data: Products;
    isLoading: boolean;
  };
  videocard: {
    data: Product | null;
    isLoading: boolean;
  };
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
