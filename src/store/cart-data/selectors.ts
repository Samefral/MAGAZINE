import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { Products } from '../../types/product';

export const getCartProducts = (state: State): Products => state[NameSpace.CartData].products;
export const getTotalCartProducts = (state: State): number => state[NameSpace.CartData].totalCount;
export const getTotalCartPrice = (state: State): number => state[NameSpace.CartData].totalPrice;

export const getCartDiscount = (state: State): number => state[NameSpace.CartData].discount;
export const getCartDiscountCoupon = (state: State) => state[NameSpace.CartData].discountCoupon;
export const getCartCouponError = (state: State): boolean => state[NameSpace.CartData].discountCouponError;
export const getCartCouponSuccess = (state: State): boolean => state[NameSpace.CartData].discountCopounSuccess;

export const getCartOrderStatus = (state: State): string => state[NameSpace.CartData].orderStatus;
