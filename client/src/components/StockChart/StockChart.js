import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Spinner } from "reactstrap";

const StockChart = ({ symbol }) => {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    const chartApiUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/batch?token=pk_ab67997aa39c4296b79de441635e9a49&types=chart,quote&range=ytd`;
    axios(chartApiUrl).then(({ data: { chart } }) => setChartData(chart));
  }, [symbol]);

  return chartData ? (
    <Line
      data={{
        labels: chartData.map((data) => data.label),
        datasets: [
          {
            label: "Closing Price",
            data: chartData.map((data) => data.close),
            borderColor: ["#5debe7"],
            fill: false,
            pointBackgroundColor: "white",
            borderWidth: 2,
          },
          {
            label: "High Price",
            data: chartData.map((data) => data.high),
            borderColor: ["#efc764"],
            fill: false,
            pointBackgroundColor: "white",
            borderWidth: 2,
          },
          {
            label: "Low Price",
            data: chartData.map((data) => data.low),
            fill: false,
            borderColor: ["#e93232"],
            pointBackgroundColor: "white",
            borderWidth: 2,
          },
        ],
      }}
      options={{
        legend: {
          display: true,
          position: "top",
          labels: {
            fontColor: "#fff",
            fontSize: 16,
          },
        },
        // scale: {
        //   gridLines: {
        //     ticks: {
        //       fontColor: "#fff",
        //     },
        //   },
        // },
        // scales: {
        //   ticks: {
        //     fontColor: "#fff",
        //   },
        //   xAxes: {
        //     color: "#fff",
        //   },
        // },
        tooltips: {
          displayColors: false,
          bodyFontSize: 20,
          titleFontSize: 15,

          xPadding: 20,
          yPadding: 20,
          callbacks: {
            label: (tooltipItem, data) => {
              return `$ ${tooltipItem.value}`;
            },
          },
        },
      }}
    />
  ) : (
    <Spinner />
  );
};

export default StockChart;
