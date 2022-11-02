import React from "react";
import "./footer.css";
import logo from "../../assets/logos/logo-name.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-container">
        <div className="footer__container">
          <div className="footer__company">
            <div className="footer__company-logo">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <p className="footer__company-description">
              Lalasia is digital agency that help you make better experience
              iaculis cras in.
            </p>
          </div>
          <nav className="footer__links">
            <div className="footer__links-column">
              <h6 className="footer__links-heading">Product</h6>
              <ul className="footer__links-list">
                <li className="footer__link">
                  <a href="/">New Arrivals</a>
                </li>
                <li className="footer__link">
                  <a href="/">Best Selling</a>
                </li>
                <li className="footer__link">
                  <a href="/">Home Decor</a>
                </li>
                <li className="footer__link">
                  <a href="/">Kitchen Set</a>
                </li>
              </ul>
            </div>
            <div className="footer__links-column">
              <h6 className="footer__links-heading">Services</h6>
              <ul className="footer__links-list">
                <li className="footer__link">
                  <a href="/">Catalog</a>
                </li>
                <li className="footer__link">
                  <a href="/">Blog</a>
                </li>
                <li className="footer__link">
                  <a href="/">FAQ</a>
                </li>
                <li className="footer__link">
                  <a href="/">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer__links-column">
              <h6 className="footer__links-heading">Follow Us</h6>
              <ul className="footer__links-list">
                <li className="footer__link">
                  <a href="/">Facebook</a>
                </li>
                <li className="footer__link">
                  <a href="/">Instagram</a>
                </li>
                <li className="footer__link">
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
