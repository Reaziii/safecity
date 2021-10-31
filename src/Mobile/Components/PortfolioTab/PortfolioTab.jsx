import React from "react";
import "./PortfolioTab.scss";

const rect = (
  <svg
    width="229"
    height="80"
    viewBox="0 0 229 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.0506138" filter="url(#filter0_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-5 80.5565L158.556 -83L218.032 -23.5249L54.4751 140.032L-5 80.5565Z"
        fill="white"
      />
    </g>
    <g filter="url(#filter1_d)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M-77 0.661453L74.6615 -151L137.11 -88.5512L-14.5512 63.1103L-77 0.661453Z"
        fill="white"
        fill-opacity="0.1"
      />
      <path
        d="M-74.1716 0.661453L74.6615 -148.172L134.282 -88.5512L-14.5512 60.2819L-74.1716 0.661453Z"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="4"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-15"
        y="-91"
        width="243.032"
        height="243.032"
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
        x="-81"
        y="-153"
        width="222.11"
        height="222.11"
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

const up = (
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
      d="M11.9163 10.9904C12.0343 10.7784 12.0276 10.519 11.899 10.3137L8.56565 4.98036C8.44298 4.78569 8.22965 4.66702 7.99965 4.66702C7.76965 4.66702 7.55631 4.78569 7.43431 4.98036L4.10098 10.3137C4.03365 10.4217 3.99965 10.5444 3.99965 10.667C3.99965 10.7784 4.02765 10.889 4.08298 10.9904C4.20098 11.2024 4.42365 11.3337 4.66631 11.3337H11.333C11.5756 11.3337 11.7983 11.2024 11.9163 10.9904Z"
      fill="white"
    />
  </svg>
);

const PortfolioTab = () => {
  return (
    <div className="portfoliotab-mobile">
      <div className="fixed-rect">{rect}</div>

      <div className="left">
        <h1>$10,948.88</h1>
        <p>Total balance</p>
      </div>
      <button className="right">{up}4.56%</button>
    </div>
  );
};

export default PortfolioTab;
