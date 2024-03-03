import { combineReducers } from '@reduxjs/toolkit';
import { videocardsData } from './videocards-data/videocards-data';
import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.VideocardsData]: videocardsData.reducer,
});
