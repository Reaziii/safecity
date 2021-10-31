import React, { useState } from "react";
import "./Sidebar.scss";
import coin from "../../Assets/Icon/Coin/BCH.png";
import safeexchange from "../../Assets/SAFEXCHANGE_1.png";
import bup from "../../Assets/Icon/sidebarIcons/bup.svg";
import alertBell from "../../Assets/Icon/sidebarIcons/alertBell.svg";
import pigbank from "../../Assets/Icon/sidebarIcons/pigbank.svg";
import settings from "../../Assets/Icon/sidebarIcons/settings.svg";
import abup from "../../Assets/Icon/sidebarIcons/activebup.svg";
import aalertBell from "../../Assets/Icon/sidebarIcons/activealertBell.svg";
import apigbank from "../../Assets/Icon/sidebarIcons/activepigbank.svg";
import asettings from "../../Assets/Icon/sidebarIcons/activesettings.svg";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  const pathname = window.location.pathname;
  const [activeLink,setactiveLink] = useState(pathname);
  const tops = {
    '/safexchange/' : '0px',
    '/safexchange/portfolio' : '55px',
    '/safexchange/alert' : '110px',
    '/safexchange/settings' : '165px'
  }
  const menus = [
    {
      name: "Market",
      icon: bup,
      aicon: abup,
      link: "/safexchange",
      atop : '0px',
    },
    {
      name: "Portfolio",
      icon: pigbank,
      aicon: apigbank,
      atop : '55px',
      link: "/safexchange/portfolio",
    },
    {
      name: "Alert",
      icon: alertBell,
      aicon: aalertBell,
      atop : '110px',
      link: "/safexchange/alert",
    },
    // {
    // 	name: 'News',
    // 	icon: <i class="fas fa-newspaper"></i>,
    // },
    {
      name: "Settings",
      icon: settings,
      aicon: asettings,
      link: "/safexchange/settings",
      atop : '165px'
    },
  ];
  return (
    <div className="sidebar">
      <div style={{ height: "65px" }} className="first-part">
        <div className="coin-det">
          <img src={coin} alt="safecoin" className="coin-png" />
          <img src={safeexchange} alt="safecoin" className="safecoin-png" />
        </div>
      </div>
      <div className="dxx-ty">
        <div
        
        style={{
          top : tops[activeLink]
        }}
        
        className="active-nav">
        </div>
        {menus.map((item, key) => (
          <NavLink to={item.link} exact activeClassName="activebutton">
            <button
              style={{ cursor: "pointer" }}
              key={key}
              className={`sidebar-item-button`}
              onClick={()=>setactiveLink(item.link)}
            >
              <img className="non" src={item.icon} alt="icon" />
              <img src={item.aicon} alt="icon" className="aic" />
              <span>{item.name}</span>
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
