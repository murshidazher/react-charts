import React from "react";
import "../App.css";
import { css } from "emotion";
import ChartList from "../components/ChartList";
import ReactApexChart from "react-apexcharts";
import { Button, ButtonGroup } from "react-bootstrap";

import "./Graphs.css";

function Graph() {
  const series = [
    {
      name: "Cases",
      data: [
        555,
        12038,
        69030,
        88369,
        167466,
        932638,
        2055423,
        3343777,
        3845718,
      ],
    },
    {
      name: "Recovered",
      data: [28, 284, 9394, 42710, 76026, 191853, 501538, 1029651, 1255481],
    },
    {
      name: "Deaths",
      data: [17, 259, 1666, 2996, 6472, 49675, 140658, 238619, 269567],
    },
  ];
  const options = {
    chart: {
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
          customIcons: []
        }
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: [1, 7, 5],
      dashArray: [0, 8, 5]
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
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 400,
              cssClass: 'apexcharts-xaxis-label',
          },
          offsetX: 0,
          offsetY: 0,
          format: undefined,
          formatter: undefined,
          datetimeUTC: true,
          datetimeFormatter: {
              year: 'yyyy',
              month: "MMM 'yy",
              day: 'dd MMM',
              hour: 'HH:mm',
          },
      },
      axisBorder: {
          show: false,
          color: '#f4b2f1',
          height: 1,
          width: '100%',
          offsetX: 0,
          offsetY: 0
      },
      axisTicks: {
          show: false,
          borderType: 'solid',
          color: '#f4b2f1',
          height: 6,
          offsetX: 0,
          offsetY: 0
      },
      tickAmount: undefined,
      tickPlacement: 'between',
      min: undefined,
      max: undefined,
      range: undefined,
      floating: false,
      position: 'bottom',
      title: {
          text: undefined,
          offsetX: 0,
          offsetY: 0,
          style: {
              color: undefined,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 600,
              cssClass: 'apexcharts-xaxis-title',
          },
      },
      crosshairs: {
          show: true,
          width: 1,
          position: 'back',
          opacity: 0.9,        
          stroke: {
              color: '#b6b6b6',
              width: 0,
              dashArray: 0,
          },
          fill: {
              type: 'solid',
              color: '#B1B9C4',
              gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
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
        "1/22/20",
        "2/1/20",
        "2/15/20",
        "3/1/20",
        "3/15/20",
        "4/1/20",
        "4/15/20",
        "5/1/20",
        "5/7/20",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy",
      },
    },
    yaxis: {
      show: true,
      showAlways: true,
      showForNullSeries: true,
      seriesName: undefined,
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
    },
    grid: {
      show: true,
      borderColor: '#f2f2f2',
      strokeDashArray: 4,
      position: 'back',
      xaxis: {
          lines: {
              show: false
          }
      },   
      yaxis: {
          lines: {
              show: true
          }
      },  
      row: {
          colors: undefined,
          opacity: 0.5
      },  
      column: {
          colors: undefined,
          opacity: 0.5
      },  
      padding: {
          top: 0,
          right: 0,
          bottom: 40,
          left: 24
      },  
    },
    legend: {
      
      show: true,
      showForSingleSeries: false,
      showForNullSeries: true,
      showForZeroSeries: true,
      position: 'top',
      horizontalAlign: 'left', 
      floating: false,
      fontSize: '14px',
      fontFamily: 'Helvetica, Arial',
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
          useSeriesColors: false
      },
      markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
        radius: 12,
          
        onClick: undefined,
          offsetX: 0,
          offsetY: 0
      },
      itemMargin: {
          horizontal: 24,
          vertical: 0
      },
      onItemClick: {
          toggleDataSeries: true
      },
      onItemHover: {
          highlightDataSeries: true
      },
    }
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
        <div
          
        >
          <div className={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 0 40px;
        `}>
            <div
              className={css`
              align-items: flex-start;
              display: flex;
              flex-direction: column;
            


              h5 {
                margin-bottom: 4px;
              }
              .subtitle {
                color: #BEBEBE;
                font-weight: 700;
              }

            `}
            >
              <h5>Job Application Trends</h5>
              <h6 className="text-uppercase"><small className="subtitle ">Values Depend on Criteria Match</small></h6>
            </div>
            <div>
              <ButtonGroup aria-label="Basic example">
              <Button variant="secondary">Line</Button>
              <Button variant="secondary">Bar</Button>
            </ButtonGroup>
            <Button
              type="button"
              size="md"
              className={css`
                padding: .5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                border-color: rgb(228 228 228);
              `}
              variant="outline-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="button__icon nm"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                focusable="false"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Button>
            </div>
          </div>
          <div>
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
            width={800}
          />
          <ChartList/>
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
