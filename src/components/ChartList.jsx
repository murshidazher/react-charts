import React from "react";
import { css } from "emotion";
import PropTypes from "prop-types";
import "./ColorList.scss";
import { Button } from "react-bootstrap";

const ChartList = ({ jobs, selected }) => {
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
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>UX Developer</span>
          </div>
          <div className="color__right">
            <span>#UXD158</span>
          </div>
        </div>
        <div className="color__wrapper selected">
          <div className="color__left">
            <div className="color__placeholder">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-check"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>UI Developer</span>
          </div>
          <div className="color__right">
            <span>#UID864</span>
          </div>
        </div>
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>Software Engineer</span>
          </div>
          <div className="color__right">
            <span>#SE150</span>
          </div>
        </div>
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>Senior SE</span>
          </div>
          <div className="color__right">
            <span>#SE1864</span>
          </div>
        </div>
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>HR Manager</span>
          </div>
          <div className="color__right">
            <span>#HRM15</span>
          </div>
        </div>
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>Frontend Developer</span>
          </div>
          <div className="color__right">
            <span>#FED158</span>
          </div>
        </div>
        <div className="color__wrapper">
          <div className="color__left">
            <div className="color__placeholder"></div>
            <span>Backend Developer</span>
          </div>
          <div className="color__right">
            <span>#BD158</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const jobs = [
  {
    id: "UX Developer",
    title: "#UXD158",
  },
  {
    id: "UI Developer",
    title: "#UID864",
  },
  {
    id: "Software Engineer",
    title: "#SE150",
  },
  {
    id: "aassa",
    title: "asasasa",
  },
  {
    id: "aassa",
    title: "asasasa",
  },
  {
    id: "aassa",
    title: "asasasa",
  },
  {
    id: "aassa",
    title: "asasasa",
  },
  {
    id: "aassa",
    title: "asasasa",
  },
];

ChartList.propTypes = {};

export default ChartList;
