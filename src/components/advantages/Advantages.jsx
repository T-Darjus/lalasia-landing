import React from "react";
import "./advantages.css";
import tools from "../../assets/img/advantages-1.png";
import furniture from "../../assets/img/advantages-2.png";

const Advantages = () => {
  return (
    <section className="advantages">
      <div className="main-container">
        <div className="advantages__container">
          <div className="advantages__text-content">
            <div className="advantages__text-box">
              <p className="section-name">Why we?</p>
              <h3 className="primary-heading">
                Talented carpenters and high quality materials
              </h3>
              <p className="primary-description">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
                morbi fermentum, vivamus et accumsan dui tincidunt pulvinar.
              </p>
              <a className="advantages__btn" href="/">
                Learn more
              </a>
            </div>
            <div className="advantages__cards">
              <div className="advantages__card">
                <h3 className="primary-heading">20+</h3>
                <p className="primary-description">Years Experience</p>
              </div>
              <div className="advantages__card">
                <h3 className="primary-heading">483</h3>
                <p className="primary-description">Happy Client</p>
              </div>
              <div className="advantages__card">
                <h3 className="primary-heading">150+</h3>
                <p className="primary-description">Projects finished</p>
              </div>
            </div>
          </div>
          <div className="advantages__images">
            <div className="advantages__img ibg">
              <img src={tools} alt="working tools" />
            </div>
            <div className="advantages__img ibg">
              <img src={furniture} alt="furniture" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;
