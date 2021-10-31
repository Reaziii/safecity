import React from "react";
import "./SettingsHeader.scss";
import profilepic from "../../Assets/Oval.png";
const rect = (
  <svg
    width="276"
    height="176"
    viewBox="0 0 276 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.0506138" filter="url(#filter0_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-76 138.8L174.8 -112L266 -20.8L15.2 230L-76 138.8Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter1_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-153 41.4167L35.4167 -147L113 -69.4167L-75.4167 119L-153 41.4167Z"
        fill="white"
        fill-opacity="0.1"
      />
      <path
        d="M-150.172 41.4167L35.4167 -144.172L110.172 -69.4167L-75.4167 116.172L-150.172 41.4167Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="4"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-86"
        y="-120"
        width="362"
        height="362"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d"
        x="-157"
        y="-149"
        width="274"
        height="274"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const SettingsHeader = () => {
  return (
    <div className="SettingsHeader-mobile">
      <div className="fiexed-rect">{rect}</div>
      <div className="details">
        <img src={profilepic} alt="" />
        <h1>Clarke Gillebert</h1>
        <p>Alitstudios@gmail.com</p>
      </div>
    </div>
  );
};

export default SettingsHeader;
