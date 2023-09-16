import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Person2Outlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <p className="bg-[#000000] p-4"></p>
      <nav className="flex justify-center items-center gap-[200px] mt-4">
        <h1 className="text-[24px] text-[#000000] font-[inter] font-[700]">
          Exclusive
        </h1>
        <ul className="flex justify-center items-center gap-[46px] font-[poppins] font-[400] cursor-pointer">
          <li className=" active:border-b-2"><Link to="/"> Home</Link></li>
          <li className=" active:border-b-2"><Link to='/contact'>Contact</Link></li>
          <li className=" active:border-b-2"><Link to='/about'>About</Link></li>
          <li className=" active:border-b-2"><Link to='/SignUp'>Sign Up</Link></li>
        </ul>
        <ul className="flex justify-center items-center gap-[16px]">
        <div className="relative">
      <input
        type="text"
        placeholder="What are you looking for?"
        className="w-48 py-1 pr-10 pl-4 bg-[#F5F5F5] border rounded-md outline-none focus:border-white text-xs"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-[#000000]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-5-5"></path>
          <circle cx="10.5" cy="10.5" r="7.5"></circle>
        </svg>
      </div>
    </div>
          <FavoriteBorderIcon fontSize="small" />
          <ShoppingCartOutlinedIcon fontSize="small" />
          <Person2Outlined/>
        </ul>
      </nav>
      <hr className="mt-2"/>
    </header>
  );
};

export default Header;
