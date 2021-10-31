import React from "react";
import "./PortfolioHeader.scss";
const plus = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 2C11.4979 2 11.0909 2.40701 11.0909 2.90909V11.0909H2.90909C2.40701 11.0909 2 11.4979 2 12C2 12.5021 2.40701 12.9091 2.90909 12.9091H11.0909V21.0909C11.0909 21.593 11.4979 22 12 22C12.5021 22 12.9091 21.593 12.9091 21.0909V12.9091H21.0909C21.593 12.9091 22 12.5021 22 12C22 11.4979 21.593 11.0909 21.0909 11.0909H12.9091V2.90909C12.9091 2.40701 12.5021 2 12 2Z"
      fill="white"
    />
  </svg>
);

const PortfolioHeader = ({setpage}) => {
  return (
    <div className="PortfolioHeader-mobile">
      <div onClick={()=>setpage(2)} className="header">
        {plus}
        <h1>Portfolio</h1>
        <div className="usd">USD</div>
      </div>
      
    </div>
  );
};

export default PortfolioHeader;
