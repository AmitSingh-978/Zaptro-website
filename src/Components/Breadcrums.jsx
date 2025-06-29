import React from "react";
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const Navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto my-10">
      <h1 className="text-xl text-gray-700 font-semibold">
        <span  className="cursor-pointer" onClick={() => Navigate("/")}>
          Home
        </span>
        / <span className="cursor-pointer" onClick={() => Navigate("/Products")}>Products</span> / <span>{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
