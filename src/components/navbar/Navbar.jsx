import logo from "../../assets/logos/logo-name.png";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navigation">
      <div className="main-container">
        <div className="navigation__container">
          <a href="/" className="logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className={isOpen ? "navigation__list open" : "navigation__list"}>
            <li className="navigation__link">
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Home
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/product"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Product
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/services"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Services
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/article"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Article
              </NavLink>
            </li>
            <li className="navigation__link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "link-active" : "nav-link"
                }
                to="/aboutus"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                About Us
              </NavLink>
            </li>
          </ul>
          {/* <button
            className="mobile__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <img
              className={isOpen ? "hidden" : undefined}
              src={menuIcon}
              alt="menu icon"
            />
            <img
              className={!isOpen ? "hidden" : undefined}
              src={menuClose}
              alt="close menu icon"
            />
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
