import React from "react";
import MarketHead from "../../Components/MarketHead/MarketHead";
import MarketRanks from "../../Components/MarketRanks/MarketRanks";

const Market = () => {
  return (
    <div className="market-route-mobile mobile-container">
      <MarketHead />
      <div style={{ height: "140px" }}></div>
      <MarketRanks/>
    </div>
  );
};

export default Market;
