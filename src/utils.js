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
