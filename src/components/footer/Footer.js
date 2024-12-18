import React from "react";

//ICONS
import LanguageIcon from "@mui/icons-material/Language";

export const Footer = () => {
  return (
    <div className="mt-5 py-5 flex flex-col justify-center border-t-2">
      <div className=" flex justify-center gap-5">
        <div className=" flex flex-col gap-3">
          <h3 className="text-lg font-semibold">Support</h3>
          <div className="links flex flex-col gap-1">
            <a href="#">Help Center</a>
            <a href="#">Disability support</a>
            <a href="#">Cancellation options</a>
          </div>
        </div>
        <div className="flex flex-col  gap-3">
          <h3 className="text-lg font-semibold">Hosting</h3>
          <div className="links flex flex-col">
            <a href="#">Hosting resources</a>
            <a href="#">Hosting responsibly</a>
            <a href="#">Community forum</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col pt-3 justify-center">
        <hr className="border border-2"/>
        <div className="flex justify-between p-3">
            <h3>&copy; 2024 Airbnb, Inc.· Privacy · Terms · Sitemap</h3>
            <span><LanguageIcon />  <span className="font-semibold transition cursor-pointer border-b-0  border-black hover:border-b-2">$ CAD</span></span>
        </div>
      </div>
    </div>
  );
};
