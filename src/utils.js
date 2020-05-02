import { LOW_TO_HIGH, HIGH_TO_LOW, SORT_BY_DISCOUNT } from "./consts";
export const filterProductsBySearch = (products, searchTerm) =>
  products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const calculateTotal = cartItems =>
  cartItems
    .map(item => item.quantity * item.price.actual)
    .reduce((total, num) => total + num, 0);

export const calculateTotalDiscount = cartItems =>
  cartItems
    .map(item => item.quantity * (item.price.display - item.price.actual))
    .reduce((total, num) => total + num, 0);

export const calculateTotalDisplay = cartItems =>
  cartItems
    .map(item => item.quantity * item.price.display)
    .reduce((total, num) => total + num, 0);

export const calculateTotalItem = cartItems =>
  cartItems.map(item => item.quantity).reduce((total, num) => total + num, 0);

export const sortProducts = (products, sortType) => {
  debugger;
  switch (sortType) {
    case LOW_TO_HIGH: {
      const lowToHighSorted = products.sort((a, b) =>
        a.price.actual < b.price.actual ? -1 : 1
      );
      return [...lowToHighSorted];
    }
    case HIGH_TO_LOW: {
      const highToLowSorted = products.sort((a, b) =>
        a.price.actual > b.price.actual ? -1 : 1
      );
      return [...highToLowSorted];
    }
    case SORT_BY_DISCOUNT: {
      const byDiscount = products.sort((a, b) =>
        a.discount > b.discount ? -1 : 1
      );
      return [...byDiscount];
    }
    default:
      return products;
  }
};
