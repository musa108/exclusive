import React from "react";
import Qr_code from "/src/assets/Qr Code.png";
import GooglePlay from "/src/assets/GooglePlay.png";
import AppStore from "/src/assets/AppStore.png";
import {
  CopyrightOutlined,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#000] text-white w-full bottom-0">
        <main className="flex justify-center  gap-8 p-8">
          <section>
            <h1 className="text-[24px] font-[inter] font-bold">Exclusive</h1>
            <h3 className="text-[20px] font-[poppins] font-[500]">Subscribe</h3>
            <p className="font-[poppins] text-sm">
              Get 10% off your first order
            </p>
            <div className="relative mt-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-40 pr-10 pl-4 border rounded-md outline-none focus:border-blue-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                <SendIcon style={{ fontSize: "small", color: "gray" }} />
              </div>
            </div>
          </section>
          <section className="font-[poppins] font-normal">
            <h3 className=" font-[500] text-[20px]">Support</h3>
            <p className="w-40">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </section>
          <section className="font-[poppins] font-normal">
            <ul>
              <li className="text-[20px] font-[500]">Account</li>
              <li>My Account</li>
              <li>Login/Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </section>
          <section className="font-[poppins] font-normal">
            <ul>
              <li className="text-[20px] font-[500]">Quick Link</li>
              <li>Privacy Policy</li>
              <li>Team Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </section>
          <section className="font-[poppins] font-normal">
            <ul>
              <li className="text-[20px] font-[500]">Download App</li>
              <li>Save $3 with App New User Only</li>
            </ul>
            <div className="flex justify-start items-center gap-2">
              <img src={Qr_code} alt="qr-code" />
              <div className="">
                <img src={GooglePlay} alt="googleplay" />
                <img src={AppStore} alt="appstore" />
              </div>
            </div>
            <li className=" list-none flex gap-8">
              <Facebook />
              <Twitter />
              <Instagram />
              <LinkedIn />
            </li>
          </section>
        </main>
        <p className="text-center text-[#FFFFFF]">
          <CopyrightOutlined style={{ fontSize:28, color: "gray" }} />
          Copyright Rimel 2022. All right reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
