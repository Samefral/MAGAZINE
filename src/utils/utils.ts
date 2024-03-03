const PriceFormatOptions = {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0
} as const;

export const formatPrice = (price: number) => price.toLocaleString('ru-RU', PriceFormatOptions);

export const getDiscountPercent = (productPrice: number, productDiscount: number) => (
  Math.round(100 - (productPrice - productDiscount) / productPrice * 100)
);
