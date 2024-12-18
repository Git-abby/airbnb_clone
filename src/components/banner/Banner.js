import React from "react";
import banner from "../../images/Banner.webp";
import { useNavigate } from "react-router-dom";
export const Banner = () => {

  //navigate
  const navigate = useNavigate();

  function navigateTo(path){
    
    navigate(path)
  }

  return (
    <div className="banner bg-banner object-cover bg-center w-full h-[350px]">
      <div className="w-full h-full bg-[rgba(0,0,0,0.3)]">
        <div className=" w-1/3 h-[70%] bg-black px-5 flex flex-col justify-center items-start gap-y-2 opacity-100 text-white sm:w-[300px]">
          <h1 className="text-4xl font-bold sm:text-3xl">
            Get out & Stretch your imagination
          </h1>
          <p className="text-md font-semibold">
            Plan a different kind of gateway to uncover the hidden gems near you
          </p>
          <button type="button" className="bg-[#ff7779] px-3 py-2 transition-all hover:bg-white hover:text-[#ff7779] rounded-sm" onClick={() => navigate('/search')}>EXPLORE NEARBY</button>
        </div>
      </div>
    </div>
  );
};
