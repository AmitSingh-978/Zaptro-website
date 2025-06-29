import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/img/flat-hourglass.gif";
import Breadcrums from "../Components/Breadcrums";
import Footer from "../Components/Footer";
import { IoCartOutline } from "react-icons/io5";

const SingleProduct = () => {
  const params = useParams();
  const [SingleProduct, setSingleProduct] = useState("");
  console.log(params);

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, []);
  const OrginalPrice = Math.round(
    SingleProduct.price + (SingleProduct.price * SingleProduct.discount) / 100
  );

  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-4 md:px--0">
          <Breadcrums title={SingleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-2 gap-10">
            {/* product img  */}

            <div className="w-full">
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>
            {/* product details  */}

            <div className="flex flex-col gap-6">
              <h1 className="md:text-3xl font-bold text-gray-800">
                {SingleProduct.title}
              </h1>
              <div className="text-gray-700">
                {SingleProduct.brand?.toUpperCase()}/
                {SingleProduct.Category?.toUpperCase()}/ {SingleProduct.model}
              </div>
              <p className="text-xl text-red-500 font-bold ">
                {""}${SingleProduct.price}
                {""}
                <span className="line-through tert-gray-700 p-3 text-black">
                  ${OrginalPrice}
                </span>{" "}
                <span className="bg-red-500 text-white p-2 rounded-md">
                  {SingleProduct.discount}% Discount
                </span>
              </p>
              <p>{SingleProduct.description}</p>

              {/* qunatity selector */}

              <div className="flex items-center gap-4">
                <label htmlFor="" className="text-sm font-medium text-gray-700">
                  {" "}
                  Quantity:
                </label>
                <input
                  type="number "
                  min={1}
                  value={1}
                  className="w-20 border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>
              <div className="flex gap-4 mt-4">
                <button className="px-6 flex gap-2 text-lg bg-red-500 text-white rounded-md items-center">
                  {" "}
                  <IoCartOutline />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen ">
          <img
            className="w-20 h-20 object-contain filter sepia brightness-200 hue-rotate-[330deg]"
            src={Loading}
            alt="Loading..."
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default SingleProduct;
