import React, { useState } from "react";
import "../App.css";
import { css } from "emotion";
import ChartList from "../components/ChartList";
import ReactApexChart from "react-apexcharts";
import { Button, ButtonGroup } from "react-bootstrap";

import "./Graphs.css";

const generateRandomNumber = (min, max, num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const rand = min + parseInt(Math.random() * (max - min));
    arr[i] = rand;
  }

  return arr;
};

const exSeries = [
  {
    name: "UX Enginner",
    data: generateRandomNumber(0, 50, 31),
  },
  {
    name: "HR Manager",
    data: generateRandomNumber(0, 50, 31),
  },
];

function Graph() {
  const [series, setSeries] = useState(exSeries);

  const options = {
    chart: {
      id: "line-criteria-match",
      toolbar: {
        show: false,
        offsetX: 0,
        offsetY: -4.5,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
      zoom: {
        autoScaleYaxis: true,
      },
    },
    colors: ["#E323FF", "#FFB364"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [4, 4],
      dashArray: [0, 4],
    },
    xaxis: {
      type: "datetime",
      categories: [],
      labels: {
        show: true,
        rotate: -45,
        rotateAlways: false,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [],
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
        offsetX: 0,
        offsetY: 0,
        format: undefined,
        formatter: undefined,
        datetimeUTC: true,
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd",
          hour: "HH:mm",
        },
      },
      axisBorder: {
        show: false,
        color: "#f4b2f1",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: false,
        borderType: "solid",
        color: "#f4b2f1",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      tickAmount: 6,
      tickPlacement: "between",
      min: undefined,
      max: undefined,
      range: undefined,
      floating: false,
      position: "bottom",
      title: {
        text: undefined,
        offsetX: 0,
        offsetY: 0,
        style: {
          color: undefined,
          fontSize: "12px",
          fontFamily: "Roboto, sans-serif",
          fontWeight: 600,
          cssClass: "apexcharts-xaxis-title",
        },
      },
      crosshairs: {
        show: true,
        width: 1,
        position: "back",
        opacity: 0.9,
        stroke: {
          color: "#b6b6b6",
          width: 0,
          dashArray: 0,
        },
        fill: {
          type: "solid",
          color: "#B1B9C4",
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
        dropShadow: {
          enabled: false,
          top: 0,
          left: 0,
          blur: 1,
          opacity: 0.4,
        },
      },
      categories: [
        "7/1/20",
        "7/2/20",
        "7/3/20",
        "7/4/20",
        "7/5/20",
        "7/6/20",
        "7/7/20",
        "7/8/20",
        "7/9/20",
        "7/10/20",
        "7/11/20",
        "7/12/20",
        "7/13/20",
        "7/14/20",
        "7/15/20",
        "7/16/20",
        "7/17/20",
        "7/18/20",
        "7/19/20",
        "7/20/20",
        "7/21/20",
        "7/22/20",
        "7/23/20",
        "7/24/20",
        "7/25/20",
        "7/26/20",
        "7/27/20",
        "7/28/20",
        "7/29/20",
        "7/30/20",
        "7/31/20",
      ],
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      shared: false,
      x: {
        show: false,
        format: "dd/MM/yy",
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => "",
        },
      },
      marker: {
        show: true,
      },
    },
    yaxis: {
      show: true,
      showAlways: true,
      showForNullSeries: true,
      seriesName: undefined,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: true,
      borderColor: "#DFE3E8",
      strokeWidth: 2,
      strokeDashArray: 3,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: undefined,
        opacity: 0.5,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 40,
        left: 24,
      },
    },
    legend: {
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: "top",
      horizontalAlign: "left",
      floating: false,
      fontSize: "14px",
      fontFamily: "Roboto",
      fontWeight: 400,
      formatter: undefined,
      inverseOrder: false,
      width: undefined,
      height: undefined,
      horizontal: 24,
      tooltipHoverFormatter: undefined,
      offsetX: 0,
      offsetY: 0,
      labels: {
        colors: undefined,
        useSeriesColors: false,
      },
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: "#fff",
        fillColors: undefined,
        radius: 12,

        onClick: undefined,
        offsetX: 0,
        offsetY: 0,
      },
      itemMargin: {
        horizontal: 24,
        vertical: 0,
      },
      onItemClick: {
        toggleDataSeries: true,
      },
      onItemHover: {
        highlightDataSeries: true,
      },
    },
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>Dashboard</h2>
      <br />
      <div>
        <div className={css``}>
          <div
            className={css`
              width: 710px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              margin: 0 40px;
            `}
          >
            <div
              className={css`
                align-items: flex-start;
                display: flex;
                flex-direction: column;

                h5 {
                  margin-bottom: 4px;
                }
                .subtitle {
                  color: #bebebe;
                  font-weight: 700;
                }
              `}
            >
              <h5>Job Application Trends</h5>
              <h6 className="text-uppercase">
                <small className="subtitle ">
                  Values Depend on Criteria Match
                </small>
              </h6>
            </div>
            <div>
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Line</Button>
                <Button variant="secondary">Bar</Button>
              </ButtonGroup>
            </div>
          </div>
          <div>
            <Button
              type="button"
              size="md"
              className={css`
                padding: 0.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-color: rgb(228 228 228);
              `}
              variant="outline-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon nm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 3 21 3 21 9"></polyline>
                <polyline points="9 21 3 21 3 15"></polyline>
                <line x1="21" y1="3" x2="14" y2="10"></line>
                <line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </Button>
            <Button
              type="button"
              size="md"
              className={css`
                padding: 0.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-color: rgb(228 228 228);
              `}
              variant="outline-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="button__icon nm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="23 4 23 10 17 10"></polyline>
                <polyline points="1 20 1 14 7 14"></polyline>
                <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
              </svg>
            </Button>
            <select name="source" id="">
              <option value="all">All Sources</option>
              <option value="ikman">Ikman</option>
              <option value="topjobs">Top Jobs</option>
              <option value="linkedin">Linkedin</option>
            </select>
            <select name="criteria" id="">
              <option value="received">Received</option>
              <option value="accepted">Accepted</option>
              <option value="rejected">Rejected</option>
            </select>
            <select name="range" id="">
              <option value="day">Day</option>
              <option value="week">Week</option>
              <option value="month">Month</option>
            </select>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          `}
        >
          <ReactApexChart
            options={options}
            series={series}
            type="line"
            height={350}
            width={"500px"}
          />
          <ChartList jobs={["a"]} selected={series} />
        </div>
        <br />
      </div>
      {/* <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      /> */}
    </div>
  );
}

export default Graph;
