import { Product, Products } from './product.js';
import store from '../store/index.js';

export type VideocardsData = {
  videocards: {
    data: Products;
    isLoading: boolean;
    currentSortType: string | null;
    currentSortOrder: string | null;
  };
  videocard: {
    data: Product | null;
    isLoading: boolean;
  };
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
