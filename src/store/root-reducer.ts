import { combineReducers } from '@reduxjs/toolkit';
import { videocardsData } from './videocards-data/videocards-data';
import { cartData } from './cart-data/cart-data';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.VideocardsData]: videocardsData.reducer,
  [NameSpace.CartData]:  cartData.reducer,
});
