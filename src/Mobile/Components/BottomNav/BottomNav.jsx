import React from "react";
import { NavLink } from "react-router-dom";
import "./BottomNav.scss";
import { activeIcons, nonactiveIcons } from "./navIcons";

const BottomNav = () => {
  const menues = [
    {
      name: "Market",
      active: activeIcons.stockChart,
      nonactive: nonactiveIcons.stockChart,
      link: "/safexchange/market",
    },
    {
      name: "Portfolio",
      active: activeIcons.pigBank,
      nonactive: nonactiveIcons.pigBank,
      link: "/safexchange/portfolio",
    },
    {
      name: "Alert",
      active: activeIcons.alertBell,
      nonactive: nonactiveIcons.alertBell,
      link: "/safexchange/alert",
    },
    {
      name: "Settings",
      active: activeIcons.settings,
      nonactive: nonactiveIcons.settings,
      link: "/safexchange/settings",
    },
  ];
  return (
    <div className="BottomNav">
      {menues.map((item, key) => (
        <NavLink key={key} to={item.link} exact activeClassName="active-nav">
          <button className="menu-item">
            <div className="menu-logo">
              {item.nonactive}
              {item.active}
            </div>
            <h1>{item.name}</h1>
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
