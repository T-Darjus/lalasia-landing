import React from "react";
import "./service.css";
import { servicesCardData as data } from "./servicesCardData";

const Service = () => {
  return (
    <section className="services">
      <div className="main-container">
        <div className="services__container">
          <div className="services__textbox">
            <h2 className="main-heading">Services</h2>
            <p className="primary-description">
              The product crafted by talented crafter and using high quality
              material with love inside
            </p>
          </div>
          <div className="services__img ibg">
            <img src="/images/services/main-img.png" alt="living room" />
          </div>
          <div className="services__cards">
            {data.map((card, index) => {
              return (
                <div className="services__card" key={index}>
                  <p className="services__card-number">{card.number}</p>
                  <h5 className="services__card-heading">{card.heading}</h5>
                  <p className="primary-description">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
