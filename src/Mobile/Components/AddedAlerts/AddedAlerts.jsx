import React, { useState } from "react";
import "./AddedAlerts.scss";
import RadioButton from "../RadioButton/RadioButton";
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
      d="M8.00004 1.33337C7.66532 1.33337 7.39398 1.60472 7.39398 1.93943V7.39399H1.9394C1.60469 7.39399 1.33334 7.66533 1.33334 8.00005C1.33334 8.33477 1.60469 8.60611 1.9394 8.60611H7.39398V14.0606C7.39398 14.3954 7.66532 14.6667 8.00004 14.6667C8.33476 14.6667 8.6061 14.3954 8.6061 14.0606V8.60611H14.0606C14.3953 8.60611 14.6667 8.33477 14.6667 8.00005C14.6667 7.66533 14.3953 7.39399 14.0606 7.39399H8.6061V1.93943C8.6061 1.60472 8.33476 1.33337 8.00004 1.33337Z"
      fill="white"
    />
  </svg>
);
const up = (
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
      d="M11.8199 16.7747L7.21739 12.7032L3.48444 16.0055C3.14485 16.3059 2.59428 16.3059 2.25469 16.0055C1.9151 15.7051 1.9151 15.218 2.25469 14.9176L6.60252 11.0715C6.9421 10.7711 7.49268 10.7711 7.83227 11.0715L12.4016 15.1135L19.091 8.53846H15.0435C14.5632 8.53846 14.1739 8.19407 14.1739 7.76923C14.1739 7.3444 14.5632 7 15.0435 7H21.1304C21.6107 7 22 7.3444 22 7.76923V13.1538C22 13.5787 21.6107 13.9231 21.1304 13.9231C20.6502 13.9231 20.2609 13.5787 20.2609 13.1538V9.68834L13.0811 16.7454C12.7478 17.0729 12.1722 17.0863 11.8199 16.7747Z"
      fill="#00C48C"
    />
  </svg>
);

const down = (
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
      d="M11.8199 7.2253L7.21739 11.2968L3.48444 7.99453C3.14485 7.69413 2.59428 7.69413 2.25469 7.99453C1.9151 8.29494 1.9151 8.78199 2.25469 9.08239L6.60252 12.9285C6.9421 13.2289 7.49268 13.2289 7.83227 12.9285L12.4016 8.88647L19.091 15.4615H15.0435C14.5632 15.4615 14.1739 15.8059 14.1739 16.2308C14.1739 16.6556 14.5632 17 15.0435 17H21.1304C21.6107 17 22 16.6556 22 16.2308V10.8462C22 10.4213 21.6107 10.0769 21.1304 10.0769C20.6502 10.0769 20.2609 10.4213 20.2609 10.8462V14.3117L13.0811 7.25464C12.7478 6.92706 12.1722 6.91367 11.8199 7.2253Z"
      fill="#EF6866"
    />
  </svg>
);

const AddedAlerts = () => {
  const [open1, setopen1] = useState(true);
  const [open2, setopen2] = useState(false);
  return (
    <div className="AddedAlerts-mobile">
      <div className="header">
        <h1>
          {coinlogos.btc} <p>Bitcoin (BTC)</p>
        </h1>
        <div className="plus">{plus}</div>
      </div>

      <div className="barbox">
        <div className="left">
          {down}
          <div className="ux">
            <h1>Below $8100.00</h1>
            <h2>Create Jun 3, 2019</h2>
          </div>
        </div>
        <div className="right">
          <RadioButton on={open1} seton={setopen1} />
        </div>
      </div>
      <div className="barbox">
        <div className="left">
          {up}
          <div className="ux">
            <h1>Above $8500.00</h1>
            <h2>Triggered 2d ago</h2>
          </div>
        </div>
        <div className="right">
          <RadioButton on={open2} seton={setopen2} />
        </div>
      </div>
    </div>
  );
};

export default AddedAlerts;
