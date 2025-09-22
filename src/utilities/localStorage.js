const getCart = () => {
  const getCartString = localStorage.getItem("cart");
  if (getCartString) {
    const convertToParse = JSON.parse(getCartString);
    return convertToParse;
  }
  return [];
};
const addCart = (id) => {
  const cart = getCart();
  cart.push(id);
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
export { getCart, addCart };
