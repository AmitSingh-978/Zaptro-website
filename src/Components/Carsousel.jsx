import React, { useEffect } from "react";
import { getData } from "../context/DataContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{ zIndex: 3 }}>
        <FaCircleArrowLeft
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            left: "50px",
          }}
        />
      </div>
    );
  };

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`}>
        <FaCircleArrowRight
          className="arrows"
          style={{
            ...style,
            display: "block",
            borderRadius: "50px",
            background: "#f53347",
            color: "white",
            position: "absolute",
            padding: "2px",
            right: "50px",
          }}
        />
      </div>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseonHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider className="overflow-hidden" {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#afafe5]"
            >
              <div className="flex gap-10 justify-center h-[700px] items-center px-4">
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans">
                    Powering your world with the Best in Electronics
                  </h3>
                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px]">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500 to-purple-400 text-white px-3 py-2 rounded-xl cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>
                <div>
                  {item?.image ? (
                    <img
                      className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                      src={item.image}
                      alt={item.title}
                    />
                  ) : (
                    <div className="w-[550px] h-[550px] bg-gray-200 flex items-center justify-center text-gray-600 text-xl rounded-full">
                      Image not available
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>

      <Category />
    </>
  );
};

export default Carousel;
