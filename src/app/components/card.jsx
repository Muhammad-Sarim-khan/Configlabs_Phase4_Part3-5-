"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; 

const ProductCard = ({ id, image, title, description, price }) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    dispatch(
      addToCart({
        id,
        name: title,
        price,
        image,
      })
    );
  };

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-[285px] h-[446px] cursor-pointer relative group">

      
      <div className="h-3/4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-50 transition-opacity duration-300">
        <button onClick={addItemToCart} className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold cursor-pointer">Add to cart
        </button>
        <div className="mt-4 flex space-x-4">
          <span className="text-white text-sm cursor-pointer">🔗 Share</span>
          <span className="text-white text-sm cursor-pointer">❤️ Like</span>
        </div>
      </div>

      <div className="p-4 h-1/4 flex flex-col justify-between">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-600 truncate">{description}</p>
        <span className="text-xl font-bold text-gray-900">Rs. {price}</span>
      </div>

    </div>
  );
};

export default ProductCard;
