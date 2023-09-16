import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import apple_logo from '/src/assets/apple-logo.png';
import hero_frame from '/src/assets/hero_frame.png'

const Hero = () => {
  return (
    <main className="flex justify-center items-start mt-5">
      <section className="flex flex-col items-center p-2 mr-4">
        <ul className="font-[poppins] font-[400]">
          <li className="flex justify-between items-center gap-4 cursor-pointer">
            Woman’s Fashion <NavigateNextIcon />
          </li>
          <li className="flex justify-between items-center gap-4 mt-3 cursor-pointer">
            Men’s Fashion <NavigateNextIcon />
          </li>
          <li className="mt-3">Electronics</li>
          <li className="mt-3">Home & Lifestyle</li>
          <li className="mt-3">Medicine</li>
          <li className="mt-3">Sports & Outdoor</li>
          <li className="mt-3">Baby’s & Toys</li>
          <li className="mt-3">Groceries & Pets</li>
          <li className="mt-3">Health & Beauty</li>
        </ul>
      </section>
      <hr className="bg-black text-sm" />
      <section className="flex justify-center items-center bg-[#000] text-[#FAFAFA] gap-5">
        <div className="flex flex-col items-center ">
          <div className="flex justify-center items-center gap-6">
            <img src={apple_logo} alt="apple logo" />
            <p className="font-[poppins]">iPhone 14 Series</p>
          </div>
          <h1 className="font-[inter] font-[600] text-[49px] w-[294px] ml-[8rem]">Up to 10% off Voucher</h1>
          <ul className="flex items-center gap-2">
            <li className=" border-b-[1px]">Shop now</li>
            <ArrowForwardIcon fontSize="small"/>
          </ul>
        </div>
        <div>
          <img className="w-[400px] h-[300px]" src={hero_frame} alt="hero-frame" />
        </div>
      </section>
    </main>
  );
};



export default Hero;
