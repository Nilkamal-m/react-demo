import { Container, Grid, Paper, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import Logo from "../../assets/img/profile-header-background.png";
import "./Navbar.css";
import { MenuContext } from "../topbar_navbar/TopbarNavbar";
import { Link } from "react-router-dom";

const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-link",
    icon: "fas fa-home",
  },
  {
    title: "Achievement",
    url: "/achievment",
    cName: "nav-link",
    icon: "fas fa-trophy",
  },
  {
    title: "Zone",
    url: "/zone",
    cName: "nav-link",
    icon: "fas fa-book",
  },
  {
    title: "Committee",
    url: "#",
    cName: "nav-link",
    icon: "far fa-id-badge",
  },
  {
    title: "Others",
    url: "#",
    cName: "nav-link",
    icon: "fas fa-outdent",
    cDownIcon: "fas fa-caret-down",
  },
  {
    title: "Login Area",
    url: "#",
    cName: "nav-link",
    icon: "fas fa-lock",
    cDownIcon: "fas fa-caret-down",
  },
];

const Navbar = () => {
  const menuContext = useContext(MenuContext);

  return (
    <nav className="NavbarItem">
      <img className="navbar-logo" src={Logo} alt="Logo" />
      <ul className={menuContext.menuState ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, i) => (
          <li key={i}>
            <Link to={item.url}>
              <a className={item.cName}>
                <i class={item.icon}>{item.title} </i>
                <i class={item.cDownIcon}></i>
              </a>
            </Link>

            {/* <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a>Home</a>
              </li>
            </ul> */}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
