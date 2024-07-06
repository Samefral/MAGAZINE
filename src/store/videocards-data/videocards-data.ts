import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchProductsAction, fetchProductByIdAction } from '../api-actions';
import { VideocardsData } from '../../types/state';


export const initialState: VideocardsData = {
  videocards: {
    data: [],
    isLoading: false,
    currentSortType: null,
    currentSortOrder: null,
  },
  videocard: {
    data: null,
    isLoading: false
  }
};

export const videocardsData = createSlice({
  name: NameSpace.VideocardsData,
  initialState,
  reducers: {
    setCurrentSortType: (state, action: PayloadAction<string>) => {
      state.videocards.currentSortType = action.payload;
    },
    setCurrentSortOrder: (state, action: PayloadAction<string>) => {
      state.videocards.currentSortOrder = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.videocards.isLoading = true;
        state.videocards.data = [];
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.videocards.data = action.payload;
        state.videocards.isLoading = false;
      })

      .addCase(fetchProductByIdAction.pending, (state) => {
        state.videocard.isLoading = true;
        state.videocard.data = null;
      })
      .addCase(fetchProductByIdAction.fulfilled, (state, action) => {
        state.videocard.data = action.payload;
        state.videocard.isLoading = false;
      });
  }
});

export const { setCurrentSortType, setCurrentSortOrder } = videocardsData.actions;
