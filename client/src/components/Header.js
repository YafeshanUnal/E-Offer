import React from "react";
import { Link } from "react-router-dom";
import { images } from "../assets/images/images";
export const Header = () => {
  return (
    <div className="w-full flex justify-between px-20 h-20 mt-4 items-center absolute ">
      <a href="#home">
        <img src={images.whiteLogo} alt="logo" className="h-20 w-17 cursor-pointer" />
      </a>
      <ul className="flex gap-6 text-3 font-medium text-emerald-200">
        <li className="mr-6">
          <Link to="#home">Home</Link>
        </li>
        <li className="mr-6">
          {/* aynı sayfada olacak bunlar */}
          <Link to="#products">Products</Link>
        </li>
        <li className="mr-6">
          <Link to="#contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
