// const getCart = () => {
//   const getCartString = localStorage.getItem("cart");
//   if (getCartString) {
//     const convertToParse = JSON.parse(getCartString);
//     return convertToParse;
//   }
//   return [];
// };
// const addCart = (id) => {
//   const cart = getCart();
//   cart.push(id);
//   const cartString = JSON.stringify(cart);
//   localStorage.setItem("cart", cartString);
// };

// const removeCart = (id) => {
//   const getCarts = getCart();
//   const filterCart = getCarts.filter((num) => num !== id);
//   const cartString = JSON.stringify(filterCart);
//   localStorage.setItem("cart", cartString);
// };
// export { getCart, addCart, removeCart as remove };
const getCart = () => {
  const getCartString = localStorage.getItem("cart");
  if (getCartString) {
    const parseGetCart = JSON.parse(getCartString);
    return parseGetCart;
  }
  return [];
};

const setItemString = (cart) => {
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};

const addCart = (id) => {
  const getAllCart = getCart();
  const newCart = [...getAllCart, id];

  setItemString(newCart);
};
const removeCart = (id) => {
  const carts = getCart();
  const filterCart = carts.filter((cart) => cart !== id);
  setItemString(filterCart);
};
export { addCart, getCart, removeCart as remove };
