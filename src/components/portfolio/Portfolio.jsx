import React from "react";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="main-container">
        <div className="portfolio__container">
          <div className="portfolio__textbox">
            <div className="portfolio__textbox-heading">
              <p className="section-name">Portfolio</p>
              <h3 className="primary-heading">
                Amazing project we’ve done before
              </h3>
            </div>
            <div className="portfolio__textbox-description">
              <p className="primary-description">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
              <a className="portfolio-link" href="/">
                View portfolio
              </a>
            </div>
          </div>
          <div className="portfolio__content">
            <div className="portfolio__content-main">
              <h5 className="portfolio__content-heading">
                Siska Kohl’s Bedroom
              </h5>
              <p className="portfolio__content-description text-cut">
                We start renovating her bedroom with minimalist concept and
                using combination white and wooden material
              </p>
              <a className="portfolio__content-link" href="/">
                See detail
              </a>
            </div>
            <div className="portfolio__content-secondary">
              <div className="portfolio__content-secondary-item--1">
                <h5 className="portfolio__content-heading">
                  Jeruk Veldevana Living Room Design
                </h5>
                <p className="portfolio__content-description text-cut">
                  We start renovating her bedroom with minimalist concept and
                  using combination white and wooden material
                </p>
                <a className="portfolio__content-link" href="/">
                  See detail
                </a>
              </div>
              <div className="portfolio__content-secondary-item--2">
                <h5 className="portfolio__content-heading">
                  Cozy Co-working space
                </h5>
                <p className="portfolio__content-description text-cut">
                  We start renovating her bedroom with minimalist concept and
                  using combination white and wooden material
                </p>
                <a className="portfolio__content-link" href="/">
                  See detail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
