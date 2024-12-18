import React from "react";

//css
import '../searchPage/searchPage.css'

//images
import card1 from "../../images/card1.webp";
import card2 from "../../images/card2.webp";
import card3 from "../../images/card3.webp";
import card5 from "../../images/card5.webp";
import card4 from '../../images/card4.webp'

//icons
import { SearchResults } from "./SearchResults";

//EXt imports
import { Button } from "@mui/material";

export const SearchPage = () => {
  return (
    <div className=" flex flex-col py-3 gap-y-10 px-5">
      <div className="flex flex-col justify-center gap-1">
        <p>
          <span>62 Stays</span> |
          <span>26 Auguat To 1 September</span> |
          <span>1 Guest</span>
        </p>
        <h2 className="text-2xl font-semibold">Stays Nerby</h2>
        <div className="btns flex items-center gap-2 pt-3">
            <Button className="text-black" variant="outlined">Cancellation Flexibility</Button>
            <Button variant="outlined">PLACE</Button>
            <Button variant="outlined">PRICE</Button>
            <Button variant="outlined">ROOMS & BEDS</Button>
            <Button variant="outlined">MORE FILTER</Button>
        </div>
      </div>
      <SearchResults img={card4}description="Step into the world of 'MICA', an upscale micro-house nestled atop the mountain. Immerse yourself in a captivating scenic experience, a mere 30-minute drive from Old Quebec." location=" Canada" price="$400 CAD" star="4.98" title="Tiny homes in Lac-Beauport" total="$1500" />
      <SearchResults img={card1}description="Step into the world of 'MICA', an upscale micro-house nestled atop the mountain. Immerse yourself in a captivating scenic experience, a mere 30-minute drive from Old Quebec." location=" Canada" price="$400 CAD" star="4.98" title="Tiny homes in Lac-Beauport" total="$1500" />
      <SearchResults img={card2}description="Step into the world of 'MICA', an upscale micro-house nestled atop the mountain. Immerse yourself in a captivating scenic experience, a mere 30-minute drive from Old Quebec." location=" Canada" price="$400 CAD" star="4.98" title="Tiny homes in Lac-Beauport" total="$1500" />
      <SearchResults img={card3}description="Step into the world of 'MICA', an upscale micro-house nestled atop the mountain. Immerse yourself in a captivating scenic experience, a mere 30-minute drive from Old Quebec." location=" Canada" price="$400 CAD" star="4.98" title="Tiny homes in Lac-Beauport" total="$1500" />
      <SearchResults img={card5}description="Step into the world of 'MICA', an upscale micro-house nestled atop the mountain. Immerse yourself in a captivating scenic experience, a mere 30-minute drive from Old Quebec." location=" Canada" price="$400 CAD" star="4.98" title="Tiny homes in Lac-Beauport" total="$1500" />
    </div>
  );
};
