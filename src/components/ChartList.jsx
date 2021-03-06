import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import "./ColorList.scss";
import { Button } from "react-bootstrap";

const ChartList = ({ jobs, selected, handleListItemPress }) => {
  // search the array to find if a particular record exists
  const search = (nameKey, myArray) => {
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i].id === nameKey) {
        return true;
      }
    }
  };

  return (
    <div className="chart-list">
      <header className="header__wrapper">
        <div className="color__left">
          <span>Available Job Postings</span>
          <span className="header__total-tag">40</span>
        </div>
        <div className="color__right">
          <Button
            type="button"
            size="sm"
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              border-color: rgb(228 228 228);
            `}
            variant="outline-secondary"
          >
            Desc
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="button__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </Button>
        </div>
      </header>
      <div className="color__body">
        {Object.entries(jobs).map(([key, value]) => {
          const util = search(key, selected) ? "selected" : "";
          return (
            <div
              key={key}
              className={`color__wrapper ${util}`}
              onClick={(e) => handleListItemPress(key, e)}
            >
              <div className="color__left">
                <div className="color__placeholder"></div>
                <span>{value.name}</span>
              </div>
              <div className="color__right">
                <span>{key}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

ChartList.propTypes = {};

export default ChartList;
