import React from "react";
// import { css, keyframes } from "@emotion/core";
import PropTypes from "prop-types";
import "./ColorList.css";

const ChartList = (props) => {
  return (
    <div className="chart-list">
      <header className="color__wrapper">
        <div className="color__left">
          <span>Available Job Postings</span>
          <span className="header__total-tag">40</span>
        </div>
        <div className="color__right">
          <button>Desc</button>
        </div>
      </header>
      <div className="color__wrapper">
        <div className="color__left">
          <div className="color__placeholder"></div>
          <span>UX Developer</span>
        </div>
        <div className="color__right">
          <span>#UXD158</span>
        </div>
      </div>
      <div className="color__wrapper">
        <div className="color__left">
          <div className="color__placeholder"></div>
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
  );
};

ChartList.propTypes = {};

export default ChartList;
