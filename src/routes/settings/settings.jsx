import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./settings.scss";
import addrect from "../../Assets/Icon/extra/addrect2.svg";
import profilepic from "../../Assets/Img/Oval.png";
import RadioButton from "../../components/RadioButton/RadioButton";
import Modal2 from "../../components/Modal2/Modal2";
const Settings = () => {
  const [faceid, setfaceid] = useState(false);
  const [darkmood, setdarkmode] = useState(false);
  return (
    <div className="main-container page">
      <Header head="Settings" />
      <div className="settings-route">
        <div className="profile-bar">
          <img className="barrect" src={addrect} alt="none" />

          <div className="main-bar">
            <div className="profile">
              <img src={profilepic} alt="" />
              <h1>
                Clarke Gillebert
                <h2>Alitstudios@gmail.com</h2>
              </h1>
            </div>

            <button style={{cursor : 'pointer'}}>Log out</button>
          </div>
        </div>

        <div className="settings">
          <div className="default-cur">
            <h1>Defaul Currencies</h1>
            <button>
              <p>SAFECOIN</p>
              <svg
                width="4"
                height="8"
                viewBox="0 0 4 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68316 3.99984L0.15976 1.56498C-0.0532533 1.35944 -0.0532533 1.0262 0.15976 0.820658C0.372773 0.615119 0.718136 0.615119 0.931149 0.820658L3.84024 3.62768C4.05325 3.83321 4.05325 4.16646 3.84024 4.372L0.931149 7.17902C0.718136 7.38455 0.372773 7.38455 0.15976 7.17902C-0.0532533 6.97348 -0.0532533 6.64023 0.15976 6.43469L2.68316 3.99984Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="default-cur">
            <h1>Face ID</h1>

            <RadioButton on={faceid} seton={setfaceid} />
          </div>
          <div className="default-cur">
            <h1>Dark mode</h1>

            <RadioButton on={darkmood} seton={setdarkmode} />
          </div>
          <div className="default-cur">
            <h1>Conect Social</h1>
            <button>
              <svg
                width="4"
                height="8"
                viewBox="0 0 4 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68316 3.99984L0.15976 1.56498C-0.0532533 1.35944 -0.0532533 1.0262 0.15976 0.820658C0.372773 0.615119 0.718136 0.615119 0.931149 0.820658L3.84024 3.62768C4.05325 3.83321 4.05325 4.16646 3.84024 4.372L0.931149 7.17902C0.718136 7.38455 0.372773 7.38455 0.15976 7.17902C-0.0532533 6.97348 -0.0532533 6.64023 0.15976 6.43469L2.68316 3.99984Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="default-cur">
            <h1>Policy</h1>
            <button>
              <svg
                width="4"
                height="8"
                viewBox="0 0 4 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68316 3.99984L0.15976 1.56498C-0.0532533 1.35944 -0.0532533 1.0262 0.15976 0.820658C0.372773 0.615119 0.718136 0.615119 0.931149 0.820658L3.84024 3.62768C4.05325 3.83321 4.05325 4.16646 3.84024 4.372L0.931149 7.17902C0.718136 7.38455 0.372773 7.38455 0.15976 7.17902C-0.0532533 6.97348 -0.0532533 6.64023 0.15976 6.43469L2.68316 3.99984Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
          <div className="default-cur">
            <h1>Term of Use</h1>
            <button>
              <svg
                width="4"
                height="8"
                viewBox="0 0 4 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.68316 3.99984L0.15976 1.56498C-0.0532533 1.35944 -0.0532533 1.0262 0.15976 0.820658C0.372773 0.615119 0.718136 0.615119 0.931149 0.820658L3.84024 3.62768C4.05325 3.83321 4.05325 4.16646 3.84024 4.372L0.931149 7.17902C0.718136 7.38455 0.372773 7.38455 0.15976 7.17902C-0.0532533 6.97348 -0.0532533 6.64023 0.15976 6.43469L2.68316 3.99984Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
