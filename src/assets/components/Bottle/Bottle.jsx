import React from "react";

const Bottle = ({ bottle, addCartHandler }) => {
  return (
    <div className="border-white shadow-2xl rounded-2xl p-5 bg-gray-700 hover:bg-gray-600 hover:scale-[1.01]">
      <img src={bottle.img} alt="" />
      <h3 className="text-xl text-black font-semibold py-5">
        Bottle Name : {bottle.name}
      </h3>
      <div className="flex justify-between">
        <p className=" text-black font-semibold">Prices : {bottle.price}</p>
        <p className=" text-black font-semibold">Seller :{bottle.seller}</p>
      </div>
      <button
        onClick={() => addCartHandler(bottle)}
        className="bg-amber-200 p-2 text-amber-950 font-bold w-full mt-5 rounded-3xl hover:scale-[1.07]"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Bottle;
