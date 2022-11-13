import React from "react";
import { useState, useEffect } from "react";
import "./productsSlider.css";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";
import { productsSliderData as data } from "./productsSliderData";

const ProductsSlider = () => {
  const [index, setIndex] = useState(0);
  const [slider, setSlider] = useState(data[0]);

  const lastIndex = data.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }

  useEffect(() => {
    setSlider(data[index]);
  }, [index]);

  const dots = [];
  for (let i = 0; i < data.length; i++) {
    if (index === i) {
      dots.push("slider__dot  dot--active");
    } else {
      dots.push("slider__dot");
    }
  }

  return (
    <section className="products-slider">
      <div className="main-container">
        <div className="products-slider__container">
          <div className="products-slider__textbox">
            <h2 className="main-heading">Products</h2>
            <p className="primary-description">
              We display products based on the latest products we have, if you
              want to see our old products please enter the name of the item
            </p>
          </div>
          <div className="products-slider__content">
            <div className="products-slider__content-textbox fade-in">
              <p className="products-slider__content-name">{slider.name}</p>
              <h1 className="products-slider__content-heading">
                {slider.heading}
              </h1>
              <p className="products-slider__content-description">
                {slider.description}
              </p>
            </div>
            <div className="slider__dots">
              {dots.map((element, elementIndex) => {
                return (
                  <div
                    key={elementIndex}
                    className={element}
                    onClick={() => setIndex(elementIndex)}
                  ></div>
                );
              })}
            </div>
            <div className="products-slider__content-img ibg">
              <img src={slider.img} alt="furniture" />
              <button
                onClick={() => setIndex(index - 1)}
                className="slider-btn btn--left"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={() => setIndex(index + 1)}
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

export default ProductsSlider;
