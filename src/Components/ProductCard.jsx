import React from "react";
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Products from "../pages/Products";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max mt-10 ">
      <img
        src={product.image}
        alt="image"
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)} 
      />
      <h1 className="line-clamp-2 p-1 font-semibold ">{product.title}</h1>
      <p className="my-1 text-lg text-gray-800 font-bold">${product.price}</p>
      <button className="bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-1 items-center justify-center font-semibold">
        <IoCartSharp className="w-6 h-6" />
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
