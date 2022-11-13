import React from "react";
import { productData } from "./productData";
import "./product.css";
import { useState, useEffect } from "react";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

const Product = () => {
  const [moveCard, setMoveCard] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= productData.length - 2) {
      setIndex(0);
    }
    if (index === -1) {
      setIndex(0);
    }

    setMoveCard(
      (window.innerWidth > 1025
        ? -424
        : window.innerWidth > 768
        ? -315
        : window.innerWidth > 500
        ? -270
        : -235) * index
    );
  }, [index]);

  return (
    <section className="product">
      <div className="main-container">
        <div className="product__container">
          <div className="product__textbox">
            <div className="product__textbox-heading">
              <p className="section-name">Product</p>
              <h3 className="primary-heading">Our popular product</h3>
            </div>
            <p className="primary-description">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non purus parturient.
            </p>
          </div>
          <div className="product__slider">
            <div
              style={{
                marginLeft: `${moveCard}px`,
              }}
              className="product__cards"
            >
              {productData.map((card, index) => {
                return (
                  <div className="product__card" key={index}>
                    <a href="/">
                      <div className="product__card-img">
                        <img src={card.img} alt={card.name} />
                      </div>
                      <p className="product__card-name">{card.name}</p>
                      <h4 className="product__card-heading">{card.heading}</h4>
                      <p className="primary-description text-cut">
                        {card.description}
                      </p>
                      <p className="product__card-price">{card.price}</p>
                    </a>
                  </div>
                );
              })}
              <button
                onClick={() => setIndex(index + 1)}
                className="slider-btn btn--left"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => setIndex(index - 1)}
                className="slider-btn btn--right"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
