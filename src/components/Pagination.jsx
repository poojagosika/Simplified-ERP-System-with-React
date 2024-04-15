import React from "react";

const Pagination = ({ skip, setSkip, pageCount }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        <li className={skip === 0 ? "page-item disabled" : "page-item"}>
          <a
            className="page-link"
            href="#"
            onClick={() => {
              setSkip(skip - 10);
            }}
          >
            Previous
          </a>
        </li>
        <li
          className={
            skip >= pageCount - 10 ? "page-item disabled" : "page-item"
          }
        >
          <a
            className="page-link"
            href="#"
            onClick={() => {
              setSkip(skip + 10);
            }}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
