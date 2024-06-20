import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { APIRoute } from '../const';
import { Product, Products } from '../types/product';
import { PostOrderData } from '../types/order';


export const fetchProductsAction = createAsyncThunk<Products, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProducts',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<Products>(`${APIRoute.Products}`);

    return data;
  },
);

export const fetchProductByIdAction = createAsyncThunk<Product, number, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchProductById',
  async (productId, {extra: api}) => {
    const { data } = await api.get<Product>(`${APIRoute.Products}/${productId}`);

    return data;
  },
);

export const updateProductByIdAction = createAsyncThunk<Product, Product, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/updateProductById',
  async (product, {extra: api}) => {
    const { data } = await api.put<Product>(`${APIRoute.Products}/${product.id}`, product);

    return data;
  },
);

export const postOrderAction = createAsyncThunk<string, PostOrderData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/postOrder',
  async ({productsIds, coupon}, {extra: api}) => {
    const {data} = await api.post<string>(APIRoute.OrderPost, {productsIds, coupon});
    return data;
  }
);
