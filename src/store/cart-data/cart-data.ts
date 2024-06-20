import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Products, Product } from '../../types/product';
import { NameSpace, OrderStatus } from '../../const';
import { postOrderAction } from '../api-actions';

export type CartData = {
  products: Products;
  totalPrice: number;
  totalCount: number;
  discount: number;
  discountCoupon: string | null;
  discountCouponError: boolean;
  discountCopounSuccess: boolean;
  orderStatus: string;
};

export const initialState: CartData = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
  discount: 0,
  discountCoupon: null,
  discountCouponError: false,
  discountCopounSuccess: false,
  orderStatus: OrderStatus.Null,
};

const updateOnRemoveOrDecrease = (state: CartData, count: number, price: number) => {
  state.totalCount -= count;
  state.totalPrice -= price * count;
};

const clearCart = (state: CartData) => {
  state.products = [];
  state.totalCount = 0;
  state.totalPrice = 0;
  state.discount = 0;
  state.discountCoupon = null;
  state.discountCouponError = false;
  state.discountCopounSuccess = false;
};

export const cartData = createSlice({
  name: NameSpace.CartData,
  initialState,
  reducers: {

    addProductToCart: (state, action: PayloadAction<Product>) => {
      const addedProduct = state.products.find((product) => product.id === action.payload.id);

      if (addedProduct) {
        addedProduct.quantityInCart++;
      } else {
        state.products.push({ ...action.payload, quantityInCart: 1 });
      }

      state.totalCount += 1;
      state.totalPrice += action.payload.price - action.payload.discount;
    },

    decreaseProductCount: (state, action: PayloadAction<Product>) => {
      const productToDecrease = state.products.find((product) => product.id === action.payload.id);

      if (productToDecrease) {
        productToDecrease.quantityInCart -= 1;
        updateOnRemoveOrDecrease(state, 1, action.payload.price - action.payload.discount);
      }
    },

    setProductCount: (state, action: PayloadAction<{id: number; count: number}>) => {
      const productToUpdate = state.products.find((product) => product.id === action.payload.id);

      if (productToUpdate) {
        updateOnRemoveOrDecrease(state, productToUpdate.quantityInCart, productToUpdate.price);
        productToUpdate.quantityInCart = action.payload.count;
        state.totalCount += action.payload.count;
        state.totalPrice += productToUpdate.price * action.payload.count;
      }
    },

    removeProductFromCart: (state, action: PayloadAction<Product>) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
      updateOnRemoveOrDecrease(state, action.payload.quantityInCart, action.payload.price - action.payload.discount);
    },

    setCoupon: (state, action: PayloadAction<string | null>) => {
      state.discountCoupon = action.payload;
    },
    setCouponError: (state, action: PayloadAction<boolean>) => {
      state.discountCouponError = action.payload;
    },
    setCouponSuccess: (state, action: PayloadAction<boolean>) => {
      state.discountCopounSuccess = action.payload;
    },

    setOrderStatus: (state, action: PayloadAction<string>) => {
      state.orderStatus = action.payload;
    },

    clearOrderCart: (state) => clearCart(state),
  },
  extraReducers(builder) {
    builder
      .addCase(postOrderAction.pending, (state) => {
        state.orderStatus = OrderStatus.Pending;
      })
      .addCase(postOrderAction.fulfilled, (state) => {
        state.orderStatus = OrderStatus.Fulfilled;
        clearCart(state);
      })
      .addCase(postOrderAction.rejected, (state) => {
        state.orderStatus = OrderStatus.Rejected;
      });

  }
});

export const {
  addProductToCart,
  decreaseProductCount,
  setProductCount,
  removeProductFromCart,
  setCoupon,
  setCouponError,
  setCouponSuccess,
  setOrderStatus,
  clearOrderCart,
} = cartData.actions;
