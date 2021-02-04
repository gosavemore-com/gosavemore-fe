function addDecimals(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

export const calculateTaxPrice = (num) => {
  return addDecimals(0.15 * num).toFixed(2);
};

export const calculateShipping = (num) => {
  return addDecimals(num > 50 ? 0 : 50);
};

export const calculateTotalPrice = (itemPrice, shippingPrice, taxPrice) => {
  return (itemPrice + shippingPrice + taxPrice).toFixed(2);
};
