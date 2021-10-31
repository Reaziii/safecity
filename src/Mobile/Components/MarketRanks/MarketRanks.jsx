import React, { useState } from "react";
import "./MarketRanks.scss";
import CoinInfo from "../CoinInfo/CoinInfo";
import { details } from "../../Data/MarketRank";
const down = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 13.0247L15.6523 9.23964C15.9606 8.92012 16.4605 8.92012 16.7688 9.23964C17.0771 9.55916 17.0771 10.0772 16.7688 10.3967L12.5582 14.7604C12.2499 15.0799 11.7501 15.0799 11.4418 14.7604L7.23123 10.3967C6.92292 10.0772 6.92292 9.55916 7.23123 9.23964C7.53954 8.92012 8.03941 8.92012 8.34772 9.23964L12 13.0247Z"
      fill="white"
    />
  </svg>
);
const green = (
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
      d="M11.9163 10.9903C12.0343 10.7783 12.0276 10.519 11.899 10.3137L8.56565 4.98033C8.44298 4.78566 8.22965 4.66699 7.99965 4.66699C7.76965 4.66699 7.55631 4.78566 7.43431 4.98033L4.10098 10.3137C4.03365 10.4217 3.99965 10.5443 3.99965 10.667C3.99965 10.7783 4.02765 10.889 4.08298 10.9903C4.20098 11.2023 4.42365 11.3337 4.66631 11.3337H11.333C11.5756 11.3337 11.7983 11.2023 11.9163 10.9903Z"
      fill="#00C48C"
    />
  </svg>
);

const red = (
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
      d="M11.9163 5.01041C12.0343 5.22241 12.0276 5.48174 11.899 5.68707L8.56565 11.0204C8.44298 11.2151 8.22965 11.3337 7.99965 11.3337C7.76965 11.3337 7.55631 11.2151 7.43431 11.0204L4.10098 5.68707C4.03365 5.57907 3.99965 5.45641 3.99965 5.33374C3.99965 5.22241 4.02765 5.11174 4.08298 5.01041C4.20098 4.79841 4.42365 4.66707 4.66631 4.66707L11.333 4.66707C11.5756 4.66707 11.7983 4.79841 11.9163 5.01041Z"
      fill="#EF6866"
    />
  </svg>
);
const MarketRanks = () => {
  const [openinfo,setopeninfo] = useState(false);  

  return (
    <>
      <CoinInfo open={openinfo} setopen={setopeninfo} />
      <div className="MarketRanks-mobile">
        <div className="tr">
          <div className="td rank">
            <p className="HeaderX">Rank {down}</p>
          </div>
          <div className="td price">
            <p className="headerX">Price</p>
          </div>
          <div className="td cap">
            <p className="headerX">Cap/Vol</p>
          </div>
        </div>
        {details.map((item, key) => (
          <div onClick={()=>setopeninfo(true)} className="tr ranks-xx">
            <div className="td rank">
              <div className="id">{key + 1}</div>
              <div className="icon">{item.ranks.icon}</div>
              <div className="name">
                <p className="h1">{item.ranks.name.name}</p>
                <p className="h2">{item.ranks.name.shortname}</p>
              </div>
            </div>
            <div className="td price">
              <h1>{item.price.value}</h1>
              <div className="down">
                {item.price.up ? green : red}
                <p
                  style={{
                    color: item.price.up
                      ? "rgba(0, 196, 140, 1)"
                      : "rgba(239, 104, 102, 1)",
                  }}
                >
                  {item.price.percent}
                </p>
              </div>
            </div>
            <div className="td cap">
              <h1>{item.cap.value}</h1>
              <h2>{item.cap.svalue}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarketRanks;
