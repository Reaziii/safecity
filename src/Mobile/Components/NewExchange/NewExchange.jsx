import React from "react";
import "./NewExchange.scss";
import { coinlogos } from "../../Assets/CoinLogos";
const back = (
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
const qr = (
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
      d="M11.1667 11.1667H2V2H11.1667V11.1667ZM3.66667 9.5H9.5V3.66667H3.66667V9.5ZM22 11.1667H12.8333V2H22V11.1667ZM14.5 9.5H20.3333V3.66667H14.5V9.5ZM2 22H11.1667V12.8333H2V22ZM9.5 20.3333H3.66667V14.5H9.5V20.3333ZM20.3333 18.6667H22V12.8333H17V15.3333H15.3333V12.8333H13.6667V17H18.6667V14.5H20.3333V18.6667ZM22 22H13.6667V18.6667H15.3333V20.3333H22V22ZM7.83333 5.33333H5.33333V7.83333H7.83333V5.33333ZM16.1667 5.33333H18.6667V7.83333H16.1667V5.33333ZM7.83333 16.1667H5.33333V18.6667H7.83333V16.1667Z"
      fill="#02D3ED"
    />
  </svg>
);

const NewExchange = ({ setpage }) => {
  return (
    <div className="newExchange-mobile">
      <div className="header">
        <div onClick={() => setpage(4)} className="back">
          {back}
        </div>
        <h1>
          {coinlogos.binance}
          <p>Binance</p>
        </h1>
        <div className="und">{qr}</div>
      </div>

      <div className="body">
        <p>API KEY</p>
        <div className="inputs">
          <input type="text" placeholder="121212121212121" />
          <h4>Paste</h4>
        </div>
        <div style={{ height: "32px" }}></div>
        <p>Secret KEY</p>
        <div className="inputs">
          <input type="text" placeholder="Tap to enter manually" />
          <h4>Paste</h4>
        </div>

        <button onClick={()=>setpage(1)}>Connect Exchange</button>

        <h3>
          Automatically sync multiple transactions by connecting your exchange
          accounts.
        </h3>
      </div>
    </div>
  );
};

export default NewExchange;
