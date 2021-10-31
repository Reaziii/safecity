import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Modal2 from "../../components/Modal2/Modal2";
import "./Alert.scss";
import bch from '../../Assets/Icon/Coin/bch.svg'
import plus from '../../Assets/Icon/extra/plus.svg'
import SingleAlert from "../../components/SingleAlert/SingleAlert";
const Alert = () => {
  const [openmodal, setopenmodal] = useState(false);
  const options = [
    {
      name: "SAFECOIN",
      sname: "SAFECOIN",
      icon: bch,
    },
    {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
      {
        name: "SAFECOIN",
        sname: "SAFECOIN",
        icon: bch,
      },
    ]
  return (
    <div className="main-container page">
      <div className="alert-route">
        <Modal2 options={options} header="New price alert" open={openmodal} onOpen={setopenmodal}>
          
        </Modal2>
        <Header head="Alert" />

        <div className="add-alert">
          <div className="left">
            <p>
              <span>1 alert</span> is activated
            </p>
          </div>
          <button
            onClick={() => setopenmodal(true)}
            className="right btn__blue_purple"
          >
            Add new
          </button>
        </div>

        <SingleAlert/>
      </div>
    </div>
  );
};

export default Alert;
