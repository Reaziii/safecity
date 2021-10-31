import React from "react";
import AddPortfolioHead from "../AddPortfolioHead/AddPortfolioHead";
import AllCryptoCurrencies from "../AllCryptoCurrencies/AllCryptoCurrencies";
import "./PortfolioMiddle.scss";
const right = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.0247 12L9.23964 8.34772C8.92012 8.03941 8.92012 7.53954 9.23964 7.23123C9.55916 6.92292 10.0772 6.92292 10.3967 7.23123L14.7604 11.4418C15.0799 11.7501 15.0799 12.2499 14.7604 12.5582L10.3967 16.7688C10.0772 17.0771 9.55916 17.0771 9.23964 16.7688C8.92012 16.4605 8.92012 15.9606 9.23964 15.6523L13.0247 12Z"
      fill="white"
    />
  </svg>
);

const PortfolioMiddle = ({ setpage }) => {
  return (
    <div className="AddportfolioHead-mobile">
      <AddPortfolioHead setpage={setpage} />
      <div style={{ height: "147px" }}></div>
      <div className="diver-box">
        <div className="h1">Connect Wallet</div>
        {right}
      </div>
      <div onClick={() => setpage(4)} className="diver-box">
        <div className="h1">Connect Exchange</div>
        {right}
      </div>

      <AllCryptoCurrencies setpage={setpage} />
    </div>
  );
};

export default PortfolioMiddle;
