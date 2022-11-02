import React from "react";
import icon1 from "../../assets/icons/benefits/benefits-1.png";
import icon2 from "../../assets/icons/benefits/benefits-2.png";
import icon3 from "../../assets/icons/benefits/benefits-3.png";
import "./benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="main-container">
        <div className="benefits__container">
          <div className="benefits__textbox">
            <div className="benefits__textbox-heading">
              <p className="section-name">Benefits</p>
              <h3 className="primary-heading">
                Benefits when using our services
              </h3>
            </div>
            <p className="primary-description">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="benefits__cards">
            <div className="benefits__card">
              <div className="benefits__card-icon">
                <img src={icon1} alt="icon" />
              </div>
              <h4 className="benefits__card-heading">Many Choices</h4>
              <p className="primary-description">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
            </div>
            <div className="benefits__card">
              <div className="benefits__card-icon">
                <img src={icon2} alt="calendar icon" />
              </div>
              <h4 className="benefits__card-heading">Fast and On Time</h4>
              <p className="primary-description">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
            </div>
            <div className="benefits__card">
              <div className="benefits__card-icon">
                <img src={icon3} alt="money icon" />
              </div>
              <h4 className="benefits__card-heading">Affordable Price</h4>
              <p className="primary-description">
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
