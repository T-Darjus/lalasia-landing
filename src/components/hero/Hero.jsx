import React from "react";
import hero from "../../assets/img/hero.png";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container main-container">
        <div className="hero__content">
          <div className="hero__textbox">
            <h1 className="main-heading">
              Discover Furniture With High Quality Wood
            </h1>
            <p className="hero__textbox-text">
              Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
              dignissim placerat nisi, adipiscing mauris non. Purus parturient
              viverra nunc, tortor sit laoreet. Quam tincidunt aliquam
              adipiscing tempor.
            </p>
          </div>
          <div className="hero__search">
            <form>
              <input type="text" placeholder="Search property" />
              <button type="submit">Search</button>
            </form>
          </div>
          <img className="hero__img" src={hero} alt="furniture" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
