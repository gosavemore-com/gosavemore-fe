function addDecimals(num) {
  return Math.round(num * 100) / 100;
}

export const calculateTaxPrice = (num) => {
  return addDecimals(0.15 * num);
};

export const calculateShipping = (num) => {
  return num > 50 ? 0 : 50;
};

export const calculateTotalPrice = (itemPrice, shippingPrice, taxPrice) => {
  let total = itemPrice + shippingPrice + taxPrice;
  return total;
};
