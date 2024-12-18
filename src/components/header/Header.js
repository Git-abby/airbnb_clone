import React, { useState } from "react";

//CSS
import "../header/header.css";

// ICONS
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// IMAGES
import airbnb from "../../images/airbnb.png";


//imports

import { Search } from "./Search";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // Date Picker Satet
  const [showCalander, setShowCalander] = useState(false);
  
  //navigate
  const navigate = useNavigate();
 
  function navTo(p){
    setShowCalander(false);
    navigate(p);
  }

  return (
    <div className="header flex items-center justify-between px-8">
      <div className="cursor-pointer logo-holder w-36" onClick={() => navTo('/')}>
        <img
          src={airbnb}
          alt="airbnb"
          className="logo w-full h-full object-cover"
        />
      </div>

      <div className="search-input border flex items-center relative h-14 rounded-2xl sm:hidden">
        <input
          type="text"
          placeholder="search..."
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-2xl block w-full h-full ps-10 p-2.5 pl-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 focus:outline-none"
        />
        <SearchIcon className="absolute right-2 cursor-pointer" />
      </div>

      <div className="datepicker relative flex items-center">
        <button
          onClick={() => setShowCalander(!showCalander)}
          className="bg-[#ff7779] w-60 px-3 py-2 border rounded-md border-[#ff7779] text-white transition-all hover:bg-white hover:text-[#ff7779]">
          {showCalander ? 'Close Calendar' : 'Search Dates'}  
        </button>
        {showCalander && (
         <Search setShowCalander={setShowCalander}/>
        )}
      </div>
      <div className="lang flex items-start gap-x-2 p-2">
        <h2 className="borderLtoR pb-[7px] cursor-pointer transition-all relative hover:before:absolute hover:before:w-0 hover:before:z-[1]">Become a host</h2>
        <LanguageIcon className="icons cursor-pointer hover:text-rose-500"/>
        <AccountCircleIcon className="icons cursor-pointer hover:text-rose-500"/>
      </div>
    </div>
  );
};
