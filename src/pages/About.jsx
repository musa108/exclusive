import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Side_image_2 from '/src/assets/sideImage2.png'
import Review from "../components/review";
import Profile from "../components/profile";
import Services from "../components/services";

const About = () => {
  return (
    <main>
      <Header />
      <section>
        <section className="flex justify-center items-center font-[poppins] py-20">
          <div className="flex flex-col justify-center mx-20 ">
            <h1 className="text-[54px] font-[inter] font-[600]">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <img className="w-[565px] h-[485px]" src={Side_image_2} alt="side-image-2" />
        </section>
        <Review/>
        <Profile/>
        <Services/>
      </section>
      <Footer />
    </main>
  );
};

export default About;
