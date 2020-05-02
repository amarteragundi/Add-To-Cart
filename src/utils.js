export const filterProductsBySearch = (products, searchTerm) =>
  products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

export const calculateTotal = cartItems =>
  cartItems
    .map(item => item.quantity * item.price.actual)
    .reduce((total, num) => total + num, 0);
