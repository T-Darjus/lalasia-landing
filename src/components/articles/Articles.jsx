import React from "react";
import "./articles.css";
import { articlesData } from "./articlesData";

const Articles = () => {
  return (
    <section className="articles">
      <div className="main-container">
        <div className="articles__container">
          <div className="articles__wrapper">
            <div className="articles__main-content">
              <div className="articles__textbox">
                <div className="articles__textbox-heading">
                  <p className="section-name">Articles</p>
                  <h3 className="primary-heading">
                    The best furniture comes from Lalasia
                  </h3>
                </div>
                <p className="primary-description">
                  Pellentesque etiam blandit in tincidunt at donec.
                </p>
              </div>
              <div className="articles__mainbox">
                <p className="articles__mainbox-description">Tips and Trick</p>
                <h4 className="articles__mainbox-heading">
                  Create Cozy Dinning Room Vibes
                </h4>
                <p className="articles__mainbox-description text-cut">
                  Decorating with neutrals brings balance to the dining room.
                  With eclectic decoration on the sides, Caruso Dining Table and
                  Cyrillo Dining Chairs elevate the tonal base of the room. The
                  modern furniture set gives personality to any space in all
                  types of architecture.The wide volume enables everyone to sit
                  back and relax, be it in the dining room, conference, or
                  office.
                </p>
                <a href="/">Read more</a>
                <button className="articles__button articles__button-left">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                  </svg>
                </button>
                <button className="articles__button articles__button-right">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="articles__cards">
              {articlesData.map((card, index) => {
                return (
                  <a href="/" key={index}>
                    <div className="articles__card">
                      <div className="articles__card-img">
                        <img src={card.img} alt="furniture" />
                      </div>
                      <div className="articles__card-textbox">
                        <p className="articles__card-textbox-name">
                          {card.name}
                        </p>
                        <h4 className="articles__card-textbox-heading">
                          {card.heading}
                        </h4>
                        <p className="articles__card-textbox-description text-cut">
                          {card.description}
                        </p>
                        <div className="articles__card-row">
                          <div className="articles__card-author">
                            <img src={card.authorImg} alt="author" />
                            <h6 className="articles__card-author-name">
                              {card.authorName}
                            </h6>
                          </div>
                          <div className="articles__card-date">
                            <p>{card.authorDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
