import React, { useState } from "react";
import AddCoinManually from "../../Components/AddCoinManually/AddCoinManually";
import ConnectExchange from "../../Components/ConnectExchange/ConnectExchange";
import NewExchange from "../../Components/NewExchange/NewExchange";
import PortfolioLeft from "../../Components/PortfolioLeft/PortfolioLeft";
import PortfolioMiddle from "../../Components/PortfolioMiddle/PortfolioMiddle";
import "./Portfolio.scss";
const Portfolio = () => {
  const [page, setpage] = useState(1);
  console.log(page);
  return (
    <div className="portfolio-mobile-route mobile-container">
      <div
        className={`div-box ${
          page === 1
            ? "one"
            : page === 2
            ? "two"
            : page === 3
            ? "three"
            : page === 4
            ? "four"
            : page === 5
            ? "five"
            : "six"
        }`}
      >
        <div className="first">
          <PortfolioLeft setpage={setpage} />
        </div>
        <div className="second">
          <PortfolioMiddle setpage={setpage} />
        </div>
        <div className="third">
          <AddCoinManually setpage={setpage} />
        </div>
        <div className="fourth">
          <ConnectExchange setpage={setpage} />
        </div>
        <div className="five">
          <NewExchange setpage={setpage} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
