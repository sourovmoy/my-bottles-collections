import React, { use, useState } from "react";
import Bottle from "./Bottle/Bottle";
import { addCart } from "../../utilities/localStorage";

const Bottles = ({ bottlesPromise }) => {
  const bottles = use(bottlesPromise);
  const [cart, setCart] = useState([]);

  const addCartHandler = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addCart(bottle.id);
  };

  return (
    <div>
      <h4 className="my-10">Cart : {cart.length} </h4>
      <ol className="h-auto p-4 my-3 rounded-2xl flex gap-2">
        {cart.map((pic) => (
          <li key={pic.id} className="bg-amber-400 w-[10vw] rounded-2xl p-2">
            <img className="w-full rounded-lg" src={pic.img}></img>
            <p className="text-xs">{pic.name}</p>
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
