import React, { useState } from "react";

//CSS
import "../header/header.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

//ICONS
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

//imports
import { DateRange } from "react-date-range";
import format from "date-fns/format";
import { addDays } from "date-fns";
import { useNavigate } from "react-router-dom";

export const Search = ({ setShowCalander }) => {
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  //Navigate
  const navigate = useNavigate();

  return (
    <div className="search bg-white">
      <DateRange
        onChange={(item) => setRange([item.selection])}
        editableDateInputs={true}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={1}
        direction="horizontal"
        className="rangePicker w-full"
      />
      <div className="flex justify-between w-full">
        <h2 className="text-lg font-semibold">Number of Guests</h2>
        <PeopleAltIcon />
      </div>
      <input type="text" className="border w-full focus:outline-none p-1 " />
      <button
        className="w-full bg-rose-300 text-white transition-colors hover:bg-white hover:text-rose-500 py-1"
        onClick={() => {
          navigate("/search");
          setShowCalander(false);
        }}>
        Search
      </button>
    </div>
    // To check git repo URL:
    // 1. git remote -v
    // 2. git config --get remote.origin.url
    // 3. Check .git/config file
  );
};
