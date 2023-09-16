import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sideImage from "/src/assets/Side Image.png";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import GoogleSignUp from "../auth/googleSignUp";

const SignUp = () => {
       const [name,setName] = useState('')
       const [email,setEmail] = useState('');
       const [password,setPassword] = useState('');
       const navigate = useNavigate();

       const SignUp = async (e) =>{
           e.preventDefault();
           try {
            await createUserWithEmailAndPassword(auth,email,password);
            navigate('/login')
           } catch (error) {
            console.error(error);
           }
       }
  return (
    <div>
      <Header />
      <section className="flex  py-10 gap-16">
        <img className="w-[580px] h-[646px]" src={sideImage} alt="side-image" />
        <div className="flex flex-col justify-center items-center font-[poppins]">
          <h1 className="font-[inter] text-[36px] font-[500]">
            Create an account
          </h1>
          <p>Enter your details below</p>
          <form onSubmit={SignUp} className="flex flex-col justify-center items-center">
            <input
              className="w-[370px]  border-b-2 py-1 my-4  text-opacity-5 "
              type="text"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-[370px]  border-b-2 py-1 my-4  text-opacity-5 "
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <input
              className="w-[370px]  border-b-2 py-1 my-4  text-opacity-5 "
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <button type="submit" className="w-[370px] bg-[#DB4444] text-[#FAFAFA] rounded-md py-2 px-4 mt-4 mb-10">
              Create Account
            </button>
          </form>
          <GoogleSignUp/>
          <p className="text-gray-500">
            Already have an account?
            <span className="text-[#000]">
              <Link to='/login'> Log In</Link>
            </span>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
