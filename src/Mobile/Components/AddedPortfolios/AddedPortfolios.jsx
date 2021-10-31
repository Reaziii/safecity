import React from "react";
import "./AddedPortfolios.scss";
import { coinlogos } from "../../Assets/CoinLogos";
const AddedPortfolios = () => {
  const details = [
    {
      icon: coinlogos.btc,
      name: "Bitcoin",
      quality: "1,3.77 BTC",
      value: "$8267.87",
    },
    {
      icon: coinlogos.binance,
      name: "Binance Coin",
      quality: "3343.32 BNB",
      value: "$8267.87",
    },
  ];
  return (
    <div className="addedportfolios-mobile">
      <div className="td">
        <div className="tr cur">
          <p>Currency</p>
        </div>
        <div className="tr qua">
          <p>Quantity</p>
        </div>
        <div className="tr val">
          <p>Value</p>
        </div>
      </div>

      {details.map((item, key) => (
        <div className="td abx">
          <div className="tr cur">
              {item.icon}
            <p>{item.name}</p>
          </div>
          <div className="tr qua">
            <p>{item.quality}</p>
          </div>
          <div className="tr val">
            <p>{item.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddedPortfolios;
