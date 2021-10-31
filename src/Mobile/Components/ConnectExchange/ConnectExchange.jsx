import React from "react";
import "./ConnectExchange.scss";
import { coinlogos } from "../../Assets/CoinLogos";
const right = (
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
      d="M2 12C2 11.7761 2.08876 11.5521 2.26627 11.3813L8.6299 5.25628C8.98492 4.91457 9.56053 4.91457 9.91555 5.25628C10.2706 5.59799 10.2706 6.15201 9.91555 6.49372L5.10383 11.125H21.0909C21.593 11.125 22 11.5168 22 12C22 12.4832 21.593 12.875 21.0909 12.875H5.10383L9.91555 17.5063C10.2706 17.848 10.2706 18.402 9.91555 18.7437C9.56053 19.0854 8.98492 19.0854 8.6299 18.7437L2.26627 12.6187C2.17911 12.5348 2.11334 12.4381 2.06898 12.3349C2.02453 12.2318 2 12.1186 2 12Z"
      fill="white"
    />
  </svg>
);
const next = (
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

const ConnectExchange = ({ setpage }) => {
  const options = [
    {
      name: "Binance",
      icon: coinlogos.binance,
    },
    {
      name: "Binance",
      icon: coinlogos.binance,
    },
    {
      name: "Binance",
      icon: coinlogos.binance,
    },
    {
      name: "Binance",
      icon: coinlogos.binance,
    },
  ];
  return (
    <div className="ConnectExchange-mobile">
      <div className="header">
        <div onClick={() => setpage(2)} className="back">
          {right}
        </div>
        <h1>Connect Exchange</h1>
        <div style={{ opacity: 0 }} className="usd">
          USD
        </div>
      </div>

      {options.map((item, key) => (
        <div onClick={()=>setpage(5)} className="barbox">
          <div className="left">
            {item.icon}
            <h1>{item.name}</h1>
          </div>
          <div className="right">
            {next}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConnectExchange;
