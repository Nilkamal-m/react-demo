import React, { useState, useContext } from "react";
import { Button } from "./Button";
import "./Topbar.css";
import { MenuContext } from "./topbar_navbar/TopbarNavbar";

const TopbarItem = [
  {
    icon: "fab fa-facebook-f",
    url: "#",
    cName: "social-link social-link-fb",
  },
  {
    icon: "fab fa-twitter",
    url: "#",
    cName: "social-link social-link-tw",
  },
  {
    icon: "fab fa-youtube",
    url: "#",
    cName: "social-link social-link-yt",
  },
  {
    icon: "fab fa-google-plus-g",
    url: "#",
    cName: "social-link social-link-g",
  },
];

const Topbar = () => {
  const menuContext = useContext(MenuContext);
  const handleClick = () => {
    menuContext.menuDispatch("change");
  };
  return (
    <>
      {/* <div className="TopbarItem">
        <div className="topbar-cont-dtl">
          <span class="topbar-phone-no">
            <i class="fas fa-phone-alt">011-25332828</i>
          </span>
          <a href="mailto:contact@brmgss.org">
            <i class="far fa-envelope">contact@brmgss.org</i>
          </a>
        </div>
        <div>
          <ul className="topbar-menu">
            {TopbarItem.map((item, i) => (
              <li key={i}>
                <a href={item.url} className={item.cName}>
                  <i class={item.icon}></i>
                </a>
              </li>
            ))}
            <li>
              <Button>Upgrade QR Card</Button>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleClick}>
            <i class={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </div> */}

      <header>
        <div className="topbar-cont">
          <span class="topbar-phone-no">
            <i class="fas fa-phone-alt">011-25332828</i>
          </span>
          <a href="mailto:contact@brmgss.org">
            <i class="far fa-envelope">contact@brmgss.org</i>
          </a>
        </div>

        <nav className="topbar-social-menu">
          <ul className="nav__link">
            {TopbarItem.map((item, i) => (
              <li key={i}>
                <a href={item.url} className={item.cName}>
                  <i class={item.icon}></i>
                </a>
              </li>
            ))}
          </ul>
          <a className="cta" href="#">
            <Button>Upgrade QR Card</Button>
          </a>
          <a className="menu-icon" onClick={handleClick}>
            <i
              class={menuContext.menuState ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </a>
        </nav>
      </header>
    </>
  );
};

export default Topbar;

// export const topbarMenuValues = () => {
//   return { menuActive, handleClick };
// };
