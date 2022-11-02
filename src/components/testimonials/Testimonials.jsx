import React from "react";
import { useState, useEffect } from "react";
import quote from "../../assets/testimonials/quote-up.png";
import star from "../../assets/testimonials/star.png";
import "./testimonials.css";
import { testimonialsData } from "./testimonialsData";

const Testimonials = () => {
  const [moveX, setMoveX] = useState(0);

  if (moveX > 200) {
    setMoveX(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMoveX((prevMoveX) => prevMoveX + 100);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section className="testimonials">
      <div className="main-container">
        <div className="testimonials__container">
          <div className="testimonials__textbox">
            <div className="testimonials__textbox-heading">
              <p className="section-name">Testimonials</p>
              <h3 className="primary-heading">What our customer say</h3>
            </div>
            <p className="primary-description">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="testimonials__slider">
            <div className="testimonials__cards">
              {testimonialsData.map((card, index) => {
                return (
                  <div
                    style={{
                      transform: `translateX(${card.axisMove - moveX}%)`,
                    }}
                    className="testimonials__card"
                    key={index}
                  >
                    <img className="quote" src={quote} alt="quote" />
                    <p className="primary-description">{card.text}</p>
                    <div className="testimonials__card-row">
                      <div className="testimonials__card-author">
                        <img src={card.img} alt="customer" />
                        <p className="testimonials__card-author-name">
                          {card.name}
                        </p>
                      </div>
                      <div className="testimonials__card-rating">
                        <img src={star} alt="star" />
                        <p className="testimonials__card-rating-text">
                          {card.rating}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
