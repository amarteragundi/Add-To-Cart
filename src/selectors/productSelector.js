export const fetchProductsSelector = state =>
  state.productList.map(product => product);
