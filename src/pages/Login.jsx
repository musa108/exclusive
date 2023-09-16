import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import sideImage from "/src/assets/Side Image.png";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const Login = async (e) =>{
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth,email,password)
            navigate('/')
        } catch (error) {
           console.error(error); 
        }
    }
    return (
        <main>
          <Header/>
          <section className="flex  py-10 gap-16">
        <img className="w-[580px] h-[646px]" src={sideImage} alt="side-image" />
        <div className="flex flex-col justify-center items-center font-[poppins]">
          <h1 className="font-[inter] text-[36px] font-[500]">
          Log in to Exclusive
          </h1>
          <p>Enter your details below</p>
          <form onSubmit={Login} className="flex flex-col justify-center items-center">
            <input
              className="w-[370px]  border-b-2 py-1 my-4  text-opacity-5 "
              type="text"
              placeholder="Email"
              required
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
            />
            <input
              className="w-[370px]  border-b-2 py-1 my-4  text-opacity-5 "
              type="text"
              placeholder="Password"
              required
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            <button type="submit" className="w-[370px] bg-[#DB4444] text-[#FAFAFA] rounded-md py-2 px-4 mt-4 mb-10">
              Login
            </button>
          </form>
        </div>
      </section>
          <Footer/>  
        </main>
    );
}

export default Login;
