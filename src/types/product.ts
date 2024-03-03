export type Product = {
  id: number;
  img_url: string;
  is_last: boolean;
  is_new: boolean;
  name: string;
  price: number;
  type: string;
  discount: number;
  quantityInCart: number;
};

export type Products = Product[];
