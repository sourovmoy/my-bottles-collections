import React, { use, useEffect, useState } from "react";
import Bottle from "./Bottle/Bottle";
import { addCart, getCart, remove } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);
  // useEffect(() => {
  //   const getStoredCartId = getCart();
  //   const storeCard = [];
  //   for (const id of getStoredCartId) {
  //     const cartBottle = bottles.find((bottles) => bottles.id === id);
  //     if (cartBottle) {
  //       storeCard.push(cartBottle);
  //     }
  //   }
  //   setCart(storeCard);
  // }, [bottles]);

  useEffect(() => {
    const getAllCart = getCart();
    const storeCard = [];
    for (const id of getAllCart) {
      const bottleCart = bottles.find((bottles) => bottles.id === id);
      if (bottleCart) {
        storeCard.push(bottleCart);
      }
    }
    setCart(storeCard);
  }, [bottles]);
  const addCartHandler = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addCart(bottle.id);
  };
  // const removeCart = (id) => {
  //   const removeId = cart.filter((cartId) => cartId.id !== id);
  //   setCart(removeId);
  //   remove(id);
  // };

  const removeCart = (id) => {
    const removeId = cart.filter((carts) => carts.id !== id);
    setCart(removeId);
    remove(id);
  };

  return (
    <div>
      <h4 className="my-10">Cart : {cart.length} </h4>
      <ol className="h-auto p-4 my-3 rounded-2xl flex gap-2">
        {cart.map((pic) => (
          <li key={pic.id} className="bg-amber-400 w-[10vw] rounded-2xl p-2">
            <img className="w-full rounded-lg" src={pic.img}></img>
            <p className="text-xs">{pic.name}</p>
            <button onClick={() => removeCart(pic.id)}>❌</button>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-3 gap-8">
        {bottles.map((bottle) => (
          <Bottle
            addCartHandler={addCartHandler}
            key={bottle.id}
            bottle={bottle}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
