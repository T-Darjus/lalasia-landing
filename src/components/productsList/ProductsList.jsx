import React, { useState } from "react";
import "./productsList.css";
import { productsListData as data } from "./productsListData";
import Pagination from "../pagination/Pagination";

const ProductsList = () => {
  const [index, setIndex] = useState(0);
  const [totalPages] = useState(Math.ceil(data.length / 9));
  const [currentPage, setCurrentPage] = useState(1);

  const setPage = (page) => {
    setIndex((page - 1) * 9);
    setCurrentPage(page);
  };

  if (index + 9 - data.length >= 9) {
    setIndex(0);
  }
  const cardsArray = data.slice(0 + index, 9 + index);
  console.log(cardsArray);

  return (
    <section className="products-list">
      <div className="main-container">
        <div className="products-list__container">
          <div className="products-list__search">
            <form>
              <input type="text" placeholder="Search property" />
              <button type="submit">Find Now</button>
            </form>
          </div>
          <div id="products-list__heading" className="products-list__heading">
            <h1 className="primary-heading">Total products</h1>
            <span className="products-list__heading-count">{data.length}</span>
          </div>
          <div className="products-list__cards">
            {cardsArray.map((card, index) => {
              return (
                <div className="products-list__card" key={index}>
                  <a href="/">
                    <div className="products-list__card-img">
                      <img src={card.img} alt={card.name} />
                    </div>
                    <p className="products-list__card-name">{card.name}</p>
                    <h4 className="products-list__card-heading text-cut">
                      {card.heading}
                    </h4>
                    <p className="primary-description text-cut">
                      {card.description}
                    </p>
                    <p className="products-list__card-price">{card.price}</p>
                  </a>
                </div>
              );
            })}
          </div>
          <div className="pagination">
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsList;
