import React, { useState } from "react";
import "./Portfolio.scss";
import Header from "../../components/Header/Header";
import addrect from "../../Assets/Icon/extra/addrect.svg";
import uparrow from "../../Assets/Icon/extra/filluparrow.svg";
import PortfolioComponent from "../../components/Portfolio/Portfolio";
import Modal from "../../components/Modal/Modal";
import bch from "../../Assets/Icon/Coin/bch.svg";
import plus from "../../Assets/Icon/extra/plus.svg";
import { motion } from "framer-motion"
const Portfolio = () => {
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

  ];
  return (
    <div className="main-container page">
      <div className="Portfolio-route">
        <Modal options={options} open={openmodal} onOpen={setopenmodal} header="Add new currency"/>
          

        <Header head="Portfolio" />

        <div className="add-new-cur">
          <div className="erect">
            <img src={addrect} alt="" />
          </div>

          <div className="contain">
            <div className="left">
              <div className="first">
                <h1>$10,948.88</h1>
                <p>Total balance</p>
              </div>
              <div className="second">
                <img src={uparrow} alt="" />
                <p>4.56%</p>
              </div>
            </div>
            <div className="right">
              <button onClick={() => setopenmodal(true)}>Add new</button>
            </div>
          </div>
        </div>
        <PortfolioComponent />
      </div>
    </div>
  );
};

export default Portfolio;
