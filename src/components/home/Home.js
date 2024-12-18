import React from "react";
import "../home/home.css";
import { Banner } from "../banner/Banner";
import { Card } from "../card/Card";

import card1 from "../../images/card1.webp";
import card2 from "../../images/card2.webp";
import card3 from "../../images/card3.webp";
import card5 from "../../images/card5.webp";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="flex flex-wrap justify-center pt-2 gap-10">
        <Card
          src={card1}
          title="Entire home in Rhinebeck, New York, United States"
          description="Unique experience, secluded.
Enjoy a weekend geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer."
        />
        <Card
          src={card2}
          title="Entire home in Rhinebeck, New York, United States"
          description="
Enjoy a weekend retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer."
        />
        <Card
          src={card5}
          title="Entire home in Rhinebeck, New York, United States"
          description="Unique experience, secluded.
Enjoy a weekend or a few days eco-friendly architectural geometric masterpiece retreat"
        />
      </div>
      <div className="flex flex-wrap justify-center pt-2 gap-10">
        <Card
          src={card1}
          title="Entire home in Rhinebeck, New York, United States"
          description="Unique experience, secluded.
Enjoy a weekend geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer."
        />
        <Card
          src={card2}
          title="Entire home in Rhinebeck, New York, United States"
          description="
Enjoy a weekend retreat in an architectural, geometric masterpiece on 30 preserved acres just minutes from all that Rhinebeck and the Hudson Valley have to offer."
        />
        <Card
          src={card5}
          title="Entire home in Rhinebeck, New York, United States"
          description="Unique experience, secluded.
Enjoy a weekend or a few days eco-friendly architectural geometric masterpiece retreat"
        />
      </div>
    </div>
  );
};
