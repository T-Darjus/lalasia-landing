import React from "react";
import "./pagination.css";
import ArrowLeft from "../arrows/ArrowLeft";
import ArrowRight from "../arrows/ArrowRight";

const Pegination = ({ totalPages, currentPage, setPage }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const clickScroll = () => {
    const element = document.getElementById("products-list__heading");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const leftButtonClick = () => {
    setPage(currentPage - 1);
    clickScroll();
  };
  const rightButtonClick = () => {
    setPage(currentPage + 1);
    clickScroll();
  };

  return (
    <div className="pagination-container">
      <button
        onClick={leftButtonClick}
        className={
          currentPage === 1 ? "pagination__btn btn-disabled" : "pagination__btn"
        }
      >
        <ArrowLeft />
      </button>
      <ul>
        {pages.map((page) => {
          return (
            <li
              onClick={() => {
                setPage(page);
                clickScroll();
              }}
              key={page}
              id={page}
              className={currentPage === page ? "page-active" : null}
            >
              {page}
            </li>
          );
        })}
      </ul>
      <button
        onClick={rightButtonClick}
        className={
          currentPage === totalPages
            ? "pagination__btn btn-disabled"
            : "pagination__btn"
        }
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Pegination;
