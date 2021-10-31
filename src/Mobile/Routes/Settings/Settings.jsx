import React from "react";
import "./Settings.scss";
import RadioButton from "../../Components/RadioButton/RadioButton";
import SettingsHeader from "../../Components/SettingsHeader/SettingsHeader";
const right = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.68316 8.00008L6.15976 5.56523C5.94675 5.35969 5.94675 5.02644 6.15976 4.8209C6.37277 4.61536 6.71814 4.61536 6.93115 4.8209L9.84024 7.62792C10.0533 7.83346 10.0533 8.1667 9.84024 8.37224L6.93115 11.1793C6.71814 11.3848 6.37277 11.3848 6.15976 11.1793C5.94675 10.9737 5.94675 10.6405 6.15976 10.4349L8.68316 8.00008Z"
      fill="white"
    />
  </svg>
);

const Settings = () => {
  return (
    <div className="Settings-route-mobile mobile-container">
      <SettingsHeader />

      <div className="settings">
        <div className="barbox">
          <h1>Defaul Currencies</h1>
          <h2>SAFECOIN {right}</h2>
        </div>
        <div className="barbox">
          <h1>Face ID</h1>
          <h2>
            <RadioButton on={true} />
          </h2>
        </div>
        <div className="barbox">
          <h1>Dark mode</h1>
          <h2>
            <RadioButton on={true} />
          </h2>
        </div>
        <div className="barbox">
          <h1>Conect Social</h1>
          <h3>{right}</h3>
        </div>
        <div className="barbox">
          <h1>Policy</h1>
          <h3>{right}</h3>
        </div>
        <div className="barbox">
          <h1>Term of Use</h1>
          <h3>{right}</h3>
        </div>
        <div className="barbox"></div>
        <div className="barbox">
          <h1 style={{ color: "#EF6866" }}>Log out</h1>
          <h3>{right}</h3>
        </div>
      </div>
    </div>
  );
};

export default Settings;
