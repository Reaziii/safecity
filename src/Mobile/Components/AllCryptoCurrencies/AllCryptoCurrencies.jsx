import React from "react";
import "./AllCryptoCurrencies.scss";
import { coinlogos } from "../../Assets/CoinLogos";
const plus = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.00001 1.33334C7.66529 1.33334 7.39395 1.60468 7.39395 1.9394V7.39395H1.93937C1.60466 7.39395 1.33331 7.66529 1.33331 8.00001C1.33331 8.33473 1.60466 8.60607 1.93937 8.60607H7.39395V14.0606C7.39395 14.3953 7.66529 14.6667 8.00001 14.6667C8.33473 14.6667 8.60607 14.3953 8.60607 14.0606V8.60607H14.0606C14.3953 8.60607 14.6666 8.33473 14.6666 8.00001C14.6666 7.66529 14.3953 7.39395 14.0606 7.39395H8.60607V1.9394C8.60607 1.60468 8.33473 1.33334 8.00001 1.33334Z"
      fill="white"
    />
  </svg>
);

const AllCryptoCurrencies = ({setpage}) => {
  const cryptos = [
    {
      name: "Bitcoin",
      sname: "BTC",
      icon: coinlogos.btc,
    },
    {
      name: "SAFECOIN",
      sname: "SAFECOIN",
      icon: coinlogos.safecoin,
    },
    {
      name: "Bitcoin",
      sname: "BTC",
      icon: coinlogos.btc,
    },
    {
      name: "SAFECOIN",
      sname: "SAFECOIN",
      icon: coinlogos.safecoin,
    },
    {
      name: "Bitcoin",
      sname: "BTC",
      icon: coinlogos.btc,
    },
    {
      name: "SAFECOIN",
      sname: "SAFECOIN",
      icon: coinlogos.safecoin,
    },
    {
      name: "Bitcoin",
      sname: "BTC",
      icon: coinlogos.btc,
    },
    {
      name: "SAFECOIN",
      sname: "SAFECOIN",
      icon: coinlogos.safecoin,
    },
  ];
  return (
    <div className="AllCrypto-mobile">
      <h1>All Cryptocurrencies</h1>
      {cryptos.map((item, key) => (
        <div className="hello-world">
          <div className="left">
            {item.icon}
            <div className="sss">
              <h2>{item.name}</h2>
              <h3>{item.sname}</h3>
            </div>
          </div>
          <button onClick={()=>setpage(3)} className="right">{plus}</button>
        </div>
      ))}
    </div>
  );
};

export default AllCryptoCurrencies;
