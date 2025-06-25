import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCaretDown, FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { CgCloseR } from "react-icons/cg";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = ({ location, getLocation, openDropdown, setopenDropdown }) => {
  const toggleDropdown = () => {
    setopenDropdown(!openDropdown);
  };

  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="ml-10 mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex items-center gap-7">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-600">Z</span>aptro
            </h1>
          </Link>

          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <FaLocationDot className="text-red-500 text-[30px]" />
            <span className="font-semibold">
              {location ? (
                <div className="-space-y-2">
                  <p>{location.country}</p>
                  <p>{location.state}</p>
                  
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={toggleDropdown} />
          </div>

          {openDropdown && (
            <div className="w-[250px] h-max shadow-2xl z-50 bg-white fixed top-15 left-40 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-semibold mb-4 text-xl flex justify-between">
                Change location
                <span onClick={toggleDropdown}>
                  <CgCloseR />
                </span>
              </h1>
              <button
                onClick={getLocation}
                className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400"
              >
                Detect my location
              </button>
            </div>
          )}
        </div>

        {/* menu section */}
        <nav className="flex gap-6 items-center mr-10">
          <ul className="flex gap-5 items-center text-xl font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500"
                  : "text-black"
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500"
                  : "text-black"
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500"
                  : "text-black"
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500"
                  : "text-black"
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>

          <Link to="/cart" className="relative">
            <FaCartShopping className="h-7 w-7" />
            <span className="bg-red-500 rounded-full px-2 absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white font-semibold rounded-xl p-2" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
