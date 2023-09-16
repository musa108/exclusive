import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <Header />
      <section>
        <ul className="font-[poppins] flex flex-col justify-center items-center">
          <li className="text-[110px] font-[inter] font-[500]">404 Not Found</li>
          <li>Your visited page not found. You may go home page.</li>
          <button className="bg-[#DB4444] text-[#FAFAFA] rounded-md py-2 px-4 mt-4 mb-10"><Link to='/'>Back to home page</Link></button>
        </ul>
      </section>
      <Footer />
    </main>
  );
};

export default Error;
