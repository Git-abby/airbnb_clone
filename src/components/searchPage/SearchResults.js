import { FavoriteBorder, Star } from "@mui/icons-material";
import React from "react";

export const SearchResults = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) => {
  return (
    <div className="border relative w-full flex bg-white">
        <FavoriteBorder  className="absolute right-1 top-1 cursor-pointer hover:text-rose-400 transition-colors"/>
      <div className="img_holder  w-full max-h-[300px] rounded-md">
        <img src={img} alt={title} className="w-full h-full object-cover rounded-md" />
      </div>
      <div className="py-2 px-4 flex flex-col">
        <p className="text-lg font-semibold">{title}</p>
        <p>{location}</p>
        <p>___</p>
        <p className="text-sm">{description}</p>
        <div className="flex w-full justify-between pt-2">
          <div className=" flex justify-center items-center">
            <Star className=" text-rose-400" />
            <strong>{star}</strong>
          </div>
          <div className=" flex flex-col items-end">
            <h3 className="text-xl font-semibold">{price}/Night</h3>
            <span>{total} Total</span>
          </div>
        </div>
      </div>
    </div>
  );
};
