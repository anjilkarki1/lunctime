import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="m-4 flex flex-col items-center bg-white p-2 border-2 border-gray-100 rounded-xl cursor-pointer md:hover:scale-105">
      <div className="w-70 md:w-60 h70 md:h-60 flex items-center">
        <img src={item.image} alt="product" />
      </div>
      <p className="text-xl text-center">{item.name}</p>
      <div>
        {/* <span className="line-through p-2 text-orange-500 text-center">
            Rs.{item.price}
          </span> */}
        <p className="text-orange-500 text-center">Rs.{item.price}</p>
      </div>
      <button className="m-2 py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded">
        Order now
      </button>

      {/* <span className="absolute top-0 right-0 bg-red-400">20% off</span> */}
    </div>
  );
};

export default ItemCard;
