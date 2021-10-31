import React, { useState } from "react";
import "./SingleAlert.scss";
import btc from "../../Assets/Icon/Coin/btc.svg";
import RadioButton from '../RadioButton/RadioButton'
import plus from "../../Assets/Icon/extra/plus.svg";
const up = (
  <svg
    width="20"
    height="10"
    viewBox="0 0 20 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.81991 0.225304L5.21739 4.29676L1.48444 0.994535C1.14485 0.694132 0.594276 0.694132 0.25469 0.994535C-0.0848966 1.29494 -0.0848966 1.78199 0.25469 2.08239L4.60252 5.92854C4.9421 6.22895 5.49268 6.22895 5.83227 5.92854L10.4016 1.88647L17.091 8.46154H13.0435C12.5632 8.46154 12.1739 8.80593 12.1739 9.23077C12.1739 9.6556 12.5632 10 13.0435 10H19.1304C19.6107 10 20 9.6556 20 9.23077V3.84615C20 3.42132 19.6107 3.07692 19.1304 3.07692C18.6502 3.07692 18.2609 3.42132 18.2609 3.84615V7.31166L11.0811 0.254644C10.7478 -0.0729386 10.1722 -0.0863302 9.81991 0.225304Z"
      fill="#EF6866"
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
      d="M11.8199 16.7747L7.21739 12.7032L3.48444 16.0055C3.14485 16.3059 2.59428 16.3059 2.25469 16.0055C1.9151 15.7051 1.9151 15.218 2.25469 14.9176L6.60252 11.0715C6.9421 10.7711 7.49268 10.7711 7.83227 11.0715L12.4016 15.1135L19.091 8.53846H15.0435C14.5632 8.53846 14.1739 8.19407 14.1739 7.76923C14.1739 7.3444 14.5632 7 15.0435 7H21.1304C21.6107 7 22 7.3444 22 7.76923V13.1538C22 13.5787 21.6107 13.9231 21.1304 13.9231C20.6502 13.9231 20.2609 13.5787 20.2609 13.1538V9.68834L13.0811 16.7454C12.7478 17.0729 12.1722 17.0863 11.8199 16.7747Z"
      fill="#00C48C"
    />
  </svg>
);

const SingleAlert = ({ icon, name }) => {
  const [list,setlist] = useState([
    {
      up: true,
      name: "Below $8100.00",
      created: "Create Jun 3, 2019",
      on: true,
    },
    {
      up: false,
      name: "Above $8500.00",
      created: "Create Jun 3, 2019",
      on: false,
    },
  ]);
  return (
    <div className="single-alert">
      <div className="head">
        <div className="left">
          <img src={btc} alt={name} className="head-icon" />
          <h1 className="p">Bitcoin (BTC)</h1>
        </div>
        <button className="plus-button" id="laskd">
          <img src={plus} alt="plus" />
        </button>
      </div>
      <div className="body">
        {list.map((item, key) => (
          <div className="st-yy">
            <div className="left">
              <div className="up-down">{item.up ? up : down}</div>
            <p>
                {item.name}
                <p>
                    {item.created}
                </p>
            </p>
            </div>
            <div className="right">
                <RadioButton on={item.on}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleAlert;
