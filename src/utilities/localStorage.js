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

const removeCart = (id) => {
  const getCarts = getCart();
  const filterCart = getCarts.filter((num) => num !== id);
  const cartString = JSON.stringify(filterCart);
  localStorage.setItem("cart", cartString);
};
export { getCart, addCart, removeCart as remove };
